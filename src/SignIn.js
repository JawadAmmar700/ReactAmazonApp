import React, { useState as state, useEffect } from 'react';
import { useHistory as History } from "react-router-dom";
import './SignIn.css'
import { auth } from './firebase'
import { StateValue } from './StateProvider'
function signIn() {
    const [{ basket }, dispatch] = StateValue();
    const [email, setEmail] = state('')
    const [pass, setPass] = state('')
    const history = History();

    const createUser = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, pass)
            .then((auth) => {
                if (auth) {


                    history.push("/")
                }

            })
            .catch(error => alert(error.message))
        setEmail('')
        setPass('')
    }
    const signIn = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, pass)
            .then((auth) => {
                if (auth) {


                    history.push("/")
                }


            })
            .catch(error => alert(error.message))
    }
    return (
        <>
            <img id="loginlogo" src="https://www.amazon.com/ref=ap_frn_logo" alt="" />
            <div className="loginContainer">
                <p id="SignIN">Sign-In</p>
                <form>
                    <p id="email">Email</p>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <p id="pass">Password</p>
                    <input type="text" value={pass} onChange={e => setPass(e.target.value)} />
                    <button className="SignInBn" onClick={signIn}>Sign In</button>
                    <h5>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</h5>
                    <button className="CreateBn" onClick={createUser}>Create your amazon account</button>

                </form>


            </div>
        </>
    )
}

export default signIn