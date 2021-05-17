"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EPSCompletionItemProvider = void 0;
const vscode = require("vscode");
const functions_1 = require("./signature/functions");
const params_1 = require("./signature/params");
class EPSCompletionItemProvider {
    provideCompletionItems(document, position, token, context) {
        const totalWord = document.getText(new vscode.Range(new vscode.Position(position.line, 0), position));
        const lineText = document.lineAt(position.line).text;
        let paramCount = 0;
        let methodName = "";
        let inScope = false;
        let leftClose = 0;
        let rightClose = 0;
        const completionItemList = [];
        // Check code is surrounded. if leftClose > rightClose => surrounded.
        for (let i = 0; i < totalWord.length; i++) {
            let currentCharacter = totalWord.charAt(i);
            if (currentCharacter === '(') {
                let methodNameRange = document.getWordRangeAtPosition(new vscode.Position(position.line, i - 1));
                methodName = document.getText(methodNameRange);
                leftClose += 1;
            }
            if (currentCharacter === ')') {
                rightClose += 1;
            }
        }
        if (leftClose > rightClose) {
            inScope = true;
        }
        else if (leftClose === rightClose) {
            inScope = false;
        }
        if (inScope === true) {
            const k = functions_1.functions[methodName] === undefined ? true : false;
            if (k === true) {
                for (let i in functions_1.functions) {
                    const completion = new vscode.CompletionItem(i);
                    completion.kind = vscode.CompletionItemKind.Function;
                    completion.documentation = functions_1.functions[i].description;
                    completionItemList.push(completion);
                }
            }
            else if (k === false) {
                for (let k = 0; k < totalWord.length; k++) {
                    let currentCharacter = totalWord.charAt(k);
                    if (currentCharacter === ',') {
                        paramCount += 1;
                    }
                    if (currentCharacter === ')') {
                        return undefined;
                    }
                }
                const currentFunctionParams = functions_1.functions[methodName];
                const currentParameterName = currentFunctionParams.params[paramCount].name;
                const currentParameterTypes = params_1.params[currentParameterName].type;
                for (let i in currentParameterTypes) {
                    const parameterTypesName = currentParameterName === 'Unit' ? `"${currentParameterTypes[i]}"` : `${currentParameterTypes[i]}`;
                    const completion = new vscode.CompletionItem(parameterTypesName);
                    completion.kind = vscode.CompletionItemKind.Constant;
                    completionItemList.push(completion);
                }
            }
        }
        else if (inScope === false) {
            for (let i in functions_1.functions) {
                const completion = new vscode.CompletionItem(i);
                completion.kind = vscode.CompletionItemKind.Function;
                completion.documentation = functions_1.functions[i].description;
                completionItemList.push(completion);
            }
        }
        return completionItemList;
    }
}
exports.EPSCompletionItemProvider = EPSCompletionItemProvider;
//# sourceMappingURL=completionProvider.js.map