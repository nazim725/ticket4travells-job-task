import React from "react";
import "./Login.css";
import logo from "../../images/blue-logo 1.png";
import google from "../../images/google.png";
import fb from "../../images/fb.jpg";

import { Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="login">
      <div className="logo">
        <img src={logo} alt="" />
        <p className="text-center">Explore the best tours .....Hurry up!!</p>
      </div>
      <Form className=" input m-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Email Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Password" />
        </Form.Group>
        <p className="text-end  ">
          <a className="text-decoration-none text-danger" href="">
            Forgot Password?
          </a>
        </p>
        <button className="button text-white">LOG IN</button>
        <div className="d-flex mt-3">
          <hr />
          <p className="mx-4">or</p>
          <hr />
        </div>

        <div className="social-logo">
          <img className="fb" src={fb} alt="" />
          <img className="google" src={google} alt="" />
        </div>

        <p className="signup mt-3">
          Don't have an Account?{" "}
          <a href="" className="fw-bold text-decoration-none">
            Sign Up
          </a>
        </p>
      </Form>
    </div>
  );
};

export default Login;
