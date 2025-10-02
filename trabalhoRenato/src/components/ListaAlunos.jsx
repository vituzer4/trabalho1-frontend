import React from 'react';

function ListaAlunos() {
  // Aqui está a lista de alunos, como pedido no trabalho
  const alunos = [
    { id: 1, nome: 'Ana Clara', matricula: '20240101' },
    { id: 2, nome: 'Bruno Costa', matricula: '20240102' },
    { id: 3, nome: 'Carlos Eduardo', matricula: '20240103' },
    { id: 4, nome: 'Daniela Ferreira', matricula: '20240104' },
    { id: 5, nome: 'Eduardo Martins', matricula: '20240105' }
  ];

  return (
    <div>
      <h3>Lista de Alunos</h3>
      <ul>
        {/* Este código usa .map() para criar um <li> para cada aluno na lista */}
        {alunos.map(aluno => (
          <li key={aluno.id}>
            {aluno.nome} (Matrícula: {aluno.matricula})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaAlunos;
