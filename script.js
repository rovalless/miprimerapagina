/* Boton de alerta con JavaScrip enlazo con <script src="script.js"></script> */
function showAlert() {
    alert("¡Hola!, esta es una alerta dede JavaScript");
}

/* para agregar formulario de correo */
const form = document.getElementById('myForm');

if (form) {
  form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});
}


function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
  
function validateForm() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
  } else {
    alert('Correo electrónico enviado correctamente.');
  }
}

/*para alternar la visibilidad de los enlaces de 
navegación cuando se haga clic en el botón “Menú” */

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})