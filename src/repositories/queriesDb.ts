export interface QueriesDb{
  getAll<P>(): Promise<P>;
  getOne<Q>(id: string): Promise<Q>;
  save(data: any, nameCollection: string): Promise<boolean>;
  delete<T>(id: string): Promise<T>;
}
