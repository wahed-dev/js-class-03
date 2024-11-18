let btn = document.querySelector('.btn')
let passwordInput = document.querySelector('.passwordField input')

function btnClick(){
if(passwordInput.type == 'password'){
passwordInput.type = 'text'
btn.innerHTML = '<i class="bi bi-eye-fill"></i>'
} else{passwordInput.type = 'password'
    btn.innerHTML = '<i class="bi bi-eye-slash-fill"></i>'
}

}
btn.addEventListener('click',btnClick)

let btn2 = document.querySelector('.btn2')
function submit (){
   console.log( passwordInput.value.length)
   if(passwordInput.value.length > 7){
    alert('Submitted')
   } else{
    alert('Weak Password')
   }
}

btn2.addEventListener('click', submit)