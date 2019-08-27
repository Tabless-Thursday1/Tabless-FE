// import './SingupForm.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = ({
  errors,
  touched,
  values,
  handleSubmit,
  status,
}) => (
  <div className="Signup-Form">
    <Form>
      <Field type="text" name="firstname" placeholder="First Name" />
      {touched.firstname && errors.firstname && (
        <p className="error">{errors.firstname}</p>
      )}
      <Field type="text" name="lastname" placeholder="Last Name" />
      {touched.lastname && errors.lastname && (
        <p className="error">{errors.lastname}</p>
      )}
      <Field type="text" name="email" placeholder="E-Mail" />
      {touched.email && errors.email && (
        <p className="error">{errors.email}</p>
      )}
      <Field type="text" name="username" placeholder="Username" />
      {touched.username && errors.username && (
        <p className="error">{errors.username}</p>
      )}
      <Field type="text" name="password" placeholder="Password" />
      {touched.password && errors.password && (
        <p className="error">{errors.password}</p>
      )}
      <button type="submit">Submit</button>
    </Form>
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

  validationSchema: Yup.object().shape({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().required(),
    username: Yup.string().required(),
    password: Yup.string().required(),
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
