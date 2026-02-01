export type CreateItem = (
  name: string,
  email: string,
) => Promise<string | Error>;
