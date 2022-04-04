import React, { useState, useEffect } from "react";
import axios from "axios";
const People = (props) => {
  const { id } = props;
  useEffect(() => {
  axios
  .get(`https://swapi.dev/api/people/${id}`)
  .then(response => console.log(response.data))
  .catch(err => console.log(err))
  },  []);
  return <h1>People Components</h1>
};

export default People;