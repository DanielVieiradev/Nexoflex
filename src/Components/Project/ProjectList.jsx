import { useEffect, useState } from "react";
import styles from "./ProjectList.module.css";
import api from "../services/api";
import ProjectCard from "../Project/ProjectCard";

function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api
      .get("/projetos")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar projetos:", error);
      });
  }, []);

  function removeProject(id) {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Projetos cadastrados</h2>

      {projects.length === 0 && (
        <p className={styles.empty}>Nenhum projeto cadastrado ainda.</p>
      )}
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            budget={project.budget}
            category_id={project.category_id}
            onRemove={removeProject}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsList;
