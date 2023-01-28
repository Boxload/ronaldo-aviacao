// Exibe uma mensagem de boas-vindas no console do navegador
console.log("Bem-vindo ao meu site!");

// Define uma função para mudar o conteúdo de um elemento HTML
function alterarConteudo(id, novoConteudo) {
  var elemento = document.getElementById(id);
  elemento.innerHTML = novoConteudo;
}

// Define uma função para mudar a cor de fundo de um elemento HTML
function alterarCorDeFundo(id, novaCor) {
  var elemento = document.getElementById(id);
  elemento.style.backgroundColor = novaCor;
}
