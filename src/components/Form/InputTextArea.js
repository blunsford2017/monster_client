function Input({ 
    name, 
    title, 
    value, 
    placeholder, 
    handleChange }) {
      return (
        <>
          <label htmlFor={name}>{title}</label>
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            rows="4"
            cols="50"
            placeholder={placeholder}
          />
        </>
      );
  }
  
  export default Input;
  