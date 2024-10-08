const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  try {
    dataView.setInt8(position, value);
    return dataView;
  } catch (error) {
    throw new Error('Position outside range');
  }
};

export default createInt8TypedArray;
