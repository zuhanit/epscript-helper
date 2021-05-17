"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EPSSignatureHelpProvider = void 0;
const vscode = require("vscode");
const functions_1 = require("./signature/functions");
const params_1 = require("./signature/params");
/*
SetMemoryXEPD를 작성한다고 치자. SetMemoryXEPD(arg, arg, arg, arg)가 있다. 각 arg에 맞는 것이 있을 것임.
몇 번째 arg인지 확인해야 함.
또한 함수가 끝나면 반환을 종료해야 되기도 하다.
함수의 몇번째 arg인지, 어떤 함수인지.
*/
class EPSSignatureHelpProvider {
    provideSignatureHelp(document, position) {
        const totalWord = document.getText(new vscode.Range(new vscode.Position(position.line, 0), position));
        let paramCount = 0;
        let methodName = "";
        for (let i = 0; i < totalWord.length; i++) {
            let currentCharacter = totalWord.charAt(i);
            if (currentCharacter === ',') {
                paramCount += 1;
            }
            if (currentCharacter === '(') {
                const methodNameRange = document.getWordRangeAtPosition(new vscode.Position(position.line, i - 1));
                methodName = document.getText(methodNameRange);
            }
            if (currentCharacter === ')') {
                return undefined;
            }
        }
        const native = functions_1.functions[methodName];
        const paramLength = native.params.length;
        const paramArray = [];
        for (let i = 0; i < paramLength; i++) {
            const paramName = native.params[i].name;
            const paramInfo = new vscode.ParameterInformation(paramName, params_1.params[paramName].description);
            paramArray.push(paramInfo);
        }
        const paramList = native.params.map((u) => `${u.name}`).join(", ");
        const signatureLabel = `${methodName}(${paramList})`;
        const signatureHelp = new vscode.SignatureHelp();
        signatureHelp.signatures = [];
        const signatureInfo = new vscode.SignatureInformation(signatureLabel, native.description);
        signatureHelp.signatures.push(signatureInfo);
        signatureInfo.parameters = paramArray;
        signatureHelp.activeSignature = 0;
        signatureHelp.activeParameter = paramCount;
        return signatureHelp;
    }
}
exports.EPSSignatureHelpProvider = EPSSignatureHelpProvider;
//# sourceMappingURL=signatureProvider.js.map