'use strict';
import * as vscode from "vscode";
import { ReminderView } from './reminderView';
import { Utility } from './utility';

export class Scheduler {
    private timer: any;
    private flag: boolean = false;
    private time: number = Utility.getConfiguration().get<number>('reminderViewIntervalInMinutes', 30);
    public constructor(private context: vscode.ExtensionContext) {
    }

    public start() {
        if (!this.flag) {
            this.timer = setInterval(() => {
                ReminderView.show(this.context);
            }, 1000 * 60 * this.time);
            this.flag = true;
        }
    }
    public stop() {
        if (this.flag) {
            clearInterval(this.timer);
            this.flag = false;
        }
    }
}