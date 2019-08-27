import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import './LoginForm.scss';

const LoginForm = ({
  errors,
  touched,
  values,
  handleSubmit,
  status,
}) => (
  <div className="Login-Form">
    <Form>
      <Field type="text" name="username" placeholder="username" />
      {touched.username && errors.username && (
        <p className="error">{errors.username}</p>
      )}
      <Field type="text" name="password" placeholder="password" />
      {touched.password && errors.password && (
        <p className="error">{errors.password}</p>
      )}
      <button type="submit">Submit</button>
    </Form>
  </div>
);

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || '',
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
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
