import type { Error } from "sequelize";
import Person from "../../Models/Person/Person.js";
import type { CreateItem } from "./createItemType.js";

const createItem: CreateItem = async (name, email) => {
  try {
    const newPerson = await Person.create({
      name: name,
      email: email,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    newPerson.save();
    return `New person ${name} with email: ${email} added to people of taskmanagement database`;
  } catch (error) {
    return error as Error;
  }
};

export default createItem;
