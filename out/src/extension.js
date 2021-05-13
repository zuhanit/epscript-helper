"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
class ProvideSignature {
    provideSignatureHelp(document, position, token, context) {
        const help = new vscode.SignatureHelp();
        const sigInfo = new vscode.SignatureInformation('Hello', 'Hello');
        help.signatures = [sigInfo];
        return help;
    }
}
function activate(context) {
    const provider = vscode.languages.registerCompletionItemProvider('plaintext', {
        provideCompletionItems(document, position, token, context) {
            const completion = new vscode.CompletionItem('SetMemoryXEPD');
            completion.kind = vscode.CompletionItemKind.Function;
            const c2 = new vscode.CompletionItem('Good Day!');
            return [
                completion,
                c2
            ];
        }
    });
    context.subscriptions.push(provider);
    const signatureHelper = vscode.languages.registerSignatureHelpProvider('plaintext', {
        provideSignatureHelp(document, position, token, context) {
            const help = new vscode.SignatureHelp();
            const sigInfo = new vscode.SignatureInformation('SetMemoryXEPD(offset, modifier, value, mask)', 'description');
            help.signatures = [sigInfo];
            return help;
        }
    }, '(', ',');
    context.subscriptions.push(signatureHelper);
}
exports.activate = activate;
//SetMemoryXEPD(offset, SetTo, Value, Mask);
//괄호가 열리고, 몇번째 argument인지 확인해야 하고, 괄호가 끝났다면 반환을 멈추기도 해야 함.
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map