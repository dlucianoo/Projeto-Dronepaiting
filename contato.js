document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
   
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var mensagem = document.getElementById('mensagem').value;
   
  if (nome && email && mensagem) {
       window.location.href = 'obrigado.html';
  } else {
     alert('Por favor, preencha todos os campos.');
  }
 });
