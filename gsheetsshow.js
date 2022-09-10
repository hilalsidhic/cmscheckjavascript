const {google} = require('googleapis');

async function listMajors(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  const res = await sheets.spreadsheets.values.get({
      spreadsheetId: '1WdUMkJVeYkgFt7uLy2_HuJ68EESmhXSokqhIHMCJzvw', //provide the spreadsheet ID here
      range: 'A2:A',
  });
  const rows = res.data.values;
  if (!rows || rows.length === 0) {
      console.log('No data found.');
      return;
  }
//   console.log('Website');
//   rows.forEach((row) => {
//       // Print columns A and E, which correspond to indices 0 and 4.
//       console.log(`${row}`);
//   });
  return rows;
  }
  module.exports = listMajors;