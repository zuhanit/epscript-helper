"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EPSHoverProvider = void 0;
const vscode = require("vscode");
const functions_1 = require("./signature/functions");
class EPSHoverProvider {
    provideHover(document, position, token) {
        const range = document.getWordRangeAtPosition(position);
        const word = document.getText(range);
        if (this.functionChecker(word)) {
            const definition = functions_1.functions[word];
            const paramList = definition.params.map((u) => `${u.name}`).join(", ");
            const description = definition.description;
            const hoverText = new vscode.MarkdownString();
            hoverText.appendCodeblock(`function ${word}(${paramList})`, 'epscript');
            hoverText.appendMarkdown(description);
            const hover = new vscode.Hover(hoverText);
            return hover;
        }
        else if (this.constChecker(word, document, position)) {
            const hoverText = new vscode.MarkdownString();
            hoverText.appendCodeblock(`const ${word}`, 'epscript');
            const hover = this.constProvider(word, document, position);
            return hover;
        }
        return null;
    }
    functionChecker(word) {
        const c = functions_1.functions[word];
        return c !== undefined ? true : false;
    }
    constChecker(word, document, position) {
        const regex = new RegExp('(\s*)(const|var)(\\s+)(' + word + ')(\\s*)(=)(\s*)(EUDArray|EUDVariable|EUDVarray|.*)(.*)');
        const textUntilPosition = document.getText(new vscode.Range(new vscode.Position(0, 0), position));
        return regex.test(textUntilPosition);
    }
    constProvider(word, document, position) {
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
exports.EPSHoverProvider = EPSHoverProvider;
//# sourceMappingURL=hoverProvider.js.map