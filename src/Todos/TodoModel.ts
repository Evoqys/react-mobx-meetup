import {action, observable} from "mobx";

export class Todo {

    @observable
    task: string;

    @observable
    completed: boolean;

    constructor(task: string) {
        this.task = task;
        this.completed = false;
    }
}