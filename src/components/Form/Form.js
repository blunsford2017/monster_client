import { useState, useEffect } from "react";
import Input from "./Input.js";
import InputTextArea from "./InputTextArea";

function Form(props) {
  const [formState, setFormState] = useState({
    name: "",
    height: "",
    weight: "",
    description: "",
  });

  useEffect(() => {
    if (props.monster) {
      setFormState({
        name: props.monster.name,
        height: props.monster.height,
        weight: props.monster.weight,
        description: props.monster.description,
        id: props.monster.id,
      });
    }
  }, [props.monster]);

  function handleChange(event) {
    setFormState((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (props.monster) formState.id = props.monster.id;
    props.handleSubmit(event, formState);
    formState.name = "";
    formState.height = "";
    formState.weight = "";
    formState.description = "";
  }

  function isFormValid() {
    return !(
      formState.name &&
      formState.weight &&
      formState.height &&
      formState.description
    );
  }

  return (
    <div className="form" id="formInputArea">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <small> Monster Name</small>
          <Input
            handleChange={handleChange}
            name="name"
            placeholder="Monster Name"
            type="text"
            value={formState.name}
            id="name"
          />

          <small> Monster Height in Feet</small>
          <Input
            handleChange={handleChange}
            name="height"
            placeholder="Monster Height"
            type="number"
            value={formState.height}
            id="height"
          />
          <small> Monster Weight in Pounds</small>
          <Input
            handleChange={handleChange}
            name="weight"
            placeholder="Monster Weight"
            type="number"
            value={formState.weight}
            id="weight"
          />

          <small> Monster Description</small>
          <InputTextArea
            handleChange={handleChange}
            name="description"
            placeholder="Monster Description"
            type="text"
            value={formState.description}
            id="description"
          />
          <br />
          <button className="btn" type="submit" disabled={isFormValid()}>
            {props.monster ? "Update Monster" : "Add Monster"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
