const { readDatabase } = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        res.status(200).write('This is the list of our students\n');
        const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
        fields.forEach((field, index) => {
          res.write(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`);
          if (index !== fields.length - 1) {
            res.write('\n');
          }
        });
        res.end();
      })
      .catch((error) => {
        res.status(500).send('Cannot load the database');
        res.end();
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((data) => {
        const students = data[major];

        if (students) {
          res.status(200).send(`List: ${students.join(', ')}`);
        } else {
          res.status(500).send('Cannot load the database');
        }
      })
      .catch ((error) => {
        res.status(500).send('Cannot load the database');
      })
  }
}

module.exports = StudentsController;
