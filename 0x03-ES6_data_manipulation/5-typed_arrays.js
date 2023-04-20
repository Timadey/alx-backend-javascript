export default function createInt8TypedArray(length, position, number) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  dataView.setInt8(position, number);
  // const array = new Int8Array(buffer);
  // array[position] = number;
  return dataView;
}
