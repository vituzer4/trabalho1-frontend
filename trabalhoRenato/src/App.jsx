import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Alerta from './components/Alerta.jsx';
import ToDoList from './components/ToDoList.jsx'; // 1. Importa o novo componente
import './App.css';

function App() {
  const seuNome = "Victor Ricardo";

  return (
    <div className="App">
      <Header />

      <main>
        <h2>Bem-vindo, {seuNome}!</h2>
        <Alerta tipo="success" mensagem="Aplicação carregada com sucesso!" />
        
        <hr />

        {/* 2. Adiciona o componente da lista de tarefas aqui */}
        <ToDoList />

      </main>

      <Footer />
    </div>
  );
}

export default App;
