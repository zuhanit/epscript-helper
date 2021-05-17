"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const signatureProvider_1 = require("./signatureProvider");
const completionProvider_1 = require("./completionProvider");
const hoverProvider_1 = require("./hoverProvider");
function activate(context, document, position) {
    context.subscriptions.push(vscode.languages.registerHoverProvider('epscript', new hoverProvider_1.EPSHoverProvider()));
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('epscript', new completionProvider_1.EPSCompletionItemProvider()));
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider('epscript', new signatureProvider_1.EPSSignatureHelpProvider(), '(', ','));
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map