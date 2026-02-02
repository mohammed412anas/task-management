import type { Error } from "sequelize";
import Person from "../../models/Person/Person.js";
import type { DeactivateRecord } from "./deactivateRecordType.js";

const deactivateRecord: DeactivateRecord = async (id) => {
  try {
    const deactivatePerson = await Person.update(
      { status_active: false },
      { where: { id: id } },
    );
    if (deactivatePerson[0])
      return `Updated the status of person with id : ${id} status_active as false.`;
    else return `Person with id: ${id} not exists.`;
  } catch (error) {
    return error as Error;
  }
};

export default deactivateRecord;
