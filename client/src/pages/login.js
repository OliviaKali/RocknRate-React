import LoginForm from "../components/LoginForm";
var React = require('react');
var ReactDOMServer = require('react-dom/server');


class Login extends React.Component {
  state = {
    username: "",
    password: "",
    results: [],
    // redirect: false
  };
  userLogin = (user, pass) => {
    fetch({
      method: "POST",
      // url: "/api/search/",
      url: "http://localhost:3001/users/login/",
      data: { username: user,
      password: pass 
    }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };
  render() {
      return( <LoginForm />

      )
  }
}
