/*(function($) {

	"use strict";

	$(".toggle-password").click(function() {

	  $(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	  } else {
	    input.attr("type", "password");
	  }
	});


})(jQuery);

//Variables campos
const principalName = document.querySelector('#principalName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const txtPassword = document.querySelector('#txtPassword');

const formularioEnviar = document.querySelector('#formRegistro');
//variable boton
const btnEnviar = document.querySelector('#boton_registro');
//Event listeners

eventListeners();
function eventListeners() {
  // document.addEventListener('DOMContentLoaded', desactivarBoton);

  principalName.addEventListener('blur', validarFormulario);
  lastName.addEventListener('blur', validarFormulario);
  email.addEventListener('blur', validarFormulario);
  txtPassword.addEventListener('blur', validarFormulario);
  formularioEnviar.addEventListener('submit', crearCuenta);
}

// function desactivarBoton() {
//   registro.setAttribute('disabled');
// }

function validarFormulario(e) {
  if (e.target.value.length > 0) {
    principalName.classList.remove('bg-danger');
    lastName.classList.remove('bg-danger');
    email.classList.remove('border', 'border-danger');
    txtPassword.classList.remove('border', 'border-danger');
  } else {
    principalName.classList.add('border', 'border-danger');
    lastName.classList.add('border', 'border-danger');
    email.classList.add('border', 'border-danger');
    txtPassword.classList.add('border', 'border-danger');
  }
}

function crearCuenta(e) {
  e.preventDefault();
	const imagen = document.querySelector('#form_top')
  const mensaje = document.createElement('p');
  mensaje.textContent = 'Todos los campos son obligatorios';
  mensaje.classList.add('bg-success');
  mensaje.appendChild(imagen);
}


	function mostrarPassword(){
	var cambio = document.getElementById("txtPassword");
	if(cambio.type == "password"){
	cambio.type = "text";
	$('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
	}else{
	cambio.type = "password";
	$('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
	}
	} 
											
	$(document).ready(function () {
	//CheckBox mostrar contraseña
	$('#ShowPassword').click(function () {
	$('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
	});
	});*/

const header = document.querySelector('#header');
const email = document.querySelector('#email');
const form = document.querySelector('#form');
const password = document.querySelector('#password');
const mensaje = document.createElement('p');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const pass = document.querySelector('#pass');

form.addEventListener('submit', validarFormulario);
email.addEventListener('blur', validarFormulario);
password.addEventListener('blur', validarFormulario);
nombre.addEventListener('blur', validarFormulario);
apellido.addEventListener('blur', validarFormulario);
pass.addEventListener('click', verPassword);

function validarFormulario(e) {
  e.preventDefault();
  //Validar que sea un correo valido
  if (e.target.type === 'email') {
    const regexEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regexEmail.test(e.target.value)) {
      mensaje.remove('warnings');
    } else {
      mensajeError('email no valido');
    }
  }

  if (e.target.type === 'password') {
  
    if (e.target.value === '') {
      mensajeError('Todos los campos son obligatorios');
    } else {
      mensaje.remove(warnings);
    }
  }
  
  if (e.target.type === 'text') {
  
    if (e.target.value === '') {
      mensajeError('Todos los campos son obligatorios');
    } else {
      mensaje.remove(warnings);
    }
  }
}

function mensajeError(mensajeDeError) {
  mensaje.textContent = mensajeDeError;
  mensaje.classList.add('warnings');

  header.appendChild(mensaje);
}

function limpiarHTML() {
  mensajeError.innerHTML = '';
}

function verPassword(){
if(password.type == "password"){
  password.type = "text";
}else{
  password.type = "password";
}
}
