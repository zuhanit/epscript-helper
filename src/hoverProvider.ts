import * as vscode from "vscode";
import { functions } from './signature/functions';

export class EPSHoverProvider implements vscode.HoverProvider {
    public provideHover(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
    ) {
        const range = document.getWordRangeAtPosition(position);
        const word = document.getText(range);
        if (this.functionChecker(word)) {
            const definition = functions[word as keyof typeof functions];
            const paramList = definition.params.map((u: any) => `${u.name}`).join(", ");
            const description = definition.description;
            const hoverText = new vscode.MarkdownString();
            hoverText.appendCodeblock(`function ${word}(${paramList})`, 'epscript');
            hoverText.appendMarkdown(description);
            const hover = new vscode.Hover(hoverText);
            return hover;
        }
        return null;
    }

    private functionChecker(word: string) {
        const c = functions[word as keyof typeof functions];
        return c !== undefined? true : false; 
    }
}