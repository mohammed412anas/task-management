import type { Error } from "sequelize";
import Task from "../../models/Task/Task.js";
import type { GetItemsTasks } from "./getItemsTasksType.js";
import type { task } from "../getItemTaskOfPerson/getItemTaskTypesOfPerson.js";

const getItemsTasks: GetItemsTasks = async () => {
  try {
    const tasks = (await Task.findAll()) as unknown as task[];
    if (!tasks.length || !tasks) return "Currently there are no tasks";
    return tasks;
  } catch (error) {
    return error as Error;
  }
};

export default getItemsTasks;
