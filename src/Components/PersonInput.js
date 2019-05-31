import React from 'react'
import axios from 'axios'


export default class PersonInput extends React.Component {

  state = {
    name: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name;
    }
    axios.post(`https://jsonplaceholder.typicode.com/users`, {user})
    .then(res => {
      console.log('res', res);
      console.log('data', res.data);

    })
  }
    render() {


  }
