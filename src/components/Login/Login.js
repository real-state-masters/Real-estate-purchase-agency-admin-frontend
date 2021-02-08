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



    auth.signInWithEmailAndPassword(email, password).then((cred) => {
        console.log(cred);
        auth.currentUser
        .getIdToken()
        .then((token) => fetchForm(email, password, token));
    });

    return (
        <form>
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