import React from "react";
import styles from "./style.module.css";
import logoNuKenzie from "../../assets/logoNuKenzieBlack.svg";

const Header = ({ setCurrentPage }) => {
  return (
    <header className={styles.headerPage}>
      <div className={styles.containerHeader}>
        <img src={logoNuKenzie} alt="Logo Nu Kenzie" />
        <button className={styles.btnHeader} onClick={() => setCurrentPage("")}>
          Início
        </button>
      </div>
    </header>
  );
};

export default Header;
