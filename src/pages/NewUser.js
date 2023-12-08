import React, { useState } from "react";
import { register } from "../Utils/API";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "../css/login.css";

function NewUser() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleStreet = (e) => {
    setStreet(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleZipCode = (e) => {
    setZipCode(e.target.value);
  };

  const handleRegister = (e) => {
    setLoading(true)
    e.preventDefault();
    const body = { email, username, phone, password, firstName, lastName, city, street, number, zipCode };
    register(body)
      .then((response) => {
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Success Add New User with ID : ${response.data.id}`,
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate("/users");
        }, 2000);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  return (
    <div className="theme">
      <div className="card my-5 mx-3 w-md-50">
        <div className="card-body p-md-5">
          <h5 className="card-title text-center">Silahkan Register Akun Anda</h5>
          <div className="pe-xl-3 py-3">
            <Form onSubmit={handleRegister}>
              <div className="d-flex flex-wrap flex-sm-no-wrap justify-content-between justify-content-md-evenly gap-md-1 gap-xl-3">
                <Form.Group className="mb-3 col-12 col-md-5" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" required onChange={handleEmail} />
                </Form.Group>
                <Form.Group className="mb-3 col-12 col-md-5" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" required onChange={handleUsername} />
                </Form.Group>
              </div>
              <div className="d-flex flex-wrap flex-sm-no-wrap justify-content-between justify-content-md-evenly gap-md-1 gap-xl-3">
                {" "}
                <Form.Group className="mb-3 col-12 col-md-5" controlId="formBasicPassword">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="Phone Number" required onChange={handlePhone} />
                </Form.Group>
                <Form.Group className="mb-3 col-12 col-md-5" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" required onChange={handlePassword} />
                </Form.Group>
              </div>
              <div className="d-flex flex-wrap flex-sm-no-wrap justify-content-between justify-content-md-evenly gap-md-1 gap-xl-3">
                {" "}
                <Form.Group className="mb-3 col-12 col-md-5" controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter First Name" required onChange={handleFirstName} />
                </Form.Group>
                <Form.Group className="mb-3 col-12 col-md-5" controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Last Name" required onChange={handleLastName} />
                </Form.Group>
              </div>
              <div className="d-flex flex-wrap flex-sm-no-wrap justify-content-between justify-content-md-evenly gap-md-1 gap-xl-3">
                {" "}
                <Form.Group className="mb-3 col-12 col-md-5" controlId="formBasicEmail">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="Enter City" required onChange={handleCity} />
                </Form.Group>
                <Form.Group className="mb-3 col-12 col-md-5" controlId="formBasicEmail">
                  <Form.Label>Street</Form.Label>
                  <Form.Control type="text" placeholder="Enter Street" required onChange={handleStreet} />
                </Form.Group>
              </div>
              <div className="d-flex flex-wrap flex-sm-no-wrap justify-content-between justify-content-md-evenly gap-md-1 gap-xl-3">
                {" "}
                <Form.Group className="mb-3 col-12 col-md-5" controlId="formBasicEmail">
                  <Form.Label>Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter Number" required onChange={handleNumber} />
                </Form.Group>
                <Form.Group className="mb-3 col-12 col-md-5" controlId="formBasicEmail">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter Zip Code" required onChange={handleZipCode} />
                </Form.Group>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <Button className="w-50" variant="primary" type="submit">
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
        </div>
      </div>
    </div>
  );
}

export default NewUser;
