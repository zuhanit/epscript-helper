import * as vscode from 'vscode';
class MapTreeItem extends vscode.TreeItem {
    children: MapTreeItem[] | undefined;

    constructor(label: string, children?: MapTreeItem[]) {
        super(
            label,
            children === undefined ? vscode.TreeItemCollapsibleState.None :
                                    vscode.TreeItemCollapsibleState.Expanded
        );
        this.children = children;
    }
}

export class MapTreeDataProvider implements vscode.TreeDataProvider<MapTreeItem> {
    data: MapTreeItem[];

    constructor() {
        this.data = [new MapTreeItem('hoi')];
    }

    getTreeItem(element: MapTreeItem): vscode.TreeItem| Thenable<vscode.TreeItem> {
        return element;
    };
    getChildren(element?: MapTreeItem|undefined): vscode.ProviderResult<MapTreeItem[]> {
        if(element === undefined) {
            return this.data;
        }
        return element.children;
    }
}

