"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EPSCompletionItemProvider = void 0;
const vscode = require("vscode");
const functions_1 = require("./signature/functions");
class EPSCompletionItemProvider {
    provideCompletionItems(document, position, token, context) {
        const completionItemList = [];
        for (let i in functions_1.functions) {
            const completion = new vscode.CompletionItem(i);
            completionItemList.push(completion);
        }
        return completionItemList;
    }
}
exports.EPSCompletionItemProvider = EPSCompletionItemProvider;
//# sourceMappingURL=completionProvider.js.map