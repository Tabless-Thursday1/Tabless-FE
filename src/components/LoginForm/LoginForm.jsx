import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import './LoginForm.scss';

const LoginForm = ({ errors, touched }) => (
  <div className="container">
    <div className="Login-Form">
      <h2>Welcome Back</h2>
      <Form>
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
        <button type="submit" className="ant-btn ant-btn-primary ant-btn-lg submit">Log In</button>
      </Form>
    </div>
  </div>
);

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || '',
    };
  },
  validateOnChange: false,

  validateOnBlur: false,

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is a required field."),
    password: Yup.string().required("Password is a required field."),
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post('', values)
      // post endpoint of server when ready above
      .then((res) => {
        console.log('in login form', res.data);
        setStatus(res.data);
      })
      .catch((err) => console.log(err.response));
  },
})(LoginForm);

export default FormikLoginForm;
