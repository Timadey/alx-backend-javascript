export default function getListStudentsIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((elem) => elem.id);
  }
  return [];
}
