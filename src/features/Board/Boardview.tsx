import { useState } from "react"
import BoardColumn from "./Boardcolumn"
import "./Boardview.css"
import AddTaskModal from "./AddTasks"
import type { Category } from "../../types/types"
export default function BoardView() {

    const [showAddTaskModal, setshowAddTaskModal] = useState(false)

    const [categories, setCategories] = useState<Category[]>([
        {
            id: 1,
            name: "Todo",
            tasks: []
        },
        {
            id: 2,
            name: "In Progress",
            tasks: []
        },
        {
            id: 3,
            name: "Completed",
            tasks: []
        },

    ])

    const [categoryId , setCategoryId] =  useState<number | null>(null)

    function showTasksModel(id : number) {
        setCategoryId(id)
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

                    {categories.map((category) => (
                        <BoardColumn
                            key={category.id}
                            title={category.name}
                            tasks={category.tasks}
                            onClick={() => showTasksModel(category.id)} />
                    ))}



                </div>

                {showAddTaskModal && <AddTaskModal onClose={closeModel} />}

                <button className="logout-btn" >
                    Logout
                </button>

            </div>
        </>
    )

}