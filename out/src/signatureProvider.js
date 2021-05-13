"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
/*
SetMemoryXEPD를 작성한다고 치자. SetMemoryXEPD(arg, arg, arg, arg)가 있다. 각 arg에 맞는 것이 있을 것임.
몇 번째 arg인지 확인해야 함.
또한 함수가 끝나면 반환을 종료해야 되기도 하다.
*/
class ProvideHelper {
    constructor(document, offset, lineNumber) {
        this.document = document;
        this.offset = offset;
        this.lineNumber = lineNumber;
        this.lineText = this.document.lineAt(this.lineNumber).text;
    }
}
class EPSSignatureHelpProvideer {
    provideSignatureHelp(document, position, token) {
        const textBeforeCursor = document.getText(new vscode.Range(new vscode.Position(position.line, 0), position));
        let parametersStart = textBeforeCursor.length;
        let isClosed = false;
        let parameterCount = 0;
        while (parametersStart > -1) {
            if (textBeforeCursor.charAt(parametersStart) === ",") {
                parameterCount += 1;
            }
            else if (textBeforeCursor.charAt(parametersStart) === ")") {
                isClosed = true;
            }
            else if (textBeforeCursor.charAt(parametersStart) === "(") {
                isClosed = false;
                break;
            }
        }
        const methodNameRange = document.getWordRangeAtPosition(new vscode.Position(position.line, parametersStart), /[\w\.]+/);
        const currentMethodName = document.getText(methodNameRange);
        const currentSignature = ;
        const signatureHelp = new vscode.SignatureHelp();
        return signatureHelp;
    }
}
//# sourceMappingURL=signatureProvider.js.map