import React from "react";
import { ITask } from "../interfaces";
import { ChangeEvent } from "react";

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
  editTask(taskNameToEdit: string): void;
  handleEditInput(event: ChangeEvent<HTMLInputElement>): void;
  editigText: string;
  taskEditing: string;
  handleEditSubmit(taskNameToEdit: string): void;
}

export const TodoTask = ({
  task,
  deleteTask,
  editTask,
  handleEditInput,
  editigText,
  taskEditing,
  handleEditSubmit,
}: Props) => {
  return (
    <div className="taskContainer">
      {taskEditing == task?.taskName ? (
        <div>
          <input type="text" onChange={handleEditInput} value={editigText} />{" "}
          <button
            className="changeButtons"
            onClick={() => {
              handleEditSubmit(task.taskName);
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        <div>
          {" "}
          <div className="taskName">{task?.taskName}</div>
          <div>
            {" "}
            <button
              className="changeButtons"
              onClick={() => {
                editTask(task?.taskName);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      )}

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
