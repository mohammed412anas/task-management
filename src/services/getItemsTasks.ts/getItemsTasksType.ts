import type { task } from "../getItemTaskOfPerson/getItemTaskTypesOfPerson.js";

export type GetItemsTasks = () => Promise<task[] | string | Error>;
