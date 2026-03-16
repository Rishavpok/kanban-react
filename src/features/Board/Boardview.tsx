import { useEffect, useState } from "react"
import BoardColumn from "./Boardcolumn"
import "./Boardview.css"
import AddTaskModal from "./AddTasks"
import type { Category, Task } from "../../types/types"
import { addTasks, deleteTask, getTasks, taskUpdate } from "./board.service"
import { toast } from 'react-toastify'

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

    async function saveTasks(data: Task) {
        try {
            const res = await addTasks(data)
            if (res) {
                toast.success("Task added successfully!")
                fetchTasks()
            }

        } catch (e) {
            toast.error("Failed to add task!")
        }
        setshowAddTaskModal(false)
    }

    function updateTasks(task: Task) {
        console.log(task, 'from select');
        setSelectedTask(task)
        setshowAddTaskModal(true)
    }

    async function update(updatedTask: Task) {
        try {
            const res = await taskUpdate(updatedTask.id, updatedTask)

            if (res) {
                toast.success("Task updated successfully!")
                fetchTasks()
            }

        } catch (e) {
            toast.error("Failed to update task !!!!")
        }
        closeModel()
    }

    async function fetchTasks() {
        try {
            const [todoRes, inProgressRes, completedRes] = await Promise.all([
                getTasks('todo'),
                getTasks('progress'),
                getTasks('completed'),
            ])
            setCategories([
                { id: 1, name: "Todo", status: "todo", tasks: todoRes.data.data },
                { id: 2, name: "In Progress", status: "progress", tasks: inProgressRes.data.data },
                { id: 3, name: "Completed", status: "completed", tasks: completedRes.data.data },
            ])

        } catch (error) {
            alert("Something went wrong from fetch!!!")
        }
    }

    async function deleteTasks(id: number) {
        try {
            const res = await deleteTask(id)
            if (res) {
                toast.success("Task deleted successfully")
                fetchTasks()
            }
        } catch (err) {
            toast.error("Failed to delete task!")
        }

        closeModel()
    }

    useEffect(() => {
        fetchTasks()
    }, [])

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

                {showAddTaskModal && <AddTaskModal onClose={closeModel} onAdd={saveTasks} task={selectedTask} update={update} onDelete={deleteTasks} />}

                <button className="logout-btn" >
                    Logout
                </button>

            </div>
        </>
    )

}