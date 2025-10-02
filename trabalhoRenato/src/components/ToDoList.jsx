import React, { useState } from 'react';

function ToDoList() {
  // 1. STATE: Criamos um estado para guardar a lista de tarefas (começa vazia).
  const [tarefas, setTarefas] = useState ([]);
  // 2. STATE: Criamos um estado para guardar o que o usuário está digitando no input.
  const [novaTarefa, setNovaTarefa] = useState('');

  // 3. FUNÇÃO DE EVENTO: Chamada quando o usuário clica no botão de adicionar.
  const handleAdicionarTarefa = () => {
    // Verifica se o input não está vazio
    if (novaTarefa.trim() === '') {
      alert('Por favor, digite uma tarefa.');
      return;
    }

    // Cria um novo objeto de tarefa com um ID único (usando a data e hora)
    const nova = {
      id: Date.now(),
      texto: novaTarefa
    };

    // Atualiza o estado da lista de tarefas, adicionando a nova tarefa
    setTarefas([...tarefas, nova]);

    // Limpa o campo de input depois de adicionar
    setNovaTarefa('');
  };

  // 4. FUNÇÃO DE EVENTO: Chamada toda vez que o usuário digita algo no input.
  const handleInputChange = (event) => {
    setNovaTarefa(event.target.value);
  };

  return (
    <div className="card"> {/* Usaremos a classe .card que já criamos */}
      <h3>Minha Lista de Tarefas</h3>

      {/* 5. FORMULÁRIO: Input para o usuário digitar e botão para adicionar */}
      <div className="form-tarefa">
        <input
          type="text"
          value={novaTarefa}
          onChange={handleInputChange}
          placeholder="Digite o nome ou tarefa"
        />
        <button onClick={handleAdicionarTarefa}>Adicionar</button>
      </div>

      {/* 6. LISTA: Mostra as tarefas que estão no estado "tarefas" */}
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id}>
            {tarefa.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
