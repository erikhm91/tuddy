export interface Task {
    readonly id : string
    description : string
    status : TaskStatus
    completeTask() : void
    getId(): string
    getDescription(): string
    getStatus(): TaskStatus
    
}

export enum TaskStatus {
    Created = 'Created',
    Deleted = 'Deleted',
    Completed = 'Completed'
}

export class BaseTask implements Task {

    id : string
    description : string
    status : TaskStatus

    constructor(id: string, description: string) {
        this.id = id
        this.description = description
        this.status = TaskStatus.Created
    }

    completeTask(): void {
        this.status = TaskStatus.Completed
    }

    getId(): string {
        return this.id
    }
    getDescription(): string {
        return this.description
    }
    getStatus(): TaskStatus {
        return this.status
    }

}