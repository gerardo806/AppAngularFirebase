export interface responseAll<T> {
  message: string;
  data: T;
  success: boolean;
}

export interface responseOne<T> {
  message: string;
  data: T;
  success: boolean;
}
