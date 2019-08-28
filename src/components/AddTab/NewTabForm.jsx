import React, { useState } from 'react';

import { Form } from 'formik';

const NewTabForm = (props) => {
  const [tab, setTab] = useState();

  const changeHandler = (event) => {
    setTab({ ...tab, [event.target.name]: event.target.value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    const newTab = {
      ...tab,
      id: Date.now()
    };
    props.addNewTab(newTab);
    setTab({ title: '' });
  };

  return (
    <div className="newTab">
      <Form onSubmit={submitForm}>
        <input
          type="text"
          name="title"
          placeholder="Tab Title"
          // value={}
          onChange={changeHandler}
        />
        <button type="submit">Add Tab</button>
      </Form>
    </div>
  );
};

export default NewTabForm;
