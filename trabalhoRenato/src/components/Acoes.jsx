import React from 'react';

// Um componente simples para o Card
function Card() {
  return (
    <div className="card">
      <h4>Card de Exemplo</h4>
      <p>Este é um card com algumas informações e estilo básico.</p>
      <p>Tecnologias: React, Vite, Git</p>
    </div>
  );
}

function Acoes() {
  // Funções de exemplo para os botões
  const handleSalvar = () => {
    alert('Ação de SALVAR executada!');
  };

  const handleCancelar = () => {
    alert('Ação de CANCELAR executada!');
  };

  const handleExcluir = () => {
    alert('Ação de EXCLUIR executada!');
  };

  return (
    <div className="acoes-container">
      <h3>Botões de Ações</h3>
      <button onClick={handleSalvar}>Salvar</button>
      <button onClick={handleCancelar}>Cancelar</button>
      <button onClick={handleExcluir} className="btn-excluir">Excluir</button>
      
      <hr />
      
      <h3>Card de Informações</h3>
      <Card />
    </div>
  );
}

export default Acoes;
