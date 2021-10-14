import React, { useState } from "react";
import "./test-react.css";
import { countries, states } from "../helpers/helpers";

const TestReact = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    pais: "",
    estado: "",
  });
  const [stateDisabled, setStateDisabled] = useState(true);
  const [statesSelected, setStatesSelected] = useState([]);

  const handleOnChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setForm({ ...form, [name]: value });
    if (name === "pais") {
      setStatesSelected(states[value]);
      setStateDisabled(false);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { nombre, apellido, pais, estado } = form;
    let inputsError = [];
    if (nombre === "") {
      inputsError = [...inputsError, "nombre"];
    }
    if (apellido === "") {
      inputsError = [...inputsError, "apellido"];
    }
    if (pais === "") {
      inputsError = [...inputsError, "pais"];
    }
    if (estado === "") {
      inputsError = [...inputsError, "estado"];
    }
    const sendingData = inputsError.length > 0 ? false : true;
    alert(sendingData ? "Enviando" : `Llene los campos: ${inputsError} `);
  };

  return (
    <form onSubmit={(e) => handleOnSubmit(e)} id="form-test">
      <h1>FORM TEST</h1>
      <div className="two-inputs">
        <input
          type="text"
          name="nombre"
          id="input"
          placeholder="Ingrese nombre"
          onChange={(e) => handleOnChange(e)}
        />
        <input
          type="text"
          name="apellido"
          id="input"
          placeholder="Ingrese apellido"
          onChange={(e) => handleOnChange(e)}
        />
      </div>
      <div className="two-inputs">
        <select
          type="select"
          name="pais"
          id="input"
          onChange={(e) => handleOnChange(e)}
        >
          {countries.map((countrie) => (
            <option key={countrie} value={countrie}>
              {countrie}
            </option>
          ))}
        </select>
        <select
          type="select"
          name="estado"
          id="input"
          disabled={stateDisabled}
          onChange={(e) => handleOnChange(e)}
        >
          {statesSelected.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" id="submit" value="Enviar" />
    </form>
  );
};

export default TestReact;
