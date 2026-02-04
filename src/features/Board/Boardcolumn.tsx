import "./Boardcolumn.css"
import TaskCard from "./TaskCard"
export default function BoardColumn({onClick}) {
    return (
        <>
            <div className="board-column">
                <div className="column-header">
                    <h2 className="column-title">Hello</h2>
                    <span className="task-count">1</span>
                    <button className="add-task-btn" onClick={onClick} >Add Task</button>
                </div>

                <div className="task-list" >
                      <TaskCard />
                </div>

            </div>
        </>
    )
}