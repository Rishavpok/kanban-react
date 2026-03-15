export type Task = {
    id: number
    title: string
    tag: string
    assignee: string
}

export type Category = {
    id: number
    name: string
    tasks: Task[]   // ← now TypeScript knows tasks holds Task items
}