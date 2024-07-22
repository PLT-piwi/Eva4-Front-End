import React from 'react';

const CollaboratorList = ({ collaborators, deleteCollaborator, setCurrentCollaborator }) => {
  return (
    <div>
      <h2>Lista de Colaboradores</h2>
      <ul>
        {collaborators.map((collaborator) => (
          <li key={collaborator.rut}>
            <div>
              <strong>RUT:</strong> {collaborator.rut} <br />
              <strong>Nombre:</strong> {collaborator.name} <br />
              <strong>Dirección:</strong> {collaborator.address}
            </div>
            <div>
              <button onClick={() => setCurrentCollaborator(collaborator)}>Editar</button>
              <button onClick={() => deleteCollaborator(collaborator.rut)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollaboratorList;