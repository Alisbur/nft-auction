export const getRandomItemFromArray = <T>(arr: T[]): T | null => {
  if (!Array.isArray || !arr.length) return null;

  const randomIdx = Math.floor(Math.random() * arr.length);

  return arr[randomIdx];
};
