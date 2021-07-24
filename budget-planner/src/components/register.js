import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";

function Register() {
    const initialValues = {
        username: "",
        email: "",
        password: "",
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required("You must input a username!"),
        email: Yup.string().min(10).max(25).required("You must input a email!") ,
        password: Yup.string().min(3).max(15).required("You must input a password!"),
    });

    const onSubmit = (data) => {
        axios.post("http://localhost:4990/users", data).then(() => {
            console.log("IT WORKED");
    });
  };

  return (
    <div className="register">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            autocomplete="off"
            id="inputRegister"
            name="username"
            placeholder="Please enter your username..."
          />
          <label>Email: </label>
          <ErrorMessage name="email" component="span" />
          <Field
            autocomplete="off"
            id="inputRegister"
            name="email"
            placeholder="(Ex. xxx@xxxx.com)"
          />
          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autocomplete="off"
            type="password"
            id="inputRegister"
            name="password"
            placeholder="Please enter your password..."
          />

          <button type="submit"> Register </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
