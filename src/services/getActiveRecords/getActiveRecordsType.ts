export type person = {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  status_active: boolean;
};
export type GetActiveRecords = () => Promise<person[] | Error>;
