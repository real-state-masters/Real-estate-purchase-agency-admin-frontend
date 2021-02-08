import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from '../../Firebase/Firebase'

const SignUp = () => {
    const auth = firebase.auth();
     const db = firebase.firestore();
     // update firestore settings
     db.settings({timestampsInSnapshots:true});

     const signUpFetch = function fetchFormSignUp(formData) {
        return fetch("https://real-state-admin.herokuapp.com/api/register", {
        method: "POST",
        body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        })
        .catch((error) => console.log(error));
    }

    function createFormSignUp(name, email, /*password,*/ firebaseUID, token) {
        var formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        //formData.append("password", password);
        //formData.append("password_confirmation", password);
        formData.append("firebaseUID", firebaseUID);
        formData.append("token", token);
        return formData;
    }

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    //const signupForm = document.querySelector(".signup-form");

    function handleSubmit (e){
        e.preventDefault();

         auth.createUserWithEmailAndPassword(email, password)
         .then((cred) => {
             console.log(cred.user);
             // close the signup modal & reset form
             //const modal = document.querySelector("#modal-signup");
             //M.Modal.getInstance(modal).close();
             //signupForm.reset();
             return cred.user.uid;
         })
         .then((firebaseUID) => {
            auth.currentUser.getIdToken().then((token) => {
            console.log(token)
            let formData = createFormSignUp(name, email, /*password,*/ firebaseUID, token);
            signUpFetch(formData);
            });    
        });

    }


    return(
        <form onSubmit={handleSubmit}>
            <h3>Register</h3>

            <div className="form-group signup-form">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" value={name} onChange={({target}) =>setName(target.value)} />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={({target}) =>setEmail(target.value)}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={({target}) =>setPassword(target.value)}/>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">log in?</a>
            </p>
        </form>
    )
}

export default SignUp