import ProjectsList from "../Project/ProjectList";
import styles from "./Projeto.module.css";

function Projetos() {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.content_wrapper}>
        <div className={styles.pageContainer}>
          <h1 className={styles.title}>Meus Projetos</h1>
          <p className={styles.subtitle}>
            Aqui você pode visualizar todos os seus projetos cadastrados.
          </p>

          <div className={styles.gridWrapper}></div>

          <ProjectsList />
        </div>
      </div>
    </div>
  );
}

export default Projetos;
