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
document.querySelector('#btnSend').addEventListener("click", function(e){
  let Nombre = document.querySelector('#nombre');
  let Apellido = document.querySelector('#apellido');
  let Correo = document.querySelector('#email');
  let Password = document.querySelector('#password');
  console.log(Nombre.value);
  console.log(Apellido.value);
  console.log(Correo.value);
  console.log(Password.value);
  const data = {
    nombre: Nombre.value,
    apellido: Apellido.value,
    email: Correo.value,
    password: Password.value
  };
  
  const url = "http://localhost:8080/api/clientes/";
  fetch(url,{
    method:"POST",
    headers:{
      'Content-Type':'application/json',
    },
      body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data =>{
      console.log(`Mensaje: ${data}`);
    })
    .catch((error) =>{
      console.log(`Mensaje: ${error}`)
    })
})

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
