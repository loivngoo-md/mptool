const fs = require('fs');
const Excel = require('exceljs');

function readTextFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      }
      try {
        resolve(data.split('\n').map(line => line.trim().split('|')[0]));
      } catch (err) {
        reject(err);
      }
    });
  });
}

async function readExcelFile(filePath) {
  const workbook = new Excel.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet(1);
  const data = [];
  worksheet.eachRow((row, rowNumber) => {
    const rowData = {};
    row.eachCell((cell, colNumber) => {
      rowData[worksheet.getColumn(colNumber).header] = cell.value;
    });
    data.push(rowData);
  });
  return data;
}

(async () => {

  const data = await readTextFile('./roadrunnersports.txt');
  console.log(`Work in progress...\n`);

  let tmp_email = null
  let tmp_password = null

  data.forEach(async (d) => {
    tmp_email = d.split(':')[0]
    tmp_password = d.split(':')[1]

    await this.

    console.log(tmp_email, tmp_password)
  });


  console.log(`\nWork done`);
})()
