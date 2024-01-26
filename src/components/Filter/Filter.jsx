import React from "react";
import "./filter.css";

const Filter = ({ setFilter, taskDate, setTaskDate }) => {
    const handleFilter = (filter) => {
        setFilter(filter);
    };

    const handleDateChange = (event) => {
        setTaskDate(event.target.value);
        setFilter("calendar");
    };

    return (
        <div className="sorting">
            <button className="sorting-button" onClick={() => handleFilter("all")}>
                All
            </button>
            <button className="sorting-button" onClick={() => handleFilter("completed")}>
                Completed
            </button>
            <button className="sorting-button" onClick={() => handleFilter("progress")}>
                In progress
            </button>
            <input
                value={taskDate}
                onChange={handleDateChange}
                type="date"
                name="taskDate"
            />
        </div>
    );
};

export default Filter;
