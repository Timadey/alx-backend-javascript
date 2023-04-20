export default function hasValuesFromArray(set, array) {
  // const values = Array.from(set);
  // return array.every((item) => values.includes(item));
  return array.every((item) => set.has(item));
}
