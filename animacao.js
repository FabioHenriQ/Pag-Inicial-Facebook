
var senha = document.getElementById('senha');
var email = document.getElementById('email');

senha.addEventListener('focus',()=>{
    senha.classList.add('anima');
});
email.addEventListener('click',()=>{
    email.classList.add('anima');
});

if (email.classList.contains('anima')) {
    senha.classList.remove('anima');
}