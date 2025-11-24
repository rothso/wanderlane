export const useOverflow = <T,>(
  items: T[],
  limit: number,
  minimumExcess = 1,
) => {
  const withinLimit = items.slice(0, limit);
  const excess = items.slice(limit);
  const showExcess = excess.length >= minimumExcess;
  return {
    withinLimit: showExcess ? withinLimit : items,
    excess: showExcess ? excess : [],
  };
};
