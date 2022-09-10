const {google} = require('googleapis');

async function writeMajors(auth ,range, valueInputOption, values1) {
  const sheets = google.sheets({version: 'v4', auth});
  let values = [
    [
      // Cell values ...
      values1
    ],
    // Additional rows ...
  ];
  const resource = {
    values,
  };
  const res = await sheets.spreadsheets.values.update({
      spreadsheetId: '1WdUMkJVeYkgFt7uLy2_HuJ68EESmhXSokqhIHMCJzvw', //provide the spreadsheet id
      range: range,
      valueInputOption: valueInputOption,
      resource: resource,
  });
//   const rows = res.data.values;
//   if (!rows || rows.length === 0) {
//       console.log('No data found.');
//       return;
//   }
//   console.log('Website');
//   rows.forEach((row) => {
//       // Print columns A and E, which correspond to indices 0 and 4.
//       console.log(`${row}`);
//   });
  // console.log(res); 
  }
  module.exports = writeMajors;