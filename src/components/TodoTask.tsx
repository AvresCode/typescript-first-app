import React from "react";
import { ITask } from "../interfaces";

interface Props {
  task: ITask;
}

export const TodoTask = ({ task }: Props) => {
  return (
    <div className="taskContainer">
      <div className="taskName">{task.taskName}</div>
      <div>
        {" "}
        <button className="changeButtons">Edit</button>
      </div>
      <div>
        <button className="changeButtons">Delete</button>
      </div>
    </div>
  );
};
