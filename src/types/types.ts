export type Task = {
    id: number
    title: string
    description : string
    status: string
    priority: string
}

export type Category = {
    id: number
    name: string
    status : string
    tasks: Task[]   // ← now TypeScript knows tasks holds Task items
}

export type SelectOption = {
    label: string
    value: string
}
