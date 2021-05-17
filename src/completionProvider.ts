import { NONAME } from "dns";
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
            const k = functions[methodName as keyof typeof functions] === undefined? true : false;
            if (k === true) {
                for (let i in functions) {
                    const completion = new vscode.CompletionItem(i);
                    completion.kind = vscode.CompletionItemKind.Function;
                    completion.documentation = functions[i as keyof typeof functions].description;
                    completionItemList.push(completion);
                }
            } else if(k === false) {
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
            for (let i in functions) {
                const completion = new vscode.CompletionItem(i);
                completion.kind = vscode.CompletionItemKind.Function;
                completion.documentation = functions[i as keyof typeof functions].description;
                completionItemList.push(completion);
            }
        }
        return completionItemList;
    }
}

