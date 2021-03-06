import * as vscode from 'vscode';
import { functions } from "./signature/functions";
import { params } from "./signature/params";
import getFileFunction from './parse/function';

    /*
    SetMemoryXEPD를 작성한다고 치자. SetMemoryXEPD(arg, arg, arg, arg)가 있다. 각 arg에 맞는 것이 있을 것임.
    몇 번째 arg인지 확인해야 함.
    또한 함수가 끝나면 반환을 종료해야 되기도 하다.
    함수의 몇번째 arg인지, 어떤 함수인지.
    */

export class EPSSignatureHelpProvider implements vscode.SignatureHelpProvider {
    public provideSignatureHelp(
        document: vscode.TextDocument, 
        position: vscode.Position
    ) {
        const totalWord = document.getText(new vscode.Range(new vscode.Position(position.line, 0), position));
        let paramCount: number = 0;
        let methodName: string = "";
        let leftBracket: number = 0;
        let rightBracket: number = 0;

        for (let i = 0; i <= totalWord.length; i++) {
            let currentCharacter: string = totalWord.charAt(i);
            if (currentCharacter === ',') {
                paramCount += 1;
            }
            if (currentCharacter === '(') {
                const methodNameRange = document.getWordRangeAtPosition(new vscode.Position(position.line, i-1));
                const k = functions[methodName as keyof typeof functions] === undefined? true : false;
                if (k === true) {
                    methodName = document.getText(methodNameRange);
                }
                leftBracket += 1;
            }
            if (currentCharacter === ')') {
                rightBracket += 1;
            }
            if (i === totalWord.length) {
                if (leftBracket === rightBracket) {
                    return undefined;
                }
            }
        }

        const localFunctions = getFileFunction(document, position.line);

        const signatureHelp = new vscode.SignatureHelp();
        if (!!functions[methodName as keyof typeof functions]) { // need to refactoring. change functions type object to class and using filter to optimize.
            const native = functions[methodName as keyof typeof functions];
            const paramLength = native.params.length;
            const paramArray = [];
            for (let i = 0; i < paramLength; i++) {
                const paramName = native.params[i].name;
                const paramInfo = new vscode.ParameterInformation(paramName, params[paramName as keyof typeof params].description);
                paramArray.push(paramInfo);
            }
            const paramList = native.params.map((u: any) => `${u.name}`).join(", ");
            const signatureLabel: string = `${methodName}(${paramList})`;
            signatureHelp.signatures = [];
            const signatureInfo = new vscode.SignatureInformation(signatureLabel, native.description);
            signatureHelp.signatures.push(signatureInfo);
            signatureInfo.parameters = paramArray;
            signatureHelp.activeSignature = 0;
            signatureHelp.activeParameter = paramCount;
        } else if (!!localFunctions.find(el => el.name === methodName)) {
            const paramArray = [];
            const func = localFunctions.find(el => el.name === methodName);
            if (!!func?.params) {
                for (const param of func.params) {
                    const paramInfo = new vscode.ParameterInformation(param);
                    paramArray.push(paramInfo);
                }
            }
            const paramList = func?.params?.join(', ');
            const signatureLabel: string = `${methodName}(${paramList})`;
            const signatureInfo = new vscode.SignatureInformation(signatureLabel);
            signatureInfo.parameters = paramArray;
            signatureHelp.signatures = [];
            signatureHelp.signatures.push(signatureInfo);
            signatureHelp.activeParameter = paramCount;
            signatureHelp.activeSignature = 0;
        }
        return signatureHelp;
    }
}