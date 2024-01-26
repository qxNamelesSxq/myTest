import React from "react";
import "./addTask.css";

const AddTask = ({ handleAdd, addTask, setAddTask, taskDate, setTaskDate }) => {
    const handleChangeTask = (event) => {
        setAddTask(event.target.value);
    };

    const handleChangeDate = (event) => {
        setTaskDate(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAdd(event);
    };

    return (
        <form onSubmit={handleSubmit} className="add">
            <label className="add-label-task">
                <input
                    className="add-task"
                    placeholder="write something..."
                    type="text"
                    value={addTask}
                    onChange={handleChangeTask}
                    name="task"
                />
            </label>
            <label>
                <input
                    value={taskDate}
                    onChange={handleChangeDate}
                    type="date"
                    name="taskDate"
                />
            </label>
            <input className="add-button" type="submit" value="Add" />
        </form>
    );
};

export default AddTask;
