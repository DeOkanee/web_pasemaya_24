
  //INPUTAN UNTUK PASEMAYA 1
  function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data1");
    var newRow = sheet.getLastRow() + 1;
    var rowData = [];
  
    rowData[0] = new Date().toLocaleString(); // Tanggal dan Waktu
    rowData[1] = e.parameter.Name;            // Nama Lengkap
    rowData[2] = e.parameter.Email;           // Email
    rowData[3] = e.parameter.Jenjang;         // Jenjang
    rowData[4] = e.parameter.Gender;          // Gender
    rowData[5] = e.parameter.Asal_sekolah;           // Asal_sekolah
    rowData[6] = e.parameter.Alamat;          // Alamat
    rowData[7] = e.parameter.WhatsApp          //whatsapp
  
    sheet.getRange(newRow, 1, 1, rowData.length).setValues([rowData]);
  
    return ContentService.createTextOutput("");  // Mengembalikan teks kosong
  }

  //INPUTAN UNTUK PASEMAYA 1
  function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data1");
    var newRow = sheet.getLastRow() + 1;
    var rowData = [];
  
    rowData[0] = new Date().toLocaleString(); // Tanggal dan Waktu
    rowData[1] = e.parameter.Name;            // Nama Lengkap
    rowData[2] = e.parameter.Email;           // Email
    rowData[3] = e.parameter.Jenjang;         // Jenjang
    rowData[4] = e.parameter.Kelas            //Kelas
    rowData[5] = e.parameter.Umur             //Umur
    rowData[6] = e.parameter.Gender;          // Gender
    rowData[7] = e.parameter.Asal_sekolah;           // Asal_sekolah
    rowData[8] = e.parameter.Alamat;          // Alamat
    rowData[9] = e.parameter.WhatsApp          //whatsapp
  
    sheet.getRange(newRow, 1, 1, rowData.length).setValues([rowData]);
  
    return ContentService.createTextOutput("");  // Mengembalikan teks kosong
  }
