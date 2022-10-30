import React, { useState, useEffect } from "react";

function Form() {
    const intialValues = { username: "", email: "", password: "" };
    const [formValues, Setformvalues] = useState(intialValues);
    const [formErrors, SetFormerrors] = useState(intialValues);
    const [isSubmit, Setissubmit] = useState(false);
  
    const eventHandler = (e) => {
      const { name, value } = e.target;
      Setformvalues({ ...formValues, [name]: value });
    };
  
    const handlersubmit = (e) => {
      e.preventDefault();
      SetFormerrors(validate(formValues));
      
      
      Setissubmit(true);

      
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
  
    const validate = (values) => {
      const errors = {};
      const emailRegex = /\S+@\S+\.\S+/;
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (!values.username) {
        errors.username = "Please enter username";
      } else if (values.username.length <= 4) {
        errors.username = "Username should be more than 4 characters";
      }
      if (!values.email) {
        errors.email = "Please enter your email address";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "Please enter a valid email ";
      }
      if (!values.password) {
        errors.password = "Enter your password";
    } else if (!passwordRegex.test(values.password)) {
        errors.password = "Minimum eight characters, at least one letter and one number";
      }

      else {
        alert("Form submitted successfully")


    }
      return errors;

      
    };

  
    return (

        <><p>Question 4</p><form onSubmit={handlersubmit}>
            <input
                name="username"
                placeholder="insert name"
                value={formValues.username}
                onChange={eventHandler} />
            <p>{formErrors.username}</p>
            <br />
            
            <input
                name="email"
                placeholder="insert email address"
                value={formValues.email}
                onChange={eventHandler} />
            <p>{formErrors.email}</p>
            <br />
            
            <input
                name="password"
                type="password"
                placeholder="enter password"
                value={formValues.password}
                onChange={eventHandler} />
            <p>{formErrors.password}</p>
            <br />
            
            <button>submit</button>
        </form></>
    )
}
export default Form;
