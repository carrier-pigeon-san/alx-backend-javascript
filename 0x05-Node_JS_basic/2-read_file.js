const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' }).split('\n');
    let students = 0;
    let studentsCS = 0;
    let studentsSWE = 0;
    let studentListCS = '';
    let studentListSWE = '';
    for (let i = 1; i < data.length; i += 1) {
      if (data[i].split(',')[3] === 'CS') {
        studentListCS += `${data[i].split(',')[0]}, `;
        studentsCS += 1;
      } else if (data[i].split(',')[3] === 'SWE') {
        studentListSWE += `${data[i].split(',')[0]}, `;
        studentsSWE += 1;
      }
      students += 1;
    }
    console.log(`Number of students: ${students}`);
    console.log(`Number of students in CS: ${studentsCS}. List: ${studentListCS.slice(0, -2)}`);
    console.log(`Number of students in SWE: ${studentsSWE}. List: ${studentListSWE.slice(0, -2)}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
