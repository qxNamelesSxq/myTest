import React, { useState, useEffect } from "react";
import TaskItem from "../components/TaskItem/TaskItem";
import AddTask from "../components/AddTask/AddTask";
import Filter from "../components/Filter/Filter";
import "./app.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedData = JSON.parse(window.localStorage.getItem("data") || "[]");
    return storedData;
  });
  const [addTask, setAddTask] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    window.localStorage.setItem("data", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = () => {
    switch (filter) {
      case "completed":
        return tasks.filter((item) => item.checked);
      case "progress":
        return tasks.filter((item) => !item.checked);
      case "calendar":
        return tasks.filter((item) => item.date === taskDate);
      default:
        return tasks;
    }
  };

  const handleAdd = (event) => {
    event.preventDefault();

    const newTask = {
      id: Date.now(),
      task: addTask,
      date: taskDate,
      checked: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setAddTask("");
  };

  const handleCheck = (id) => {
    const newTasks = tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
    );

    setTasks(newTasks);
  };

  const handleRemove = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  };

  const handleEditTask = (id, editTask) => {
    const newTasks = tasks.map((task) =>
        task.id === id ? { ...task, task: editTask } : task
    );

    setTasks(newTasks);
  };

  const visibleData = filteredTasks();

  return (
      <div className="container">
        <div className="card">
          <h1 className="name">Tasks</h1>
          <AddTask
              handleAdd={handleAdd}
              addTask={addTask}
              setAddTask={setAddTask}
              taskDate={taskDate}
              setTaskDate={setTaskDate}
          />
          <Filter setFilter={setFilter} taskDate={taskDate} setTaskDate={setTaskDate} />
          <ul className="tasks">
            {visibleData.map((task) => (
                <TaskItem
                    key={task.id}
                    {...task}
                    handleCheck={() => handleCheck(task.id)}
                    handleRemove={() => handleRemove(task.id)}
                    handleEditTask={handleEditTask}
                />
            ))}
          </ul>
        </div>
      </div>
  );
}

export default App;
