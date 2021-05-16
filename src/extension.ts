import * as vscode from 'vscode';
import { EPSSignatureHelpProvider } from "./signatureProvider";
import { EPSCompletionItemProvider } from "./completionProvider";
import { EPSHoverProvider } from "./hoverProvider";
import { functions } from "./signature/functions";

export function activate(context: vscode.ExtensionContext, document: vscode.TextDocument, position: vscode.Position) {
	context.subscriptions.push(
		vscode.languages.registerHoverProvider(
			'epscript', new EPSHoverProvider()
		)
	);
	
	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider(
			'epscript', new EPSCompletionItemProvider()
		)
	);
	
	context.subscriptions.push(
		vscode.languages.registerSignatureHelpProvider(
			'epscript', new EPSSignatureHelpProvider(), '(', ','
		)
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}