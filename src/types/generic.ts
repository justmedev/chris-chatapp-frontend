export type Icons = 'arrow-right' | 'plus';

export interface User {
  username: string;
  email: string;
}

export type DatabaseEntry<T> = T & {
  id: number;
}

export type NullableDatabaseEntry<T> = T & {
  id?: number;
}
