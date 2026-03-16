import "./TaskCard.css"
type Task = {
    id: number
    title: string
    description: string
    status: string
    priority: string
}

type TaskCardProps = {
    task: Task
    onUpdate: (task : Task) => void
}

export default function TaskCard({ task, onUpdate }: TaskCardProps) {
    return (
        <div onClick={() => onUpdate(task)} className="task-card">
            <div className="task-title">{task.title}</div>
            <div className="task-meta">
                <span className="tag">{task.description}</span>
                <span className="assignee">{task.priority.slice(0, 1).toUpperCase()}</span>
            </div>
        </div>
    )
}