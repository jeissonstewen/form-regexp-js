const regexpName = /^[A-Záéíóúñ\s]+$/i
const regexpLastName = /^[A-Z\s]+$/i
const regexpDate = /^(0?[1-9]|[1-2][0-9]|3[0-1])\/(0?[1-9]|1[0-2])\/([0-9]{4})$/g
const regexpPhone = /3\d{9}$/g
const regexpEmail =/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,})+$/g

const Name = document.getElementById('name')
const lastName = document.getElementById('lastName')
const date = document.getElementById('date')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordR = document.getElementById('passwordR')




registrar.addEventListener('click',()=>{
    if(!regexpName.test(Name.value)){
        console.log('error nombre')  
        Name.style.backgroundColor = 'rgba(255, 0, 0, 0.6)'   
    } 
    if(!regexpLastName.test(lastName.value)){
        lastName.style.backgroundColor = 'rgba(255, 0, 0, 0.6)'   
        console.log('error apellido')
    }
    if(!regexpDate.test(date.value)){
        date.style.backgroundColor = 'rgba(255, 0, 0, 0.6)'   
        console.log('error fecha')
    }
    if(!regexpPhone.test(phone.value)){
        phone.style.backgroundColor = 'rgba(255, 0, 0, 0.6)'   
        console.log('error telefono')
    }
    if(!regexpEmail.test(email.value)){
        email.style.backgroundColor = 'rgba(255, 0, 0, 0.6)'   
        console.log('error email')
    }
    if(password.value !== passwordR.value){
        console.log('contraseña incorrecta')
    }
})