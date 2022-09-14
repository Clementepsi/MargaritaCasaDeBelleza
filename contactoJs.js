window.addEventListener('load',()=> {
    const form = document.querySelector('#formulario');
    const name = document.getElementById('name');
    const lastname = document.getElementById('lastname');
    const email = document.getElementById('email');
    const messag = document.getElementById('msg');

    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        validaCampos()
    })

    const validaCampos = () => {
        const nameValor = name.value.trim();
        const lastNameValor = lastname.value.trim(); //elimina los espacios que peuda tener esta funcion de trim
        const emailValor = email.value.trim();
        const textValor = messag.value.trim();

        if (!nameValor){
            console.log('CAMPO VACIO')
            validaFalla(name,'Campo vacío')
        } else {
            validaOk(name)
        }
        if (!lastNameValor){
            console.log('CAMPO VACIO')
            validaFalla(lastname,'Campo vacío')
        } else {
            validaOk(lastname)
        }
        if (!emailValor){
            console.log('CAMPO VACIO')
            validaFalla(email,'Campo vacío')
        } else if(!validaEmail(emailValor)){
            validaFalla(email,'El e-mail no es valido')
        } else {
            validaOk(email)
        }
        if (!textValor){
            console.log('CAMPO VACIO')
            validaFalla(messag,'Campo vacío')
        } else {
            validaOk(messag)
        }

        /* validando campo password
         const er = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,18}$/          
         if(!passValor) {
             validaFalla(pass, 'Campo vacío')
         } else if (passValor.length < 8) {             
             validaFalla(pass, 'Debe tener 8 caracteres cómo mínimo.')
         } else if (!passValor.match(er)) {
             validaFalla(pass, 'Debe tener al menos una may., una min. y un núm.')
         } else {
             validaOk(pass)
         }

         //validando campo password Confirmación
         if(!passConfirmaValor){
             validaFalla(passConfirma, 'Confirme su password')
         } else if(passValor !== passConfirmaValor) {
             validaFalla(passConfirma, 'La password no coincide')
         } else {
             validaOk(passConfirma)
         } */
        
    }
    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText= msje
        
        formControl.className = 'form-Control falla'
    }
    const validaOk = (input) => {
        const formControl = input.parentElement
        formControl.className = 'form-Control Ok'
    }
    const validaEmail = (email)=> {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
})