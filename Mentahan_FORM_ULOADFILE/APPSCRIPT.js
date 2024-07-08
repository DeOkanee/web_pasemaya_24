function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data1");
    var newRow = sheet.getLastRow() + 1;
    var rowData = [];
  
    // Menyimpan data dari formulir ke dalam array rowData
    rowData[0] = new Date().toLocaleString(); // Tanggal dan Waktu
    rowData[1] = e.parameter.NIM;             // NIM
    rowData[2] = e.parameter.Name;            // Nama Lengkap
    rowData[3] = e.parameter.Email;           // Email
    rowData[4] = e.parameter.Tanggal;         // Tanggal Lahir
    rowData[5] = e.parameter.Gender;          // Gender
    rowData[6] = e.parameter.Kelas;           // Kelas
    rowData[7] = e.parameter.Semester;        // Semester
    rowData[8] = e.parameter.Alamat;          // Alamat
    rowData[9] = e.parameter.WhatsApp;   // Nomor WhatsApp
  
    // Menyimpan link file yang diunggah ke Google Drive
    var fileUrl = "";
    var filename = e.parameter.filename;
    var mimeType = e.parameter.mimeType;
    var fileContent = JSON.parse(e.postData.contents);
  
    if (fileContent && fileContent.length > 0) {
      var blob = Utilities.newBlob(Uint8Array.from(fileContent), mimeType, filename);
      var folderId = "1iL6wwx1w5vnOnoZ7xp7rdKeXqbckxCDs"; // ID folder di Google Drive untuk menyimpan file (ganti dengan ID folder Anda)
      var folder = DriveApp.getFolderById(folderId);
      var uploadedFile = folder.createFile(blob);
      fileUrl = uploadedFile.getUrl();
    }
    rowData[10] = fileUrl; // Simpan URL file ke dalam rowData
  
    // Memasukkan data ke dalam sheet
    sheet.getRange(newRow, 1, 1, rowData.length).setValues([rowData]);
  
    // Mengembalikan respons sebagai JSON
    return ContentService.createTextOutput(JSON.stringify({status: "success", fileId: uploadedFile.getId()})).setMimeType(ContentService.MimeType.JSON);
  }
  