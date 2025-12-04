import { useState } from "react";
import Input from "../form/Input";
import styles from "./ProjectForm.module.css";
import api from "../services/api";

function ProjectForm() {

  const [project, setProject] = useState({
    name: "",
    budget: "",
    category_id: "",
  });
  
  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/projetos", project);

      if (response.status === 201) {
        alert("✅ Projeto criado com sucesso!");
        setProject({ name: "", budget: "", category_id: "" });
      } else {
        alert("⚠️ Algo inesperado aconteceu ao salvar o projeto.");
        console.log("Resposta:", response);
      }
    } catch (error) {
      console.error("Erro ao criar projeto:", error);
      alert("❌ Ocorreu um erro ao salvar o projeto.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form_container}>
      
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name}
      />

      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget}
      />

      <div className={styles.form_control}>
        <label htmlFor="category_id"></label>
        <select
          name="category_id"
          id="category_id"
          onChange={handleChange}
          value={project.category_id}
        >
          <option value="">Selecione a categoria</option>
          <option value="1">Planejamento</option>
          <option value="2">Desenvolvimento</option>
          <option value="3">Design</option>
          <option value="4">Financeiro</option>
          <option value="5">Marketing</option>
          <option value="6">Infraestrutura</option>
          <option value="7">Operacional</option>
        </select>
      </div>

      <button type="submit" className={styles.submitBtn}>
        Criar projeto
      </button>
    </form>
  );
}

export default ProjectForm;
