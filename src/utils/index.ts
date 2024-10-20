export const suffixedNum = (value: number, decimal: number): string => {
  if (value >= 1_000_000_000) {
    return (value / 1_000_000_000).toFixed(decimal) + "B"; // Billions
  } else if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(decimal) + "M"; // Millions
  } else if (value >= 1_000) {
    return (value / 1_000).toFixed(decimal) + "K"; // Thousands
  } else {
    return value.toFixed(decimal); // Less than a thousand
  }
};
