import React, { useState } from "react";
import { login } from "../Utils/API";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "../css/login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);
    const body = { username, password };
    login(body)
      .then((response) => {
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate("/user");
        }, 1000);
      })
      .catch((error) => {
        setLoading(false);
        const message = error.response.data;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: message,
        });
      });
  };

  return (
    <div className="theme">
      <div className="card">
        <div className="card-body p-5">
          <h5 className="card-title text-center">Silahkan Login untuk Masuk ke Akun Anda</h5>
          <div className="p-3">
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" required onChange={handleUsername} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required onChange={handlePassword} />
              </Form.Group>
              <div className="my-5">
                <Button className="w-100" variant="primary" type="submit">
                  {loading ? (
                    <div className="d-flex gap-2 justify-content-center align-items-center">
                      <div className="spinner-border spinner-border-sm text-white" role="status"></div>
                      <div>Loading . . .</div>
                    </div>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </Form>
          </div>

          <div className="text-center">
            <p>
              Dont Have an Account ? <Link to="/register">Register Here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
