import styles from "./Empresa.module.css";
import EmpresaImg from "../../img/empresahero.png";
import Card1 from "../../img/Card1.png";
import Card2 from "../../img/Card2.png";

function Empresa() {
  return (
    <section className={styles.empresaContainer}>

      <div className={styles.heroImage}>
        <img src={EmpresaImg} alt="Gestão financeira" />
      </div>


      <div className={styles.hero}>
        <h1 className={styles.title}>
          Transformando a gestão de projetos com organização, clareza e eficiência.
        </h1>

        <p className={styles.subtitle}>
          O NexoFlex foi desenvolvido com o propósito de ser um Portifólio Profissional e com o objetivo de facilitar o controle financeiro de projetos,
          unificando orçamento, serviços e categorias em um único fluxo simples e seguro.
        </p>
      </div>

      <div className={styles.sectionWrapper}>
        <div className={styles.card}>
          <img src={Card1} alt="Gestão financeira" />
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Quem está por trás do NexoFlex</h2>
          <p className={styles.text}>
            Este projeto foi desenvolvido de forma independente, com foco total em resolver um problema
            comum para profissionais e pequenas empresas: a falta de controle financeiro estruturado
            sobre cada projeto. A meta sempre foi criar uma solução intuitiva, profissional e eficiente.
          </p>
        </div>
      </div>

      <div className={styles.sectionWrapper}>
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Por que o NexoFlex existe</h2>
            <p className={styles.text}>
              Organizar custos, acompanhar saldos e manter um histórico claro nem sempre é simples.
              O NexoFlex nasceu para trazer precisão e autonomia para quem trabalha com múltiplos projetos,
              simplificando decisões e automatizando cálculos que costumam tomar muito tempo.
          </p>
        </div>

        <div className={styles.card}>
          <img src={Card2} alt="Planejamento e organização" />
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>O que o sistema é capaz de fazer</h2>

        <ul className={styles.list}>
          <li>
            <strong>Controle financeiro completo:</strong> veja saldos, custos e valores atualizados automaticamente.
          </li>
          <li>
            <strong>Controle de serviços e categorias:</strong> mantenha cada gasto organizado e categorizado.
          </li>
          <li>
            <strong>Orçamentos dinâmicos:</strong> atualizações e cálculos automáticos a cada novo serviço adicionado.
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Compromisso com qualidade</h2>
        <p className={styles.text}>
          Cada elemento do NexoFlex foi pensado para garantir clareza, segurança e estabilidade.
          A automação reduz erros, o layout favorece decisões rápidas e a experiência final entrega
          mais eficiência no dia a dia.
        </p>
      </div>

    </section>
  );
}

export default Empresa;
