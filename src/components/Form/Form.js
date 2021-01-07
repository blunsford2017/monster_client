import { useState, useEffect } from 'react';
import Input from './Input.js';

function Form(props) {
    const [formState, setFormState] = useState({
      name: '',
      height: '',
      weight: '',
      description: ''
    });

  useEffect(() => {
    if (props.monster) {
      setFormState({
        name: props.monster.name,
        height: props.monster.height,
        weight: props.monster.weight,
        description: props.monster.description,
        id: props.monster.id
      })
    }
  }, [props.monster]);

  function handleChange(event) {
    setFormState(prevState => ({
      ...prevState,
      [event.target.id] : event.target.value
    }));
  }

  function handleSubmit(event){
    event.preventDefault();
    if (props.monster) formState.id = props.monster.id;
    props.handleSubmit(event, formState);
    formState.name = '';
    formState.height = '';
    formState.weight = '';
    formState.description = '';


  }

  function isFormValid() {
    return !(formState.name && formState.weight && formState.height && formState.description);
  }

    return (
      <form onSubmit={handleSubmit}>
        <Input
          handleChange={handleChange}
          name="name"
          placeholder="Monster Name"
          type="text"
          value={formState.title}
          id="name"
         />
         <br />
         <Input
           handleChange={handleChange}
           name="height"
           placeholder="Monster Height"
           type="number"
           value={formState.height}
           id="height"
        />
        <br/>
        <Input
          handleChange={handleChange}
          name="weight"
          placeholder="Monster Weight"
          type="number"
          value={formState.weight}
          id="weight"
       />
       <br/>
        <Input
          handleChange={handleChange}
          name="description"
          placeholder="Monster Description"
          type="text"
          value={formState.description}
          id="description"
       />
       <br/>
       <button className="btn" type="submit" disabled={isFormValid()}>Add Monster</button>
      </form>
    );
  }

export default Form;
