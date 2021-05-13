import * as vscode from "vscode";
import { functions } from "./signature/functions";

export class EPSCompletionItemProvider implements vscode.CompletionItemProvider {
    public provideCompletionItems(
        document: vscode.TextDocument, 
        position: vscode.Position, 
        token: vscode.CancellationToken, 
        context: vscode.CompletionContext
    ) {
        const completionItemList = [];
        for (let i in functions) {
            const completion = new vscode.CompletionItem(i);
            completionItemList.push(completion);
        }

        return completionItemList;
    }
}

