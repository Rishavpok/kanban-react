import { useForm } from "react-hook-form"
import Form from "../../components/Form/Form"
import Input from "../../components/Input/Input"
import "./AddTasks.css"
import type { SelectOption } from "../../types/types"
import Select from "../../components/Select/Select"
import { useEffect } from "react"

type tasksForm = {
    id: number,
    title: string,
    description: string,
    status: string,
    priority: string
}

export default function AddTaskModal({ onClose, onAdd, task, update }) {

    const statusOptions: SelectOption[] = [
        { label: "To Do", value: "todo" },
        { label: "In Progress", value: "progress" },
        { label: "Completed", value: "completed" },
    ]

    const priorityOptions: SelectOption[] = [
        { label: "Low", value: "low" },
        { label: "Medium", value: "medium" },
        { label: "High", value: "high" }
    ]

    function handleTasksSubmit(data: tasksForm) {
          task ? update(data) : onAdd(data)
    }


    const { register, handleSubmit, formState: { errors }, reset } = useForm<tasksForm>({
        defaultValues: {
            id : task.id ?? '',
            title: task?.title ?? '',
            description: task?.description ?? '',
            status: task?.status ?? '',
            priority: task?.priority ?? ''
        }
    })

    // ✅ reset form whenever task changes
    useEffect(() => {
        console.log(task);
    }, [task])  // ← runs when task changes — ngOnChanges equivalent

    return (
        <>
            <div className="modal-backdrop">
                <div className="modal">
                    <div className="modal-header">
                        <h3 className="modal-title">Add Task</h3>
                    </div>

                    <div className="modal-body">

                        <Form onSubmit={handleSubmit(handleTasksSubmit)} >
                            <div className="field-group" >
                                <label htmlFor="taskName">Task title</label>
                                <Input
                                    formName={register}
                                    control="title"
                                    type="text"
                                    placeholder="Task title"
                                    rules={{
                                        required: "Title is required"
                                    }}

                                />

                                {errors.title && <p className="error-text">{errors.title.message}</p>}

                            </div>

                            <div className="field-group" >
                                <label>Task description</label>

                                <Input
                                    formName={register}
                                    control="description"
                                    type="text"
                                    placeholder="Task Description"
                                    rules={{
                                        required: "Description is required"
                                    }}
                                />
                                {errors.description && <p className="error-text">{errors.description.message}</p>}
                            </div>

                            <div className='field-group'>
                                <label>Task Status</label>
                                <Select
                                    formName={register}
                                    control="status"
                                    options={statusOptions}
                                    placeholder="Select a status..."
                                    rules={{ required: "Status is required" }}
                                />
                                {errors.status && <p className="error-text">{errors.status.message}</p>}
                            </div>

                            <div className="field-group" >
                                <label >Task Priority</label>
                                <Select
                                    formName={register}
                                    control="priority"
                                    options={priorityOptions}
                                    placeholder="Select a priority..."
                                    rules={{ required: "Priority is required" }}
                                />

                                {errors.priority && <p className="error-text">{errors.priority.message}</p>}
                            </div>

                            <div className="modal-footer">
                                <button className="btn cancel" onClick={onClose}  > Cancel </button>
                                {task ? <button className="btn delete">Delete</button> : null}
                                {!task ? <button
                                    type="submit"
                                    className="btn primary"> Add Task </button> : null}
                                {task ? <button 
                                type="submit" 
                                className="btn primary">Update Task</button> : null}
                            </div>

                        </Form>
                    </div>


                </div>
            </div>

        </>
    )
}