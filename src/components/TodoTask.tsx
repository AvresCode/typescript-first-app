import React from "react";
import { ITask } from "../interfaces";

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
}

export const TodoTask = ({ task, deleteTask }: Props) => {
  return (
    <div className="taskContainer">
      <div className="taskName">{task.taskName}</div>
      <div>
        {" "}
        <button className="changeButtons">Edit</button>
      </div>
      <div>
        <button
          className="changeButtons"
          onClick={() => {
            deleteTask(task.taskName);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
