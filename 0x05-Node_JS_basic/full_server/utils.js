const fs = require('fs');

async function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
          const lines = data.split('\n').filter((line) => line.length > 0);
          const keys = lines[0].split(',');
          const firstnameIndex = keys.indexOf('firstname');
          const fieldIndex = keys.indexOf('field');
          const result = {};
          for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            const firstname = values[firstnameIndex];
            const field = values[fieldIndex];
            if (result[field]) {
              result[field].push(firstname);
            } else {
              result[field] = [firstname];
            }
          }
          resolve(result);
        } catch (error) {
          reject(new Error('Cannot parse'));
        }
      }
    });
  });
}

module.exports = { readDatabase };
