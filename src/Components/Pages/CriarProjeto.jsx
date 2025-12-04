import ProjectForm from "../Project/ProjectForm";
import styles from "./Projeto.module.css";

function CriarProjeto() {
  return (
    <div className={styles.projeto_container}>
      <h1 className={styles.gradientText}>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar seus serviços.</p>

      <ProjectForm />
    </div>
  );
}

export default CriarProjeto;
