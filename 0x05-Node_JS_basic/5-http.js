const http = require('http');
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

const host = 'localhost';
const port = 1245;

const requestListener = (req, res) => {
  console.log(req.url);
  switch (req.url) {
    case '/':
      res.writeHead(200);
      res.end('Hello Holberton School!');
      break;
    case '/students':
      res.writeHead(200);
      res.write('This is the list of our students\n');
      countStudents(argv[2]).then((report) => {
        res.write(`Number of students: ${report.students}\n`);
        res.write(`Number of students in CS: ${report.studentsCS}. List: ${report.studentsCSList.join(', ')}\n`);
        res.write(`Number of students in SWE: ${report.studentsSWE}. List: ${report.studentsSWEList.join(', ')}`);
        res.end();
      }).catch((error) => {
        res.end(error.message);
      });
      break;
    default:
      res.writeHead(404);
      res.end('Page not found');
  }
};

const app = http.createServer(requestListener);

app.listen(port, host);
console.log(`Server is running on http://${host}:${port}`);
module.exports = app;
