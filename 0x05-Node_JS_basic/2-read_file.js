const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const dataArray = data.toString().split('\n').map((e) => e.trim())
      .map((e) => e.split(',').map((e) => e.trim()));
    const dataKeys = dataArray.shift();
    const res = [];
    const dataSet = new Set();

    for (let i = 0; i < dataArray.length; i += 1) {
      const dataJson = {};
      for (let j = 0; j < dataArray[i].length; j += 1) {
        if (dataArray[i][j] !== '') {
          dataJson[dataKeys[j]] = dataArray[i][j];
          if (dataKeys[j] === 'field') {
            dataSet.add(dataArray[i][j]);
          }
        }
      }
      res.push(dataJson);
    }

    const validRes = res.filter((item) => Object.keys(item).length !== 0);
    console.log(`Number of students: ${validRes.length}`);
    dataSet.forEach((value) => {
      const arr = validRes.filter((item) => item.field === value);
      const firstNames = arr.map((item) => item.firstname);
      console.log(`Number of students in ${value}: ${arr.length}. List: ${firstNames.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
