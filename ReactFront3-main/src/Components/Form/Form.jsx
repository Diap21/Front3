import { useState } from "react";
import { Card } from "../Card/Card";
import formStyle from "./Form.module.css";

export const Form = () => {
  
  const [user, setUser] = useState({
    name: "",
    nationality: "",
  });
  const [formError, setFormError] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  //Input behaviour to catch information
  const handleChange = (e, propiedad) => {
    setUser({ ...user, [propiedad]: e.target.value });
  };

  //Funciones 

  const validName = (str) => {
    const noEmptyCharacter = str.trim();
    console.log(noEmptyCharacter);
    if (noEmptyCharacter.length > 3 && str === noEmptyCharacter) {
      return true;
    } else {
      return false;
    }
  };

  const validateForm = () => {
    let errors = {};

    if (!validName(user.name)) {
      errors.name = "Tu nombre no es válido.";
    }
    if (user.nationality.length < 3) {
      errors.nationality = "Ingrese correctamete su pais de naciminto";
    }
    setFormError({ ...errors });

    return Object.keys(errors).length < 1; //verificacion del error
  };

  //Enviar
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setIsLogged(true);
    }
    //Send form

    console.log("Data:", user);
  };

  //Formulario

  return (
    <div>
      <form onSubmit={handleSubmit} className={formStyle.formBox}>
        <input
          type="text"
          name="name"
          placeholder="Ingresa tu nombre"
          className={formStyle.input}
          onChange={(e) => handleChange(e, "name")}
        />
        <span className={formStyle.noValid}>{formError.name}</span>
        <input
          type="text"
          name="petName"
          placeholder="Ingrese su nacionalidad"
          className={formStyle.input}
          onChange={(e) => handleChange(e, "nationality")}
        />
        <span className={formStyle.noValid}>{formError.nationality}</span>
        <button type="text" className={formStyle.submitButton}>
          Registrar huesped
        </button>
      </form>

      {isLogged && <Card name={user.name} petName={user.nationality} />}
    </div>
  );
};
