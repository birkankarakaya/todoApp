export class Model {
    user;
    items;

    constructor() {
        this.user = 'Birkan';
        this.items = [
            new TodoItem("Spor", false),
            new TodoItem("Faturalar", false),
            new TodoItem("Kahvaltı", false)
        ];
    }
}

export class TodoItem {
    desctiprion;
    action;

    constructor(description: string, action: boolean) {
        this.desctiprion = description;
        this.action = action;
    }
}