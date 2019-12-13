$(document).ready(function(){
  var provincias= ["Buenos Aires","Catamarca","Chaco","Chubut","Córdoba","Corrientes","Entre Ríos","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquén","Río Negro","Salta","San Juan","San Luis","Santa Cruz","Santa Fe","Santiago del Estero","Tierra del Fuego","Tucumán"];
  for(var i=0; i < provincias.length; i++){
    $("#provincia").append("<option value=\""+provincias[i]+"\">"+provincias[i]+"</option>");
  }
});
//Desplaza a alerta
function moverWeb() {
    $('html,body').animate({
      scrollTop: $("#alerta").offset().top-30
  }, 2000);
}

//Valida campos
function validar() {
  var resultado = true;
  var patronNombre = /^([A-Z][a-z]{2,})(\s[A-Z][a-z]{2,}){0,3}$/;
  var patronApellido = /^([A-Z][a-z]{1,})(\s[A-Z][a-z]{1,}){0,3}$/;
  var patronMail =/^[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}$/;
  var patronCelular =/^(([1-9][1-9])|([1-9][1-9][0-9])|([1-9][0-9][1-9]))[1][5]([1-9]){3}([0-9]){2,}$/;
  var patronLocalidad = /^([A-Z][a-z]+)(\s[A-Z][a-z]+)*$/;
  var patronCuil=/^[1-9][0-9]-[1-9][0-9]{7}-[1-9]$/;
  var patronMensaje=/^(\w){30,}$/;
  var patronArchivo=/^([A-Za-z0-9\-_\\\:])+((\.pdf)|(\.doc)|(\.docx))$/;
  var patronFecha=/^\d\d\d\d\-\d\d\-\d\d$/;
  if(!patronNombre.test($('#nombre').val())){ alertaError("El nombre","o"); resultado=false; }
  if(resultado && !patronApellido.test($('#apellido').val())){ alertaError("El apellido","o"); resultado=false; }
  if(resultado && !patronFecha.test($('#fNac').val())){ alertaError("La fecha de nacimiento","a"); resultado=false; }
  if(resultado && !patronMail.test($('#email').val())){ alertaError("El correo electronico","o"); resultado=false; }
  if(resultado && !patronCelular.test($('#celular').val())){ alertaError("El celular","o"); resultado=false; }
  if(resultado && !patronLocalidad.test($('#provincia').val())){ alertaError("La provincia","a"); resultado=false; }
  if(resultado && !patronLocalidad.test($('#localidad').val())){ alertaError("La localidad","a"); resultado=false; }
  if(resultado && !patronMensaje.test($('#mensaje').val())){ alertaError("El mensaje","o. Al menos 30 caracteres"); resultado=false; }
  if(resultado && !patronArchivo.test($('#cv').val())){ alertaError("El archivo","o. Solo archivos .pdf, .doc, .docx"); resultado=false; }
  if(resultado){
    $("#exito").html("<strong>El formulario se ha enviado correctamente. En breve contestaremos su consulta</strong>");
    $("#exito").show();
    $("#alerta").hide();
    $('form input').attr('disabled','disabled');
    $('form textarea').attr('disabled','disabled');
  }

}
//Carga alerta
function alertaError(nombre,adicional){
  $("#alerta").html("");
  $("#alerta").html("<strong>"+nombre+" es obligatori"+adicional+".</strong>");
  $("#alerta").show();
}
