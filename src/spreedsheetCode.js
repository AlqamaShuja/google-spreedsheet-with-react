// function doPost(e){
//     const updData = updateSheet(e.parameter.data)
//     const output = { result: "Success", data: e.parameter.data, updatedData: updData };
//     return ContentService.createTextOutput(JSON.stringify(output)).setMimeType(ContentService.MimeType.JSON);
//   }
  
//   function updateSheet(data){
//     data = JSON.parse(data);
//     // const data = {"row":2,"s.no":1,"name":"Ali aa","age":21,"id":"B-12","up":1,"down":0};
//     const id = '14tzObyyIA1a1tKWQ10fTt_hba1Iu-Ddl8lHRx5cH4B8';
//     const sheet = SpreadsheetApp.openById(id).getSheetByName("data1");
//     const row = data.row;
//     const allData = sheet.getDataRange().getValues();
//     const headers = allData[0];
  
//     // Logger.log(range.getValues());
//     headers.forEach((header, i) => {
//       const range = sheet.getRange(row, (i+1));
//       Logger.log(data[header]);
//       range.setValue(data[header]);
//     });
  
//     return data;
//   }
  
//   function doGet() {
//     const id = '14tzObyyIA1a1tKWQ10fTt_hba1Iu-Ddl8lHRx5cH4B8';
//     const ss = SpreadsheetApp.openById(id);
//     const sheet = ss.getSheetByName('data1');
//     const rows = sheet.getDataRange().getValues();
//     const headers = rows[0];
//     const body = rows.slice(1);
//     // Logger.log(rows);
  
//     const holder = [];
  
//     body.forEach((elem, ind) => {
//       const temp = {
//         row: ind + 2,
//       };
//       headers.forEach((header, index)=>{
//         header = header.toLowerCase();
//         // Logger.log(header);
//         temp[header] = elem[index];
//       });
  
//       holder.push(temp);
//     })
  
//     const output = JSON.stringify({
//       status: true,
//       data: holder,
//     });
  
//     return ContentService.createTextOutput(output).setMimeType(ContentService.MimeType.JSON);
//   }
  