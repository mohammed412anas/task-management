import type { Error } from "sequelize";
import Person from "../../models/Person/Person.js";
import type { CreateItemTask } from "./createItemTaskType.js";
import Task from "../../models/Task/Task.js";

const createItemTask: CreateItemTask = async (id, taskName) => {
  try {
    const validPerson = await (
      await Person.findOne({
        where: { id: id },
      })
    )?.get();
    let response = !validPerson
      ? "Person not found"
      : "Deactivated person can't create task";
    if (validPerson.status_active) {
      const newTask = await Task.create({
        name: taskName,
        created_by: id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      newTask.save();
      response = `New task "${taskName} created successfully by ${validPerson.name}"`;
    }
    return response;
  } catch (error) {
    return error as Error;
  }
};

export default createItemTask;
