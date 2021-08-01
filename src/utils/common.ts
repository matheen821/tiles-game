export const isObjectEmpty = (obj: object) => {
  return Object.keys(obj).length === 0;
};

export const getMaxKey = (obj: { [key: string]: number }) => {
  return Object.keys(obj).reduce(
    (previousValue: string, currentValue: string) =>
      obj[previousValue] > obj[currentValue] ? previousValue : currentValue
  );
};

export const getMinKey = (obj: { [key: string]: number }) => {
  return Object.keys(obj).reduce(
    (previousValue: string, currentValue: string) =>
      obj[previousValue] < obj[currentValue] ? previousValue : currentValue
  );
};

export const timeout = (delay: number) => {
  return new Promise((res) => setTimeout(res, delay));
};
