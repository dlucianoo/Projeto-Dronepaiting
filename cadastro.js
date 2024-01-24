class Usuario {
  constructor() {
     this.users = JSON.parse(localStorage.getItem('users')) || [];
  }
 
  cadastrar(nome, telefone, email, senha) {
     let userExists = this.users.some(user => user.email === email);
     if (userExists) {
       alert('E-mail já cadastrado!');
       return false;
     } else {
       this.users.push({ nome, telefone, email, senha });
       localStorage.setItem('users', JSON.stringify(this.users));
       alert(`Cadastro efetuado com sucesso!`);
       return true;
     }
  }
 }
 
 document.getElementById('registerForm').addEventListener('submit', function(event) {
   event.preventDefault();
     
   var nome = document.getElementById('nome').value;
   var telefone = document.getElementById('telefone').value;
   var email = document.getElementById('email').value;
   var senha = document.getElementById('senha').value;
     
   var usuario = new Usuario();
   var result = usuario.cadastrar(nome, telefone, email, senha);
     
   if (result) {
     setTimeout(function() {
       window.location.href = 'index.html';
       alert('Cadastro efetuado com sucesso!');
     }, 1500);
   } else {
     alert('O e-mail já está cadastrado.');
   }
  });
  
 
