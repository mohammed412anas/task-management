export type task = {
  id: number;
  name: string;
  created_by: number;
  createdAt: string;
  updatedAt: string;
};
export type GetItemTaskOfPerson = (
  personId: number,
) => Promise<string | task[] | Error>;
