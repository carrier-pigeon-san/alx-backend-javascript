const getStudentIdSum = (students) => students
  .reduce((previousValue, student) => previousValue + student.id, 0);

export default getStudentIdSum;
