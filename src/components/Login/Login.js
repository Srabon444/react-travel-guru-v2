import React from 'react';
import './Login.css';

const Login = () => {

    return (
        <div className="loginForm rounded">

            <form action="" className="">
                <div className="form-group">
                    <label for="Origin">Username or Email</label>
                    <input type="text" id="username" class="form-control bg-light" placeholder="username or email" />
                </div>
                <div className="form-group">
                    <label for="Destination">Password</label>
                    <input type="password" id="password" class="form-control bg-light" placeholder="Password" />
                </div>

                <div className="">
                    <div className="from-group d-flex justify-content-between ">
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                        </div>
                        <div>
                            <a href="#" className="text-warning">Forget Password</a>
                        </div>
                    </div>
                </div>

                <button className="btn btn-warning col-md-12">Login</button>

                <div className="form-group">
                    <p className="text-center">Don’t have an account? <a href="/registration" className="text-warning ">Create an account</a></p>
                </div>

                <hr />

                <p className="text-center">Or</p>

            </form>

            <div className="">
                <button className="btn btn-outline-primary col-md-12">Continue with Facebook</button>
                <br />
                <br />
                <button className="btn btn-outline-success col-md-12">Continue with Google</button>
            </div>


        </div>
    );
};

export default Login;
