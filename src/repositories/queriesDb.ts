export interface QueriesDb{
  getAll<P>(): Promise<P>;
  getOne<Q>(id: string): Promise<Q>;
  save<R, S>(data: S): Promise<R>;
  delete<T>(id: string): Promise<T>;
}
