const express = require('express');
const fs = require('fs');
const { argv } = require('process');

async function countStudents(path) {
  try {
    const content = await fs.promises.readFile(path, { encoding: 'utf8' });
    const data = content.split('\n');
    const report = {
      students: 0, studentsCS: 0, studentsSWE: 0, studentsCSList: [], studentsSWEList: [],
    };
    for (let i = 1; i < data.length; i += 1) {
      if (data[i]) {
        const student = data[i].split(',');
        if (student[3] === 'CS') {
          report.studentsCS += 1;
          report.studentsCSList.push(student[0]);
        } else if (student[3] === 'SWE') {
          report.studentsSWE += 1;
          report.studentsSWEList.push(student[0]);
        }
        report.students += 1;
      }
    }
    return report;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(argv[2]).then((report) => {
    res.write(`Number of students: ${report.students}\n`);
    res.write(`Number of students in CS: ${report.studentsCS}. List: ${report.studentsCSList.join(', ')}\n`);
    res.write(`Number of students in SWE: ${report.studentsSWE}. List: ${report.studentsSWEList.join(', ')}`);
    res.end();
  }).catch((error) => {
    res.end(error.message);
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

module.exports = app;
