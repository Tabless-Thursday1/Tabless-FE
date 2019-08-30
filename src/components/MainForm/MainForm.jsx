/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import './MainForm.scss';

import { addTab, updateTab } from '../../actions';

const MainForm = ({
  errors,
  touched,
  props,
}) => {
  console.log('in form', props);

  // const [tab, setTab] = useState(props.tab);
  // useEffect(() => {
  //   setTab(props.);
  // }, [props.]);

  // const addTab = (event) => {
  //   event.preventDefault();
  // };
  return (
    <div className="Main-Form">
      <div className="addTabForm">
        <Form>
          <h1 className="form-title">Add Your Tab Below</h1>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            className="field"
          />
          {touched.name && errors.name && (
          <p className="error">{errors.name}</p>
          )}
          <Field
            type="text"
            name="url"
            placeholder="URL"
            className="field"
          />
          {touched.url && errors.url && (
          <p className="error">{errors.url}</p>
          )}
          <Field
            type="text"
            name="description"
            placeholder="Description"
            className="field"
          />
          {touched.description && errors.description && (
          <p className="error">{errors.description}</p>
          )}
          <Field
            type="text"
            name="category"
            placeholder="category"
            className="field"
          />
          {touched.category && errors.category && (
          <p className="error">{errors.category}</p>
          )}
          <Field
            component="select"
            type="text"
            name="option"
            placeholder="None"
            classname="field"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </Field>
          {touched.option && errors.option && (
          <p className="error">{errors.option}</p>
          )}
          <button
            type="submit" 
            className="ant-btn ant-btn-primary ant-btn-lg submit"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

const FormikMainForm = withFormik({
  mapPropsToValues({
    name, url, description, option, category, edit, match,
  }) {
    return {
      name: name || '',
      url: url || '',
      description: description || '',
      option: option || 'Public',
      category: category || '',
      match,
      tabId: match && match.tabId,
      edit: edit || false,
    };
  },

  validateOnBlur: false,

  validateOnChange: false,

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    url: Yup.string().required(),
    description: Yup.string().required(),
    option: Yup.string().required(),
    category: Yup.string(),
  }),

  handleSubmit: async (values, { setStatus, event, resetForm }) => {
    event.preventDefault();
    const actionCreator = values.edit === true ? values : 'post';
    const { tabId } = values;
    // axios[restCallType]('', values)
    //   // put endpoint of server when ready above
    //   .then((res) => {
    //     console.log('in login form', res.data);
    //     setStatus(res.data);
    //     resetForm();
    //   })
    //   .catch((err) => console.log(err.response));
  }
  ,

})(MainForm);

export default connect(null, { add: addTab, update: updateTab })(FormikMainForm);
