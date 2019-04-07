import React, { Component } from 'react';
import './App.css';
import User from './components/User';


class App extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => (response.json()))
      .then(users => (
        this.setState({
          users
        })
      ))
  }


  render() {
    console.log(this.state.users);
    const users = this.state.users.map((user, index) => (

      <User key={user.id} name={user.name} street={user.address.street} city={user.address.city} email={user.email} number={index + 1} />
    ))
    return (
      <ul style={{ listStyle: 'none' }}>
        {users}
      </ul>
    );
  }
}

export default App;
