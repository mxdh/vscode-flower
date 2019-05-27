'use strict';
import * as vscode from 'vscode';
import { ReminderView } from './reminderView';
import { Scheduler } from './scheduler';

export function activate(context: vscode.ExtensionContext) {
    const scheduler = new Scheduler(context);
    scheduler.start();

    vscode.workspace.onDidChangeTextDocument(changeEvent => {
        scheduler.stop();
        scheduler.start();
    });

    context.subscriptions.push(vscode.commands.registerCommand('flower.showReminderView', () => {
        ReminderView.show(context);
    }));
}

export function deactivate() {
}