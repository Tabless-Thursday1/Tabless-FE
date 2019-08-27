import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import './SignupForm.scss';

const SignupForm = ({ errors, touched }) => (
  <div className="container">
    <div className="Signup-Form">
      <h2>Sign Up</h2>
      <Form>
        <Field
          className="field"
          type="text"
          name="firstname"
          placeholder="First Name"
        />
        {touched.firstname && errors.firstname && (
          <p className="error">{errors.firstname}</p>
        )}
        <Field
          className="field"
          type="text"
          name="lastname"
          placeholder="Last Name"
        />
        {touched.lastname && errors.lastname && (
          <p className="error">{errors.lastname}</p>
        )}
        <Field
          className="field"
          type="text"
          name="email"
          placeholder="E-mail"
        />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <Field
          className="field"
          type="text"
          name="username"
          placeholder="Username"
        />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field
          className="field"
          type="password"
          name="password"
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <button type="submit" className="ant-btn ant-btn-primary ant-btn-lg submit">Register</button>
      </Form>
    </div>
  </div>
);

const FormikSignupForm = withFormik({
  mapPropsToValues({
    firstname,
    lastname,
    email,
    username,
    password,
  }) {
    return {
      firstname: firstname || '',
      lastname: lastname || '',
      email: email || '',
      username: username || '',
      password: password || '',
    };
  },

  validateOnChange: false,

  validateOnBlur: false,

  validationSchema: Yup.object().shape({
    firstname: Yup.string().required('First Name is a required field.'),
    lastname: Yup.string().required('Last Name is a required field.'),
    email: Yup.string().required('E-mail is a required field.'),
    username: Yup.string().required('Username is a required field.'),
    password: Yup.string().required('Password is a required field.'),
  }),

  handleSubmit(values, { setStatus }) {
    axios
    // axiosWithAuth
      .post('', values)
      .then((res) => {
        console.log('in signup form', res.data);
        setStatus(res.data);
      })
      .catch((err) => console.log(err.response));
  },
})(SignupForm);

export default FormikSignupForm;
