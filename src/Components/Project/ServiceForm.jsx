import { useState } from "react";
import Input from "../Form/Input";
import styles from "./ServiceForm.module.css";

function ServiceForm({ handleSubmit, btnText }) {
  const [service, setService] = useState({
    name: "",
    cost: "",
    description: "",
    category: "",
    status: "",
    billingType: "",
    priority: ""
  });

  function handleChange(e) {
    setService({
      ...service,
      [e.target.name]: e.target.value
    });
  }

  function submit(e) {
    e.preventDefault();
    handleSubmit(service);
  }

  return (
    <form onSubmit={submit} className={styles.form_container}>

      <Input 
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Digite o nome do serviço"
        handleOnChange={handleChange}
      />

      <Input 
        type="number"
        text="Valor do serviço"
        name="cost"
        placeholder="Insira o valor"
        handleOnChange={handleChange}
      />

      <Input 
        type="text"
        text="Descrição"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleChange}
      />

      {/* Categoria */}
      <div className={styles.input_container}>
        <label htmlFor="category">Categoria</label>
        <select
          name="category"
          id="category"
          onChange={handleChange}
        >
          <option>Selecione uma categoria</option>
          <option value="desenvolvimento">Desenvolvimento</option>
          <option value="design">Design</option>
          <option value="infraestrutura">Infraestrutura</option>
          <option value="consultoria">Consultoria</option>
        </select>
      </div>

      {/* Status */}
      <div className={styles.input_container}>
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          onChange={handleChange}
        >
          <option>Selecione o status</option>
          <option value="pendente">Pendente</option>
          <option value="em_andamento">Em andamento</option>
          <option value="concluido">Concluído</option>
        </select>
      </div>

      {/* Tipo de cobrança */}
      <div className={styles.input_container}>
        <label htmlFor="billingType">Tipo de cobrança</label>
        <select
          name="billingType"
          id="billingType"
          onChange={handleChange}
        >
          <option>Selecione o tipo de cobrança</option>
          <option value="hora">Por hora</option>
          <option value="projeto">Por projeto</option>
          <option value="mensal">Mensal</option>
        </select>
      </div>

      {/* Prioridade */}
      <div className={styles.input_container}>
        <label htmlFor="priority">Prioridade</label>
        <select
          name="priority"
          id="priority"
          onChange={handleChange}
        >
          <option>Selecione a prioridade</option>
          <option value="baixa">Baixa</option>
          <option value="media">Média</option>
          <option value="alta">Alta</option>
        </select>
      </div>

      <button type="submit" className={styles.btn}>
        {btnText}
      </button>

    </form>
  );
}

export default ServiceForm;
