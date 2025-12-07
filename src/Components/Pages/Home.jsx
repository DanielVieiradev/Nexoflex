import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/Linkbutton";

function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <h1>
            Nexoflex, o sistema inteligente para
            Gestão de Projetos e Finanças
          </h1>

          <p>
            Controle, organização e praticidade na hora de acompanhar
            o crescimento dos seus projetos — de forma rápida e segura.
          </p>

          <LinkButton to="/Projetos/Criar" text="Começar Agora" />

          <small>*Sem burocracia. Simples, rápido e flexível.</small>
        </div>
      </section>

      <section className={styles.leadersSection}>
        <Container>

          <div className={styles.leadersHeader}>
            <h2>
              Por que o Nexoflex é a{" "}
              <span className={styles.highlight}>escolha dos Líderes?</span>
            </h2>

            <p>
              Controle, organização e praticidade hora a hora. Acompanhe o
              crescimento dos seus projetos de forma rápida e segura.
            </p>
          </div>

          <div className={styles.cardsGrid}>

            <div className={styles.whiteCard}>
              <div className={styles.cardIcon}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#0f8a56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 7V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7" stroke="#0f8a56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 13H13" stroke="#0f8a56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11V15" stroke="#0f8a56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 15V12" stroke="#0f8a56" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M22 15V10" stroke="#0f8a56" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Visão Financeira em Tempo Real</h3>
              <p>
                Visualize o fluxo de caixa do projeto instantaneamente.
                Cada serviço adicionado atualiza automaticamente o saldo restante.
              </p>
            </div>

            <div className={styles.whiteCard}>
              <div className={styles.cardIcon}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="13" r="8" stroke="#0f8a56" strokeWidth="1.5"/>
                  <path d="M12 5V2" stroke="#0f8a56" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M10 2H14" stroke="#0f8a56" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 9V13L15 15" stroke="#0f8a56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 13H20" stroke="#0f8a56" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4 13H2" stroke="#0f8a56" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Gestão de Tarefas Otimizada</h3>
              <p>
                Controle a organização dos serviços de cada projeto.
                Edite, exclua e categorize despesas com poucos cliques.
              </p>
            </div>

            <div className={styles.whiteCard}>
              <div className={styles.cardIcon}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#0f8a56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12L11 14L15 10" stroke="#0f8a56" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Segurança de Nível Empresarial</h3>
              <p>
                Seus dados de orçamento e estrutura de projetos estão seguros.
                Foco total na confidencialidade do seu negócio.
              </p>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;
