import "./Boardcolumn.css"
import TaskCard from "./TaskCard"
export default function BoardColumn({ onClick, title, tasks }) {
    return (
        <>
            <div className="board-column">
                <div className="column-header">
                    <h2 className="column-title">{title}</h2>
                    <span className="task-count">{tasks.length}</span>
                    <button className="add-task-btn" onClick={onClick} >Add Task</button>
                </div>

                <div className="task-list">
                    {tasks.length === 0
                        ? <p className="empty-text">No tasks yet</p>
                        : tasks.map(task => <TaskCard key={task.id} task={task} />)
                    }
                </div>

            </div>
        </>
    )
}