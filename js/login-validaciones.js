const mostrarOcultarBtn = document.querySelector('.mostrar-ocultar');
const formulario = document.querySelector('#formulario-ingreso');
/* mostrarOcultarBtn.addEventListener('click', mostrarOcultar)
function mostrarOcultar() {
  let passwordInput = document.querySelector(".password");
  let passwordRe = document.querySelector('.repetir');
  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      if(passwordRe){
        passwordRe.type = "text";
      }
     
      mostrarOcultarBtn.textContent = 'Ocultar';
  } else {
      passwordInput.type = "password";
      if(passwordRe){
        passwordRe.type = "password";
      }
      
      mostrarOcultarBtn.textContent = 'Mostrar';
  }
}  */

formulario.addEventListener('submit', (e)=>{
  e.preventDefault();
  const botonReset = document.querySelector('#boton-iniciar');
  const spinner = document.querySelector('.sk-chase');

  botonReset.style.display = "none";
  spinner.style.display = "block";

})

