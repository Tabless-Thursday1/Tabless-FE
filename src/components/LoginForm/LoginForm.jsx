/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import './LoginForm.scss';

const LoginForm = ({
  errors,
  touched,
  values,
}) => {
  const {
    username, password,
  } = values;
  return (
    <div className="Login-Form">
      <Form>
        <Field
          type="text"
          name="username"
          placeholder="username"
          validateOnChange={false}
          validateOnBlur
          values={username}
        />
        {touched.username && errors.username && (
        <p className="error">{errors.username}</p>
        )}
        <Field
          type="text"
          name="password"
          placeholder="password"
          validateOnChange={false}
          validateOnBlur
          values={password}
        />
        {touched.password && errors.password && (
        <p className="error">{errors.password}</p>
        )}
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
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
    username: Yup.string().required('Username is a required field.'),
    password: Yup.string().required('Password is a required field.'),
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post('', values)
      // post endpoint of server when ready above
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log('in login form', res.data);
        setStatus(res.data);
      })
      .catch((err) => console.log(err.response));
  },
})(LoginForm);

export default FormikLoginForm;
