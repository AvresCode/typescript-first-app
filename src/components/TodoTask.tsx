import React from "react";
import { ITask } from "../interfaces";
import { ChangeEvent } from "react";

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
  editTask(taskNameToEdit: string): void;
  handleEdit(event: ChangeEvent<HTMLInputElement>): void;
  editedText: string;
  taskEditing: boolean;
}

export const TodoTask = ({
  task,
  deleteTask,
  editTask,
  handleEdit,
  editedText,
  taskEditing,
}: Props) => {
  return (
    <div className="taskContainer">
      {taskEditing ? (
        <input type="text" onChange={() => handleEdit} value={editedText} />
      ) : (
        <div className="taskName">{task.taskName}</div>
      )}

      <div>
        {" "}
        <button
          className="changeButtons"
          onClick={() => {
            editTask(task.taskName);
          }}
        >
          Edit
        </button>
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
