/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { useState, useEffect } from 'react';
import CollaboratorForm from './components/CollaboratorForm';
import CollaboratorList from './components/CollaboratorList';
import './App.css';

const App = () => {
  const [collaborators, setCollaborators] = useState([]);
  const [currentCollaborator, setCurrentCollaborator] = useState(null);

  useEffect(() => {
    const storedCollaborators = JSON.parse(localStorage.getItem('collaborators')) || [];
    setCollaborators(storedCollaborators);
  }, []);

  useEffect(() => {
    localStorage.setItem('collaborators', JSON.stringify(collaborators));
  }, [collaborators]);

  const addCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  const editCollaborator = (updatedCollaborator) => {
    const updatedCollaborators = collaborators.map((collaborator) =>
      collaborator.rut === updatedCollaborator.rut ? updatedCollaborator : collaborator
    );
    setCollaborators(updatedCollaborators);
    setCurrentCollaborator(null);
  };

  const deleteCollaborator = (rut) => {
    const updatedCollaborators = collaborators.filter((collaborator) => collaborator.rut !== rut);
    setCollaborators(updatedCollaborators);
  };

  return (
    <div className="container">
      <h1>Gestión de Colaboradores</h1>
      <CollaboratorForm
        addCollaborator={addCollaborator}
        editCollaborator={editCollaborator}
        currentCollaborator={currentCollaborator}
        setCurrentCollaborator={setCurrentCollaborator}
      />
      <CollaboratorList
        collaborators={collaborators}
        deleteCollaborator={deleteCollaborator}
        setCurrentCollaborator={setCurrentCollaborator}
      />
    </div>
  );
};

export default App;