// Aguarda o carregamento completo do DOM para garantir que todos os elementos estejam disponíveis
document.addEventListener('DOMContentLoaded', function () {
    // Array para armazenar os nomes dos amigos
    const nomes = [];
    
    // Referências aos elementos do DOM
    const nomeInput = document.getElementById('nomeInput');
    const btnAdicionar = document.getElementById('btnAdicionar');
    const btnSortear = document.getElementById('btnSortear');
    const listaNomes = document.getElementById('listaNomes');
    const resultadoDiv = document.getElementById('resultado');
    
    // Função para atualizar a lista de nomes exibida na página
    function atualizarLista() {
      listaNomes.innerHTML = ""; // Limpa a lista atual
      nomes.forEach((nome) => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaNomes.appendChild(li);
      });
    }
    
    // Função para adicionar nome na lista
    function adicionarNome() {
      const nome = nomeInput.value.trim();
      // Validação: se o campo estiver vazio, exibe alerta
      if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
      }
      // Adiciona o nome ao array e atualiza a lista visual
      nomes.push(nome);
      atualizarLista();
      // Limpa o campo de entrada
      nomeInput.value = "";
    }
    
    // Função para sortear um amigo secreto aleatoriamente
    function sortearAmigo() {
      // Verifica se há pelo menos um nome na lista
      if (nomes.length === 0) {
        alert("Adicione pelo menos um nome para sortear.");
        return;
      }
      // Gera um índice aleatório baseado no tamanho da lista
      const indiceAleatorio = Math.floor(Math.random() * nomes.length);
      const amigoSorteado = nomes[indiceAleatorio];
      // Exibe o resultado do sorteio na página
      resultadoDiv.textContent = `Amigo Secreto: ${amigoSorteado}`;
    }
    
    // Associa os eventos de clique aos botões
    btnAdicionar.addEventListener('click', adicionarNome);
    btnSortear.addEventListener('click', sortearAmigo);
  });
  