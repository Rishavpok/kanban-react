import "./TaskCard.css"
type Task = {
    id: number
    title: string
    tag: string
    assignee: string
}

export default function TaskCard({ task }: { task: Task }) {
    return (
        <div className="task-card">
            <div className="task-title">{task.title}</div>
            <div className="task-meta">
                <span className="tag">{task.tag}</span>
                <span className="assignee">{task.assignee}</span>
            </div>
        </div>
    )
}