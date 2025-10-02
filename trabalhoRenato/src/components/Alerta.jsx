import React from 'react';

// Este componente recebe duas "props": o tipo do alerta (success ou danger) e a mensagem
function Alerta({ tipo, mensagem }) {
  // Define a classe CSS com base no tipo do alerta
  const classeAlerta = tipo === 'success' ? 'alerta-success' : 'alerta-danger';

  return (
    <div className={`alerta ${classeAlerta}`}>
      {mensagem}
    </div>
  );
}

export default Alerta;
