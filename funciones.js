function doGet() {
  let template = HtmlService.createTemplateFromFile('web');
  return template.evaluate().setTitle('Cantami');
}

function doPost(datos) {
  
     insertarTema(datos.parameter.tema, datos.parameter.autor, datos.parameter.fechaHora);
     return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Cantami');

}

function include(nombre) {
  return HtmlService.createHtmlOutputFromFile(nombre)
    .getContent();
}



function obtenerSong() {
  let listas = SpreadsheetApp.openById('15YRcV6mC4r18HzdwgcWXPb_v0k2QMvTwCYtXcbU9iz0').getActiveSheet();
  let data = listas.getDataRange().getValues();
  return data;
 
}

function insertarTema(tema, autor)
{
  
  let HOJA = SpreadsheetApp.openById('15YRcV6mC4r18HzdwgcWXPb_v0k2QMvTwCYtXcbU9iz0').getActiveSheet();
  HOJA.appendRow([ tema, autor ]);
}
