class Usuario {
  constructor() {
     this.users = JSON.parse(localStorage.getItem('users')) || [];
  }
 
  logar(email, senha) {
     let user = this.users.find(user => user.email === email && user.senha === senha);
     if (user) {
       sessionStorage.setItem('id_usuario', user.id);
       return true;
     } else {
       return false;
     }
  }
 }
 
 document.addEventListener('DOMContentLoaded', function() {
   document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      var email = document.getElementById('email').value;
      var senha = document.getElementById('senha').value;
      
      var usuario = new Usuario();
      var result = usuario.logar(email, senha);
      
      if (result) {
        alert('Login efetuado com sucesso!');
        setTimeout(function() {
          window.location.href = 'servicos.html';
        }, 1500);
      } else {
        alert('E-mail ou senha incorretos!');
      }
   });
  });
 
