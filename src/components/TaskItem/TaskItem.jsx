import React, { useState } from "react";
import deleteBtn from "../../assets/delete.svg";
import editBtn from "../../assets/edit.svg";
import "./taskItem.css";

const TaskItem = ({ id, task, date, checked, handleCheck, handleRemove, handleEditTask }) => {
  const [editTask, setEditTask] = useState(task);
  const [editForm, setEditForm] = useState(false);

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    handleEditTask(id, editTask);
    setEditForm(false);
  };

  return (
      <li className="task">
        {!editForm ? (
            <>
              <div className="info">
                <input type="checkbox" checked={checked} onChange={() => handleCheck(id)} />
                <h3 className="name">{task}</h3>
              </div>
              <div className="settings">
                <h5>{date}</h5>
                <button className="delete" onClick={() => handleRemove(id)}>
                  <img className="delete-button" src={deleteBtn} alt="Delete" />
                </button>
                <button className="edit" onClick={() => setEditForm(true)}>
                  <img className="edit-button" src={editBtn} alt="Edit" />
                </button>
              </div>
            </>

        ) : (
            <form onSubmit={handleSubmitEdit}>
              <label>
                <input
                    type="text"
                    value={editTask}
                    onChange={(event) => setEditTask(event.target.value)}
                    name="name"
                />
              </label>
              <input type="submit" value="Save" />
            </form>
        )}
      </li>
  );
};


export default TaskItem;
