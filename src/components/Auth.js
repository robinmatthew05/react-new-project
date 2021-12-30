import React, { Component } from 'react';

import {
    Redirect, Route, withRouter, useHistory
} from "react-router-dom";


import loginPicture from './logo/loginpicture.svg';
import companyLogo from './logo/loginLogo.png';
import hidePassword from './logo/hides_showPassword.svg';
import swal from 'sweetalert';



class Auth extends Component {

    login() {
        // console.warn("state", this.state)
        // fetch('http://xingwei-motors-ws.ml/api/auth', {
        //     method: "POST",
        //     headers: {
        //         "Accept": "applcation/json",
        //         "Content-Type": "applcation/json",
        //     },
        //     body: JSON.stringify(this.state)
        // }).then((result) => {
        //     result.json().then((resp) => {
        //         if (resp.data.message == "Invalid Credentials") {
        //             swal("Error", "Inalid username or password", "error");
        //         }
        //         else {
        //             console.log(resp.data.token);
        //             localStorage.setItem("auth", JSON.stringify(resp.data.token));
        //             window.location.reload(false);
        //            // history.push('/product');

        //         }
        //     })
        // })
    }

    render() {

        // var auth = JSON.parse(localStorage.getItem('auth'))


        return (
            <div>
                {
                    // auth ? <Redirect to="/product" /> : null
                }
                <div>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
    
                    <div class="LoginBackground">

                        <img id="Logo" value="1" src={companyLogo} title="Yes" />
                            <div id="completarcampos">
                                <div class="container">
                                    <label for="email">Email Address</label><br/>
                                    <input type="text" placeholder="Email Address"
                                    onChange={(e) => { this.setState({ email: e.target.value }) }}
                                    id="txtusername" required />
                                </div>

                                <div class="container">
                                    <label id="passwordLabel" for="password">Password</label><br/>
                                    <input type="password" placeholder="Password" 
                                    onChange={(e) => { this.setState({ password: e.target.value }) }}
                                    id="txtpassword" required />
                                    <span class="p-viewer2">
                                        <i class="fa fa-eye" aria-hidden="true" id="togglePassword">                     </i>
                                    </span>
                                <div/>
                            </div>  
                        </div>
                        <button type="button" onClick={() => this.login()} id="btnlogin">Login</button>

                    </div>

                </div>
            </div>

        );
    }
}

export default Auth;