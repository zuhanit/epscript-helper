import { NONAME, resolveTxt } from "dns";
import { type } from "os";
import { stringify } from "querystring";
import { start } from "repl";
import * as vscode from "vscode";
import { functions } from "./signature/functions";
import { params } from "./signature/params";
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
        let methodName: string = "";
        let inScope: boolean = false;
        let leftClose: number = 0;
        let rightClose: number = 0;
        const completionItemList = [];

        // Check code is surrounded. if leftClose > rightClose => surrounded.
        for (let i = 0; i < totalWord.length; i++) {
            let currentCharacter: string = totalWord.charAt(i);
            if (currentCharacter === '(') {
                let methodNameRange = document.getWordRangeAtPosition(new vscode.Position(position.line, i-1));
                methodName = document.getText(methodNameRange);
                leftClose += 1;
            }
            if (currentCharacter === ')') {
                rightClose += 1;
            }
        }
        if (leftClose > rightClose) {
            inScope = true;
        } else if (leftClose === rightClose) {
            inScope = false;
        }

        if (inScope === true) {
            const isEPSFunction = functions[methodName as keyof typeof functions] === undefined? true : false;
            if (isEPSFunction === true) {
                for (let i in functions) {
                    const completion = new vscode.CompletionItem(i);
                    completion.kind = vscode.CompletionItemKind.Function;
                    completion.documentation = functions[i as keyof typeof functions].description;
                    completionItemList.push(completion);
                }
            } else if(isEPSFunction === false) {
                for (let k = 0; k < totalWord.length; k++) {
                    let currentCharacter: string = totalWord.charAt(k);
                    if (currentCharacter === ',') {
                        paramCount += 1;
                    }
                    if (currentCharacter === ')') {
                        return undefined;
                    }
                }
                const currentFunctionParams = functions[methodName as keyof typeof functions];
                const currentParameterName = currentFunctionParams.params[paramCount].name;
                const currentParameterTypes = params[currentParameterName as keyof typeof params].type;
                for (let i in currentParameterTypes) {
                    const parameterTypesName: string = currentParameterName === 'Unit' ? `"${currentParameterTypes[i]}"` : `${currentParameterTypes[i]}`;
                    const completion = new vscode.CompletionItem(parameterTypesName);
                    completion.kind = vscode.CompletionItemKind.Constant;
                    completionItemList.push(completion);
                }
            }
        } else if(inScope === false) {
            if(functions[methodName as keyof typeof functions] === undefined? true : false) {
                console.log('isFunction');
                for (let i in functions) {
                    const completion = new vscode.CompletionItem(i);
                    completion.kind = vscode.CompletionItemKind.Function;
                    completion.documentation = functions[i as keyof typeof functions].description;
                    completionItemList.push(completion);
                }
            }
        }
        const objects = this.getFileObjects(document, position.line);
        for (let i = 0; i < objects.length; i++) {
            const completion = new vscode.CompletionItem(objects[i].name);
            completionItemList.push(completion);
        }
        return completionItemList;
    }

    // }로 닫히기 전까지 오브젝트 영역임. 오브젝트 라인이 어디까지인지 line을 체크해야 함.
    // Object 인터페이스를 하나 만들고, 거기에 파일 내의 객체를 전부 담으면 더 효율적이긴 할텐데...
    // 그냥 파일 내의 모든 Object를 completionlist에 넣으면 되잖아?

    private getFileObjects(document: vscode.TextDocument, positionLine: number) {
        class Object {
            name: string;
            properties!: Property[];

            constructor(name: string) {
                this.name = name;
            }
        }
        class Property {
            name: string;
            declaration: string;
            type?: string;

            constructor(name: string, declaration: string) {
                this.name = name;
                this.declaration = declaration;
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
            const objectEndRegex = new RegExp('}');
            let startLine: number = 0;
            let endLine: number = 0;
    
            for (let currentLine = 0; currentLine < positionLine; currentLine++) {
                const lineText = document.lineAt(currentLine).text;
                if (objectDefineRegex.test(lineText)) {
                    startLine = currentLine;
                }
                if (objectEndRegex.test(lineText)) {
                    endLine = currentLine;
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
                    const properties = new Property(textArray[1], textArray[0]);
                    const typeofProperty = textArray[2].match('(:)(\\s)(.*)');
                    if (typeofProperty) { // Type Defined.
                        properties.type = textArray[2];
                    }
                    retArray.push(properties);
                }
            }
            return retArray;
        }
    }
}