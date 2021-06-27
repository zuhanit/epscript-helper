import * as vscode from 'vscode';

export default function getFileFunction(document: vscode.TextDocument, positionLine: number) {
    class Function {
        name: string;
        params?: string[];
        constructor (name: string) {
            this.name = name;
        }
    }
    const localFunctions: Function[] = [];
    const parseParamDeclaraction = /([^\(]*)\s*\(([^\)]*)\)/m;
    const paramSplit = new RegExp(',');
    for (let currentLine = 0; currentLine < positionLine; currentLine++) {
        const currentLineText = document.lineAt(currentLine).text;
        if (currentLineText.startsWith('function')) {
            const params: Array<string> = [];
            const funcText = currentLineText.replace('function', ''); // function myFunctionName (args) { => myFunctionName (args) {
            const paramDeclaractions = funcText.match(parseParamDeclaraction);
            if (paramDeclaractions) {
                const funcName = paramDeclaractions[1].trim();
                const func = new Function(funcName);
                paramDeclaractions[2].split(paramSplit).forEach((e => params.push(e.replace('\s', '').trim())));
                func.params = params;
                localFunctions.push(func);
            }
        }
    }
    return localFunctions;
}