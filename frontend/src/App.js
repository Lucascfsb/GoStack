import React, {useState} from 'react';

import './App.css';

import backgroundImage from './assets/background.jpg';

import Header from './components/header';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Fron-end web']);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);

    console.log (projects);
  }

  return( 
    <>
      <Header title= "Projects"/>

      <img width={300} src={backgroundImage}/>

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type ="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;