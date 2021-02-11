import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import firebase from "../../Firebase/Firebase";

const Login = ({ connected, addLoginStatus }) => {
  const auth = firebase.auth();
  const db = firebase.firestore();
  // update firestore settings
  db.settings({ timestampsInSnapshots: true });

  const [email, setEmail] = React.useState("cangrejo@gmail.com");
  const [password, setPassword] = React.useState("12345678");

  function createForm(email, firebaseUID, token) {
    var formData = new FormData();
    formData.append("email", email);
    formData.append("firebaseUID", firebaseUID);
    formData.append("token", token);
    return formData;
  }

  function fetchForm(email, password, token) {
    localStorage.setItem("token", token);
    var formData = createForm(email, password, token);
    return fetch("https://real-state-admin.herokuapp.com/api/login", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        addLoginStatus(data.connected);
        // set cur user in redux global state
      })
      .catch((error) => console.log(error));
  }

  function handleSubmit(e) {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      console.log(cred);
      auth.currentUser
        .getIdToken()
        .then((token) => fetchForm(email, password, token));
    });
  }

  if (connected === "true") {
    return <Redirect to="/dashboard" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Log in</h3>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Sign in
      </button>
      <p className="forgot-password text-right">
        Forgot <Link to="/">password?</Link>
      </p>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    connected: state.login.connected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addLoginStatus: (value) =>
      dispatch({
        type: "ADD_LOGIN_STATUS",
        payload: value,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
