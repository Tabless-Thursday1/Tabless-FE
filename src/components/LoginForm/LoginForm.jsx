/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import './LoginForm.scss';

import { postLogin } from '../../actions';

const LoginForm = ({
  errors, touched,
}) => (
  <div className="container">
    <div className="Login-Form">
      <h2 className="form-title">Welcome Back</h2>
      <Form>
        <Field
          type="text"
          name="username"
          placeholder="Username"
          className="field"
        />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        <Field
          type="password"
          name="password"
          placeholder="Password"
          className="field"
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
  mapPropsToValues: ({ username, password }) => ({
    username: username || '',
    password: password || '',
  }),

  validateOnChange: false,

  validateOnBlur: false,

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is a required field.'),
    password: Yup.string().required('Password is a required field.'),
  }),

  handleSubmit: async (values, { props, resetForm }) => {
    const { login } = props;

    const result = await login({ data: values });
    if (!result.error) {
      resetForm();
      // redirect the user because they are now logged in
    }
  },
})(LoginForm);

export default connect(null, { login: postLogin })(FormikLoginForm);
