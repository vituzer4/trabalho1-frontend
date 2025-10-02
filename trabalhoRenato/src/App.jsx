// 1. Importar React e o hook useState
import React, { useState } from 'react';
// 2. Importar os componentes que criamos
import Header from './components/Header.jsx'; // Corrigido para 'H' maiúsculo
import Footer from './components/Footer.jsx'; // Corrigido para 'F' maiúsculo
import ListaAlunos from './components/ListaAlunos.jsx';
import Alerta from './components/Alerta.jsx';
import Acoes from './components/Acoes.jsx';
// 3. Importar o CSS
import './App.css';

function App() {
  // Variável para o seu nome
  const seuNome = "Victor Ricardo";

  // Estado para o contador de cliques
  const [cliques, setCliques] = useState(0);

  // Função para lidar com o clique do botão
  function handleClique() {
    setCliques(cliques + 1);
  }

  // 4. O return() com a estrutura correta do App
  return (
    <div className="App">
      {/* O Header vai aqui */}
      <Header />

      {/* Conteúdo principal da página */}
      <main>
        <h2>Bem-vindo, {seuNome}!</h2>

        {/* Alertas que você acabou de criar */}
        <Alerta tipo="success" mensagem="Tudo ocorreu como esperado!" />
        <Alerta tipo="danger" mensagem="Atenção! Ocorreu um erro." />

        <hr /> {/* Linha para separar */}

        {/* Lista de Alunos */}
        <ListaAlunos />

        <hr /> {/* Linha para separar */}

        {/* Botão de clique com contador */}
        <h3>Botão de Clique</h3>
        <button onClick={handleClique}>Clique Aqui</button>
        <p>Você clicou {cliques} vezes.</p>
        <Acoes />
      </main>

      {/* O Footer vai aqui */}
      <Footer />
    </div>
  );
}

export default App;