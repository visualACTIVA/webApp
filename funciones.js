function doGet() {
  let template = HtmlService.createTemplateFromFile('web');
  return template.evaluate().setTitle('Cantami');
}

function include(nombre) {
  return HtmlService.createHtmlOutputFromFile(nombre)
    .getContent();
}

function obtenerSong() {
  let listas = SpreadsheetApp.openById('15YRcV6mC4r18HzdwgcWXPb_v0k2QMvTwCYtXcbU9iz0').getActiveSheet();
  let datos = listas.getDataRange().getValues();
  return datos;

}
