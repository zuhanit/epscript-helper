import * as vscode from "vscode";
import { functions } from "./signature/functions";
import { params } from "./signature/params";
import getFileFunction  from './parse/function';
export class EPSCompletionItemProvider implements vscode.CompletionItemProvider {
    public provideCompletionItems(
        document: vscode.TextDocument, 
        position: vscode.Position, 
        token: vscode.CancellationToken, 
        context: vscode.CompletionContext
    ) {
        const totalWord = document.getText(new vscode.Range(new vscode.Position(position.line, 0), position));
        const lineText = document.lineAt(position.line).text;
        let paramCount: number = 0;
        let functionName: string = "";
        let inScope: boolean = false;
        let leftClose: number = 0;
        let rightClose: number = 0;
        let methodDotCount: number = 0;
        let lastMethodDotCharacter: number = 0;
        let methodName: string = "";
        const completionItemList = [];
        const objects = this.getFileObjects(document, position.line);
        const variableNames = this.getFileVariable(document, position.line);

        const linePrefix = document.lineAt(position.line).text.substr(0, position.character);
        const linePrefixRegex = new RegExp(methodName + '\\.$');
        const linePrefixObjectTest = linePrefixRegex.test(linePrefix);

        // Check code is surrounded. if leftClose > rightClose => surrounded.
        for (let i = 0; i < totalWord.length; i++) {
            let currentCharacter: string = totalWord.charAt(i);
            if (currentCharacter === '(') {
                let functionNameRange = document.getWordRangeAtPosition(new vscode.Position(position.line, i-1));
                functionName = document.getText(functionNameRange);
                leftClose += 1;
            }
            if (currentCharacter === ')') {
                rightClose += 1;
            }
            if (currentCharacter === '.') {
                let methodNameRange = document.getWordRangeAtPosition(new vscode.Position(position.line, i-1));
                methodName = document.getText(methodNameRange);
                methodDotCount += 1;
            }
        }
        if (leftClose > rightClose) {
            inScope = true;
        } else if (leftClose === rightClose) {
            inScope = false;
        }

        if (inScope === true) {
            const isEPSFunction = functions[functionName as keyof typeof functions] === undefined? true : false;
            if (isEPSFunction === true) {
                for (let i in functions) {
                    const completion = new vscode.CompletionItem(i);
                    completion.kind = vscode.CompletionItemKind.Function;
                    completion.documentation = functions[i as keyof typeof functions].description;
                    completionItemList.push(completion);
                }
            } else if(isEPSFunction === false) { // Suggest function parameter
                for (let k = 0; k < totalWord.length; k++) {
                    let currentCharacter: string = totalWord.charAt(k);
                    if (currentCharacter === ',') {
                        paramCount += 1;
                    }
                    if (currentCharacter === ')') {
                        return undefined;
                    }
                }
                // ????????? paraameter, variable, const??? ???????????? ??????.
                if (linePrefixObjectTest === false) {
                    const currentFunctionParams = functions[functionName as keyof typeof functions];
                    const currentParameterName = currentFunctionParams.params[paramCount].name;
                    const currentParameterTypes = params[currentParameterName as keyof typeof params].type;
                    for (let i in currentParameterTypes) {
                        const parameterTypesName: string = currentParameterName === 'unit' ? `"${currentParameterTypes[i]}"` : `${currentParameterTypes[i]}`;
                        const completion = new vscode.CompletionItem(parameterTypesName);
                        completion.kind = vscode.CompletionItemKind.Constant;
                        completionItemList.push(completion);
                    }
                }
            }
        } else if(inScope === false) {
            for (let i = 0; i < objects.length; i++) {
                const completion = new vscode.CompletionItem(objects[i].name, vscode.CompletionItemKind.Class);
                completionItemList.push(completion);
            }
            if(functions[functionName as keyof typeof functions] === undefined? true : false) {
                for (let i in functions) {
                    const completion = new vscode.CompletionItem(i);
                    completion.kind = vscode.CompletionItemKind.Function;
                    completion.documentation = functions[i as keyof typeof functions].description;
                    completionItemList.push(completion);
                }
            }
        }

        if (linePrefixObjectTest === true) {
            let variableObjectName = "";
            for (const key of variableNames) {
                if(key.name === methodName) {
                    variableObjectName = key.objectName;
                }
            }
            objects.map((u) => {
            if ((u.name === variableObjectName)) {
                for (const prop of u.properties) {
                    const completion = new vscode.CompletionItem(prop.name);
                    completionItemList.push(completion);
                }
            }});
        } else {
            for (const variableName of variableNames) {
                const completion = new vscode.CompletionItem(variableName.name);
                completion.kind = vscode.CompletionItemKind.Variable;
                completionItemList.push(completion);
            }
        }
        /*
        const linePrefix = document.lineAt(position.line).text.substr(0, position.character);
        if (linePrefix.endsWith('.')) {
            const objectName: string = this.getVariableObjectName(document, position.line);
            objects.map((u => {
                if (u.name === objectName) {
                    for (const k of u.properties) {
                        const completion = new vscode.CompletionItem(k.name);
                        completion.documentation = new vscode.MarkdownString(k.documentation);
                        completionItemList.push(completion);
                    }
                }
            }));
        }
        */
        const localFunctions = getFileFunction(document, position.line);
        for (const func of localFunctions) {
            const completion = new vscode.CompletionItem(func.name);
            completion.kind = vscode.CompletionItemKind.Function;
            completionItemList.push(completion);
        }
        return completionItemList;
    }

    private getFileVariable(document: vscode.TextDocument, positionLine: number) {
        class Variable {
            name: string;
            type: string;
            isObject: boolean;
            objectName: string;
            constructor (name: string, type: string) {
                this.name = name;
                this.type = type;
                this.isObject = false;
                this.objectName = "";
            }
        }
        const variableNames = [];
        const declarationRegex = new RegExp('^(\\S*)(const|var)(\\s)(.*)');
        for (let currentLine = 0; currentLine < positionLine; currentLine++) {
            const currentLineText = document.lineAt(currentLine).text;
            if (declarationRegex.test(currentLineText)) {
                const initRegex = new RegExp('(\\S*)(\\s)(=)(\\s)(.*)');
                const textArray = currentLineText.match(initRegex);
                if (textArray) {
                    const variable = new Variable(textArray[1], 'Variable');
                    const objectArray = textArray[5].match(new RegExp('(.*)(\\(\\))(;)'));
                    if (objectArray) {
                        variable.isObject = true;
                        variable.objectName = objectArray[1];
                    }
                    variableNames.push(variable);
                } else {
                    const variable = new Variable(currentLineText.substr(0, currentLineText.length - 1), 'Variable');
                    variableNames.push(variable);
                }
            }
        }
        return variableNames;
    }
    // }??? ????????? ????????? ???????????? ?????????. ???????????? ????????? ?????????????????? line??? ???????????? ???.
    // Object ?????????????????? ?????? ?????????, ????????? ?????? ?????? ????????? ?????? ????????? ??? ??????????????? ?????????...
    // ?????? ?????? ?????? ?????? Object??? completionlist??? ????????? ?????????? -> ????????? ?????? ??? ?????????
    // Object??? ????????? ??? ??????????????? ?????? ??? ???????????? ???????????? ?????? ???????????? ??????.
    // const k = Object();

    private getVariableObjectName(document: vscode.TextDocument, positionLine: number) {
        const lineText = document.lineAt(positionLine).text;
        const textArray = lineText.match(new RegExp('(.*)(\.)'));
        let objectName: string = "";
        if (textArray) {
            for (let currentLine = 0; currentLine < positionLine; currentLine++) {
                const currentText = document.lineAt(currentLine).text;
                const reg = new RegExp('(var|const)(\\s)(' + textArray[1] + ')(\\s)(=)(\\s)(.*)(\\(\\))');
                const matchedText = currentText.match(reg);
                if (matchedText) {
                    objectName = matchedText[7];
                }
            }
        }
        return objectName;
    }

    private getFileObjects(document: vscode.TextDocument, positionLine: number) {
        class Object {
            name: string;
            properties: Property[];

            constructor(name: string) {
                this.name = name;
                this.properties = [];
            }
        }
        class Property {
            name: string;
            declaration: string;
            documentation: string;

            constructor(name: string, declaration: string) {
                this.name = name;
                this.declaration = declaration;
                this.documentation = "";
            };
        }

        const objects: Object[] = [];

        for (let currentLine = 0; currentLine < positionLine; currentLine++) {
            const objectDefineRegex = new RegExp('(object)(\\s)(.*)(\\s)({)');
            const lineText = document.lineAt(currentLine).text;
            const textArray = lineText.match(objectDefineRegex);
            if (textArray) {
                const objectName = textArray[3];
                const objectPosition = getObjectPosition(objectName, document, positionLine);
                const objectDetails = getObjectDetails(objectName, document, objectPosition.startLine, objectPosition.endLine);
                const object = new Object(objectName);
                for (let i = 0; i < objectDetails.length; i++) {
                    object.properties.push(objectDetails[i]);
                }
                objects.push(object);
            }
        }
        return objects;

        function getObjectPosition(word: string, document: vscode.TextDocument, positionLine: number) {
            const objectDefineRegex = new RegExp('(object)(\\s)(' + word + ')(\\s)({)');
            const objectEndRegex = new RegExp('(};)');
            let startLine: number = 0;
            let endLine: number = 0;

            for (let currentLine = 0; currentLine < positionLine; currentLine++) {
                const lineText = document.lineAt(currentLine).text;
                if (objectDefineRegex.test(lineText)) {
                    startLine = currentLine;
                    break;
                }
            }
    
            for (let currentLine = startLine; currentLine < positionLine; currentLine++) {
                const lineText = document.lineAt(currentLine).text;
                if (objectEndRegex.test(lineText)) {
                    endLine = currentLine;
                    break;
                }
            }

            return {
                startLine: startLine,
                endLine: endLine
            };
        }

        function getObjectDetails(word: string, document: vscode.TextDocument, startLine: number, endLine: number) {
            const regex = new RegExp('(var|const)(\\s)(.*)');
            const retArray = [];
            for (let line = startLine; line < endLine; line++) {
                const currentTextLine = document.lineAt(line);
                const lineText = currentTextLine.text;
                const textArray = lineText.match(regex);
                if (textArray) {
                    const properties = new Property(textArray[3].substring(0, textArray[3].length-1), textArray[1]);
                    const typeofProperty = textArray[3].match('(.*)(:)(\\s)(.*)(;)');
                    if (typeofProperty) { // Type Defined.
                        properties.name = typeofProperty[1];
                    }
                    properties.documentation = `(property) property.${textArray[3].substring(0, textArray[3].length-1)}`;
                    retArray.push(properties);
                }
            }
            return retArray;
        }
    }
}
