import React from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      loginName: null
    }

  }
  
  componentWillMount() {
    console.log(`**(Nav) Checking local storage...`)
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      console.log(`**(Nav) User found in local storage...`)
      this.setState({
        firstName: user.first_name,
        lastName: user.last_name,
        loginName: user.email
      })
    } else {
      console.log(
        `**(Nav) User not found in local storage. Checking if user is logged in...`
      )
      fetch("/api/profile")
        .then(response => {
          console.log(`**(Nav) User is logged...`)
          const { first_name, last_name, email } = response.data.user
          sessionStorage.setItem("user", JSON.stringify(response.data.user))
          this.setState({
            firstName: first_name,
            lastName: last_name,
            loginName: email
          })
          window.location.href = "/"
        })
        .catch(err => {
          console.log(
            `**(Nav) User is not logged. Redirecting to login page...`
          )
          console.log(err)
          //window.location.href = "/login"
        })
    }
  }
  
  render() {
    if(this.state.firstName) {
      return (
        <div>Hello {this.state.firstName}.
        <Link to="/logout">Logout</Link></div>
        );
    }
    return (
    <div><Link to="/login">Login</Link></div>
    );
  }

}