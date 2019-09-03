var React = require('react');
var ReactDOMServer = require('react-dom/server');

class Register extends React.Component {
  render() {
      return(
<div classNameName="row mt-5">
        <div classNameName="col-md-6 m-auto">
          <div classNameName="card card-body">
            <h1 className="text-center mb-3">
              <i className="fas fa-user-plus"></i> Register
            </h1>
            
            <form action="/register" method="POST">
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter Name"
                  
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  classNameName="form-control"
                  placeholder="Create Password"
                />
              </div>
              <div className="form-group">
                <label for="password2">Confirm Password</label>
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  classNameName="form-control"
                  placeholder="Confirm Password"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Register
              </button>
            </form>
            <p className="lead mt-4">Have An Account? <a href="/login">Login</a></p>
          </div>
        </div>
      </div>
      )
  }
  }
      module.exports = Register;