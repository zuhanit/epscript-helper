import * as vscode from 'vscode';
import getChkData from './mapTake';

export function finder() {
    getFolderMapFiles().then(function(data) {
        const items: vscode.QuickPickItem[] = [];
        data.forEach(path => items.push({label: path}));
        vscode.window.showQuickPick(items)
        .then((selection => {
            if (selection?.label !== undefined) {
                console.log(getChkData(selection?.label));
            }
        }));
    });
}

function getFolderMapFiles(): Promise<string[]> {
    return new Promise(function(resolve, reject) {
        const result = vscode.workspace.findFiles('**/*.scx').then(files => files.map(file => file.path));
        resolve(result);
        reject(new Error('An unknown error occurred!'));
    });
}
