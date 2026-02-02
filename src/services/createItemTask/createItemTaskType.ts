export type CreateItemTask = (
  id: number,
  taskName: string,
) => Promise<string | Error>;
