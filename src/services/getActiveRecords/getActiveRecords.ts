import type { Error } from "sequelize";
import Person from "../../models/Person/Person.js";
import type { GetActiveRecords, person } from "./getActiveRecordsType.js";

const getActiveRecords: GetActiveRecords = async () => {
  try {
    const activePeople = (await Person.findAll({
      where: { status_active: true },
    })) as unknown as person[];
    return activePeople;
  } catch (error) {
    return error as Error;
  }
};

export default getActiveRecords;
