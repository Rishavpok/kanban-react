import { useState } from "react"
import BoardColumn from "./Boardcolumn"
import "./Boardview.css"
import AddTaskModal from "./AddTasks"
export default function BoardView() {

    const [showAddTaskModal, setshowAddTaskModal]= useState(false)

    function showTasksModel() {
        setshowAddTaskModal(true)
    }

    function closeModel() {
        setshowAddTaskModal(false)
    }

    return (
        <>
            <div className="board-view">
                <div className="board-header">
                    <h1 className="board-title">Kanban Boards</h1>
                </div>

                <div className="board-columns">

                   
                       <BoardColumn onClick={showTasksModel} />
                       {/* <BoardColumn />
                       <BoardColumn /> */}

                   
                </div>

                { showAddTaskModal && <AddTaskModal onClose={closeModel} /> }

                <button className="logout-btn" >
                    Logout
                </button>

            </div>
        </>
    )

}