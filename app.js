let eyeIcon = document.getElementById('eye-icon')
let password = document.getElementById('password')

function showPassword(){
    if(password.type === 'password'){
        password.type = 'text';
        eyeIcon.src = 'icons/icons8-eye-50.png'
    }
    else{
        password.type = 'password'
        eyeIcon.src = 'icons/icons8-eye-64.png'
    }
}

