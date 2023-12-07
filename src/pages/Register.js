import React, { useState } from "react";
import { register } from "../Utils/API";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
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
    e.preventDefault();
    const body = { email, username, phone, password, firstName, lastName, city, street, number, zipCode };
    register(body)
      .then((response) => {
        console.log("Response:", response.data); // Tangani respons setelah permintaan berhasil
        // Lakukan sesuatu dengan data respons, misalnya penyimpanan token atau navigasi ke halaman lain
      })
      .catch((error) => {
        console.error("Error:", error); // Tangani error jika permintaan gagal
        // Lakukan penanganan error, misalnya menampilkan pesan kesalahan ke pengguna
      });
  };

  return (
    <div className="theme">
      <div className="card my-5 w-50">
        <div className="card-body p-5">
          <h5 className="card-title text-center">Silahkan Register Akun Anda</h5>
          <div className="pe-3 py-3">
            <Form onSubmit={handleRegister}>
              <div className="d-flex justify-content-between gap-3">
                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" onChange={handleEmail} />
                </Form.Group>
                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" onChange={handleUsername} />
                </Form.Group>
              </div>
              <div className="d-flex justify-content-between gap-3">
                <Form.Group className="mb-3 col-6" controlId="formBasicPassword">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="Phone Number" onChange={handlePhone} />
                </Form.Group>
                <Form.Group className="mb-3 col-6" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={handlePassword} />
                </Form.Group>
              </div>
              <div className="d-flex justify-content-between gap-3">
                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter First Name" onChange={handleFirstName} />
                </Form.Group>
                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Last Name" onChange={handleLastName} />
                </Form.Group>
              </div>
              <div className="d-flex justify-content-between gap-3">
                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="Enter City" onChange={handleCity} />
                </Form.Group>
                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                  <Form.Label>Street</Form.Label>
                  <Form.Control type="text" placeholder="Enter Street" onChange={handleStreet} />
                </Form.Group>
              </div>
              <div className="d-flex justify-content-between gap-3">
                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                  <Form.Label>Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter Number" onChange={handleNumber} />
                </Form.Group>
                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" onChange={handleZipCode} />
                </Form.Group>
              </div>
              <div className="d-flex justify-content-center mt-3">
                <Button className="w-50" variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>

          <div className="float-end mt-2">
            <p>
              Already Have an Account ? <Link to="/login">Login Here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
