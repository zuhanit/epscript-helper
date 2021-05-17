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
        } else if(this.constChecker(word, document, position)) {
            const hoverText = new vscode.MarkdownString();
            hoverText.appendCodeblock(`const ${word}`, 'epscript');
            const hover = this.constProvider(word, document, position);
            return hover;
        }
        return null;
    }

    private functionChecker(word: string) {
        const c = functions[word as keyof typeof functions];
        return c !== undefined? true : false; 
    }

    private constChecker(
        word: string,
        document: vscode.TextDocument,
        position: vscode.Position
    ) {
        const regex = new RegExp('(\s*)(const|var)(\\s+)(' + word + ')(\\s*)(=)(\s*)(EUDArray|EUDVariable|EUDVarray|.*)(.*)');
        const textUntilPosition = document.getText(new vscode.Range(new vscode.Position(0, 0), position));
        return regex.test(textUntilPosition);
    }

    private constProvider(
        word: string,
        document: vscode.TextDocument,
        position: vscode.Position
    ) {
        const regex = new RegExp('(\s*)(const|var)(\\s+)(' + word + ')(\\s*)(=)(\s*)(EUDArray|EUDVariable|EUDVarray|.*)(.*)');
        const textUntilPosition = document.getText(new vscode.Range(new vscode.Position(0, 0), position));
        const m = textUntilPosition.match(regex);
        if (!m) {
            return;
        }
        const hoverText = new vscode.MarkdownString();
        hoverText.appendCodeblock(`${m[2]} ${m[4]} ${m[6]} ${m[8]}`);
        const hover = new vscode.Hover(hoverText);
        return hover;
    }
}