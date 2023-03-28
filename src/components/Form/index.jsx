import React from "react";
import { useState } from "react";
import styles from "./style.module.css";

const Form = ({ addCard }) => {
  const [formData, setFormData] = useState({
    description: "",
    value: "",
    category: "entrada",
  });

  const submitForm = (event) => {
    event.preventDefault();

    if (formData.description !== "" && formData.value !== "") {
      addCard(formData);
    } else {
      alert("Você precisa preencher os campos para enviar o formulário.");
    }

    setFormData({
      description: "",
      value: "",
      category: "entrada",
    });
  };

  return (
    <form className={styles.containerFrom} onSubmit={submitForm}>
      {/* //input descricao */}
      <label className={styles.description} htmlFor="description">
        Descrição
      </label>
      <input
        className={styles.inputForm}
        type="text"
        name="description"
        id="description"
        placeholder="Digite aqui sua descrição"
        value={formData.description}
        onChange={(event) =>
          setFormData({ ...formData, description: event.target.value })
        }
      />
      <span className={styles.exempleDescription}>Ex: Compra de roupas</span>

      {/* //input valor */}
      <fieldset className={styles.containerValues}>
        <div className={styles.containerValue}>
          <label className={styles.description} htmlFor="value">
            Valor
          </label>
          <input
            className={styles.inputValues}
            type="number"
            name="value"
            id="value"
            placeholder="1  R$"
            value={formData.value}
            onChange={(event) =>
              setFormData({ ...formData, value: event.target.value })
            }
          />
        </div>

        {/* //select */}
        <div className={styles.containerSelect}>
          <label className={styles.description} htmlFor="typeValue">
            Tipo de valor
          </label>
          <select
            className={styles.inputValues}
            name="typeValue"
            id="typeValue"
            value={formData.category}
            onChange={(event) =>
              setFormData({ ...formData, category: event.target.value })
            }
          >
            <option className={styles.inputValuesSelect} value="entrada">
              Entrada
            </option>
            <option className={styles.inputValuesSelect} value="despesa">
              Despesa
            </option>
          </select>
        </div>
      </fieldset>
      <button className={styles.btnSubmit} type="submit">
        Inserir valor
      </button>
    </form>
  );
};

export default Form;
