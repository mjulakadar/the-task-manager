export type Priority = 'High' | 'Medium' | 'Low';

export interface Task {
    title: string
    description: string
    priority: 'High' | 'Medium' | 'Low'
    dueDate: Date
    status: 'Pending' | 'In-Progress' | 'Completed'
}

export interface TaskManager {
    title: string
    description: string
    priority: 'High' | 'Medium' | 'Low'
    dueDate: Date
    status: 'Pending' | 'In-Progress' | 'Completed'
}

export interface SimpleTask {
    id?: string,
    task: string,
    completed: boolean,
    date: Date,
    priority: Priority
}