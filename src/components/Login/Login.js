import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from '../../Firebase/Firebase'


const Login = () => {
    const auth = firebase.auth();
     const db = firebase.firestore();
     // update firestore settings
     db.settings({timestampsInSnapshots:true});

     const [email, setEmail] = React.useState('');
     const [password, setPassword] = React.useState('');


     function createForm(email, firebaseUID, token) {
        var formData = new FormData();
        formData.append("email", email);
        formData.append("firebaseUID", firebaseUID);
        formData.append("token", token);
        return formData;
    }


     function fetchForm(email, password, token) {
         console.log(email)
         console.log(password)
         console.log(token)
         localStorage.setItem('token', token);
        var formData = createForm(email, password, token);
        return fetch("https://real-state-admin.herokuapp.com/api/login", {
        method: "POST",
        body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        // set cur user in redux global state
        })
        .catch((error) => console.log(error));
       }




    function handleSubmit(e){
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((cred) => {
            console.log(cred);
            auth.currentUser
            .getIdToken()
            .then((token) => fetchForm(email, password, token));
        });
    
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Log in</h3>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={({target}) => setEmail(target.value)} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={({target}) => setPassword(target.value)}/>
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
    )
}

export default Login