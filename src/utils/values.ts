type Values<T> = T[keyof T][];

export const values = <T extends object>(obj: T): Values<T> => {
  return Object.values(obj) as Values<T>;
};
