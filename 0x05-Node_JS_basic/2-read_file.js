const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(path, 'utf8').split('\n');
  let students = 0;
  let studentsCS = 0;
  let studentsSWE = 0;
  const studentsCSList = [];
  const studentsSWEList = [];
  for (let i = 1; i < data.length; i += 1) {
    if (data[i]) {
      const student = data[i].split(',');
      if (student[3] === 'CS') {
        studentsCS += 1;
        studentsCSList.push(student[0]);
      } else if (student[3] === 'SWE') {
        studentsSWE += 1;
        studentsSWEList.push(student[0]);
      }
      students += 1;
    }
  }
  console.log(`Number of students: ${students}`);
  console.log(`Number of students in CS: ${studentsCS}. List: ${studentsCSList.join(', ')}`);
  console.log(`Number of students in SWE: ${studentsSWE}. List: ${studentsSWEList.join(', ')}`);
}

module.exports = countStudents;
