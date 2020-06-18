import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStartup } from "../../redux/store";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Form() {
  const [startup, setStartup] = useState({
    title: "",
    description: "",
  });
  let history = useHistory();

  const dispatch = useDispatch();
  // const [error, setError] = useState(false);

  const handleChange = (e) => {
    setStartup({
      ...startup,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description } = startup;
    dispatch(addStartup(title, description));
    history.goBack();
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='name of the startup'
          onChange={handleChange}
        />
        <input
          type='text'
          name='description'
          placeholder='description of the startup'
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}
