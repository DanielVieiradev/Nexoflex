import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";
import api from "../services/api";
import CategoryNames from "../services/CategoryNames";

function ProjectCard({ id, name, budget, category_id, onRemove }) {

  const handleRemove = async () => {
    try {
      await api.delete(`/projetos/${id}`);
      onRemove(id);
    } catch (error) {
      console.error("Erro ao excluir projeto:", error);
    }
  };

  return (
    <div className={styles.card}>
      <h3>{name}</h3>

      <p><strong>Orçamento:</strong> R$ {budget}</p>

      <p>
        <strong>Categoria:</strong>{" "}
        {CategoryNames[Number(category_id)] || "Categoria desconhecida"}
      </p>

      <div className={styles.actions}>
        <Link to={`/projeto/${id}`} className={styles.detailsBtn}>Detalhes</Link>
        <Link to={`/editar-projeto/${id}`} className={styles.editBtn}>Editar</Link>
        <button onClick={handleRemove} className={styles.deleteBtn}>Excluir</button>
      </div>
    </div>
  );
}

export default ProjectCard;
