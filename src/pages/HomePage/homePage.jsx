import React from "react";
import logoNuKenzie from "../../assets/logoNuKenzie.svg";
import ilustration from "../../assets/ilustration.svg";

import styles from "./style.module.css";

const HomePage = ({ setCurrentPage }) => {
  return (
    <main className={styles.mainPage}>
      <div className={styles.containerInformations}>
        <div className={styles.container}>
          <img
            className={styles.imgLogo}
            src={logoNuKenzie}
            alt="Logo Nu Kenzie"
          />
          <h1 className={styles.title}>
            Centralize o controle das suas finanças
          </h1>
          <p className={styles.paragraphy}>de forma rápida e segura</p>
        </div>
        <button
          className={styles.btnPink}
          onClick={() => setCurrentPage("dashPage")}
        >
          Iniciar
        </button>
      </div>
      <figure className={styles.figure}>
        <img
          className={styles.imgIlustration}
          src={ilustration}
          alt="Ilustração de Cadastro"
        />
      </figure>
    </main>
  );
};

export default HomePage;
