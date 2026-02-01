import Person from "../../models/Person/Person.js";

const getItems = async () => {
  try {
    const people = await Person.findAll();
    return people;
  } catch (error) {
    return error;
  }
};
export default getItems;
