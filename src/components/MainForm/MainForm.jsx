import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import './MainForm.scss';

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

  const addTab = event =>{
    event.preventDefault();

  }

  return (
    <div className="Main-Form">
      <Form>
      <Field
        type="text"
        name="url"
        placeholder="URL"
        validateOnChange={false}
        validateOnBlur
        values='url'
      />
      {touched.url && errors.url && (
        <p className="error">{errors.url}</p>
      )}
      <Field
        type="text"
        name="description"
        placeholder="Description"
        validateOnChange={false}
        validateOnBlur
        values='description'
      />
      {touched.description && errors.description && (
        <p className="error">{errors.description}</p>
      )}
      <Field
        type="text"
        name="category"
        placeholder="category"
        validateOnChange={false}
        validateOnBlur
        values='category'
      />
      {touched.category && errors.category && (
        <p className="error">{errors.category}</p>
      )}
      <Field    
        component="select"    
        type="text"
        name="option"
        placeholder="None"
        validateOnChange={false}
        values='option'
        validateOnBlur>
          <option value='public'>Public</option>
          <option value='private'>Private</option>
        </Field>
      {touched.option && errors.option && (
        <p className="error">{errors.option}</p>
      )}
       <button type="submit">Submit</button>
    </Form>
    </div>
  );
};
const FormikMainForm = withFormik({
  mapPropsToValues({ url, description, option, category, tabId, edit, match }) {
    return {
      url: url || '',
      description: description || '',
      option: option || 'Public',
      category: category || '',
      match, 
      tabId: match && match.tabId,
      edit: edit || false, 
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
    option: Yup.string(),
    category: Yup.string(),
  }),
  
  handleSubmit(values, { setStatus, event }) {
    event.preventDefault();
    const restCallType = values.edit === true ? 'put' : 'post';
    const { tabId } = values;
    axios[restCallType]('', values)
      // put endpoint of server when ready above
      .then((res) => {
        console.log('in login form', res.data);
        setStatus(res.data);
      })
      .catch((err) => console.log(err.response));
  }
  ,
  
})(MainForm);

export default FormikMainForm;
