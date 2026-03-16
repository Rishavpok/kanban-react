import { useState } from "react"
import BoardColumn from "./Boardcolumn"
import "./Boardview.css"
import AddTaskModal from "./AddTasks"
import type { Category, Task } from "../../types/types"
export default function BoardView() {

    const [showAddTaskModal, setshowAddTaskModal] = useState(false)

    const [categories, setCategories] = useState<Category[]>([
        {
            id: 1,
            name: "Todo",
            status: "todo",
            tasks: []
        },
        {
            id: 2,
            name: "In Progress",
            status: "progress",
            tasks: []
        },
        {
            id: 3,
            name: "Completed",
            status: "completed",
            tasks: []
        },

    ])

    const [categoryId, setCategoryId] = useState<number | null>(null)
    const [selectedTask, setSelectedTask] = useState<Task | null>(null)


    function showTasksModel(id: number) {
        setCategoryId(id)
        setshowAddTaskModal(true)
    }

    function closeModel() {
        setshowAddTaskModal(false)
        setSelectedTask(null)
    }

    function saveTasks(data: Task) {
        const newTask = {
            ...data,
            id: Date.now()
        }

        setCategories(prev =>
            prev.map(category =>
                category.status === data.status
                    ? { ...category, tasks: [...category.tasks, newTask] }  // new array, new object
                    : category  // unchanged categories returned as is
            )
        )

        setshowAddTaskModal(false)
    }

    function updateTasks(task: Task) {
        setSelectedTask(task)
        setshowAddTaskModal(true)
    }

function update(updatedTask: Task) {
    setCategories(prev =>
        prev.map(category => ({
            ...category,
            tasks: category.tasks.map(t =>
                t.id === updatedTask.id ? { ...updatedTask } : t
            )
        }))
    )
    closeModel()
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
                            updateTasks={updateTasks}
                            onClick={() => showTasksModel(category.id)} />
                    ))}



                </div>

                {showAddTaskModal && <AddTaskModal onClose={closeModel} onAdd={saveTasks} task={selectedTask} update={update} />}

                <button className="logout-btn" >
                    Logout
                </button>

            </div>
        </>
    )

}