import React from "react";
import { ITask } from "../interfaces";

interface Props {
  task: ITask;
}

export const TodoList = ({ task }: Props) => {
  return <div>{task.taskName}</div>;
};
