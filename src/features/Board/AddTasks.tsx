import "./AddTasks.css"
export default function AddTaskModal({onClose}) {
    return (
        <>
            <div className="modal-backdrop">
                <div className="modal">
                    <div className="modal-header">
                        <h3 className="modal-title">Add Task</h3>
                    </div>

                    <div className="modal-body">
                        <form>
                            <div className="field-group">
                                <label htmlFor="taskName">Task title</label>
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Task title"
                                />
                            </div>

                            <div className="field-group">
                                <label>Task description</label>
                                <textarea
                                    className="input"
                                    placeholder="Task Description"
                                ></textarea>
                            </div>

                            <div className="field-group">
                                <label htmlFor="status">Task Status</label>
                                <select id="status">
                                    <option value="todo">To do</option>
                                    <option value="progress">In Progress</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </div>

                            <div className="field-group">
                                <label htmlFor="priority">Task Priority</label>
                                <select id="priority">
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button className="btn cancel" onClick={onClose}  > Cancel </button>
                        {/* <button className="btn delete" > Delete </button> */}
                        <button className="btn primary"> Add Task </button>
                        {/* <button className="btn primary">Update Task</button> */}
                    </div>
                </div>
            </div>

        </>
    )
}