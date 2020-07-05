import React, { useState, useEffect } from "react";

import api from "./services/api";

import "./App.css";
import ImageBack from "./assets/terra.jpg";

import Header from "./components/Header";

/**
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */

function App() {
  const [projects, setProjects] = useState([]);

  // useState retorna um array com 2 posições
  //
  // 1. Variável com valor inicial
  // 2. Função para atualizarmos esse valor

  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`);

    setProjects([...projects, `Novo projeto ${Date.now()}`]);
    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />

      {/* <img width={300} src={ImageBack} /> */}

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
