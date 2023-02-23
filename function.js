

//BOTON PARA ENVIAR EMAIL

const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#enviarcorreo');
$form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  $buttonMailto.setAttribute('href', `mailto:ferreyra123@gmail.com?subject=nombre: ${form.get('nombre')} /correo: ${form.get('email')} /asunto: ${form.get('asunto')}&body=${form.get('mensaje')}`);
  $buttonMailto.click();
  document.getElementById("form").reset();
}