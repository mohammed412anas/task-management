import type { Error } from "sequelize";
import type { GetItemTaskOfPerson, task } from "./getItemTaskTypesOfPerson.js";
import Task from "../../models/Task/Task.js";

const getItemTaskOfPerson: GetItemTaskOfPerson = async (personId) => {
  try {
    const tasksOfPerson = (await Task.findAll({
      where: { created_by: personId },
    })) as unknown as task[];
    if (!tasksOfPerson.length) return "No task is created by this person";
    else return tasksOfPerson;
  } catch (error) {
    return error as Error;
  }
};

export default getItemTaskOfPerson;
