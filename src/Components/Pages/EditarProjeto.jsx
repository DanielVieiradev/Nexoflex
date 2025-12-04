import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import styles from "./EditarProjeto.module.css";

function EditarProjeto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/projetos/${id}`)
      .then((response) => {
        setProject(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar projeto:", err);
        setLoading(false);
      });
  }, [id]);

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    api
      .put(`/projetos/${id}`, project)
      .then(() => {
        alert("Projeto atualizado com sucesso!");
        navigate("/Projetos"); // redireciona após salvar
      })
      .catch((err) => {
        console.error("Erro ao atualizar projeto:", err);
        alert("Erro ao atualizar, tente novamente.");
      });
  }

  if (loading) {
    return <p className={styles.loading}>Carregando...</p>;
  }

  if (!project) {
    return <p className={styles.error}>Projeto não encontrado.</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Editar Projeto</h1>

      <form onSubmit={handleSubmit} className={styles.form}>

        <label>Nome do projeto</label>
        <input
          type="text"
          name="name"
          value={project.name || ""}
          onChange={handleChange}
        />

        <label>Orçamento</label>
        <input
          type="number"
          name="budget"
          value={project.budget || ""}
          onChange={handleChange}
        />

        <label>Categoria</label>
        <select
          name="category_id"
          value={project.category_id || ""}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          <option value="1">Planejamento</option>
          <option value="2">Desenvolvimento</option>
          <option value="3">Design</option>
          <option value="4">Financeiro</option>
          <option value="5">Marketing</option>
          <option value="6">Infraestrutura</option>
          <option value="7">Operacional</option>
        </select>

        <button type="submit" className={styles.btn}>Salvar alterações</button>
      </form>
    </div>
  );
}

export default EditarProjeto;
