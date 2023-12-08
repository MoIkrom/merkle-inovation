/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { EditUser, detailUser } from "../Utils/API";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

function Edit() {
  const [user, setUser] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const url = window.location.pathname;
  const id = url.substring(url.lastIndexOf("/") + 1);

  const handleEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  const handleUsername = (e) => {
    setUser({ ...user, username: e.target.value });
  };

  const handlePhone = (e) => {
    setUser({ ...user, phone: e.target.value });
  };
  const handlePassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };
  const handleFirstName = (e) => {
    const updatedFirstName = e.target.value;
    setUser({
      ...user,
      name: {
        ...user.name,
        firstname: updatedFirstName,
      },
    });
    setFirstName(updatedFirstName);
  };
  const handleLastName = (e) => {
    const updatedLastName = e.target.value;

    setUser({
      ...user,
      name: {
        ...user.name,
        lastname: updatedLastName,
      },
    });
    setLastName(updatedLastName);
  };
  const handleCity = (e) => {
    const updatedCity = e.target.value;
    setUser({
      ...user,
      address: {
        ...user.address,
        city: updatedCity,
      },
    });
    setCity(updatedCity);
  };
  const handleStreet = (e) => {
    const updatedStreet = e.target.value;

    setUser({
      ...user,
      address: {
        ...user.address,
        street: updatedStreet,
      },
    });
    setStreet(updatedStreet);
  };
  const handleNumber = (e) => {
    const updatedNumber = e.target.value;
    setUser({
      ...user,
      address: {
        ...user.address,
        number: updatedNumber,
      },
    });
    setNumber(updatedNumber);
  };
  const handleZipCode = (e) => {
    const updatedZipcode = e.target.value;

    setUser({
      ...user,
      address: {
        ...user.address,
        zipcode: updatedZipcode,
      },
    });
    setZipCode(updatedZipcode);
  };

  const getDetailUser = () => {
    detailUser(id)
      .then((response) => {
        setUser(response.data);
        setFirstName(response.data.name.firstname);
        setLastName(response.data.name.lastname);
        setCity(response.data.address.city);
        setStreet(response.data.address.street);
        setNumber(response.data.address.number);
        setZipCode(response.data.address.zipcode);
        console.log(user);
      })
      .catch((error) => {});
  };

  const handleEdit = (e) => {
    setLoading(true);
    e.preventDefault();
    const body = { user, firstName, lastName, city, street, number, zipCode };
    EditUser(id, body)
      .then((response) => {
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Edit Data Success",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          navigate("/users");
        }, 1500);
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

  useEffect(() => {
    getDetailUser();
  }, []);

  return (
    <div className="theme">
      <div className="card my-5 w-50">
        <div className="card-body p-5">
          <h5 className="card-title text-center">Edit Akun ID : {user.id}</h5>
          <div className="pe-3 py-3">
     
              <Form onSubmit={handleEdit}>
                <div className="d-flex justify-content-between gap-3">
                  <Form.Group className="mb-3 col-6">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" onChange={handleEmail} value={user.email} />
                  </Form.Group>
                  <Form.Group className="mb-3 col-6">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" onChange={handleUsername} value={user.username} />
                  </Form.Group>
                </div>
                <div className="d-flex justify-content-between gap-3">
                  <Form.Group className="mb-3 col-6">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Phone Number" value={user.phone} onChange={handlePhone} />
                  </Form.Group>
                  <Form.Group className="mb-3 col-6">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={user.password} onChange={handlePassword} />
                  </Form.Group>
                </div>
                <div className="d-flex justify-content-between gap-3">
                  <Form.Group className="mb-3 col-6">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" value={firstName} onChange={handleFirstName} />
                  </Form.Group>
                  <Form.Group className="mb-3 col-6">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" value={lastName} onChange={handleLastName} />
                  </Form.Group>
                </div>
                <div className="d-flex justify-content-between gap-3">
                  <Form.Group className="mb-3 col-6">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter City" value={city} onChange={handleCity} />
                  </Form.Group>
                  <Form.Group className="mb-3 col-6">
                    <Form.Label>Street</Form.Label>
                    <Form.Control type="text" placeholder="Enter Street" value={street} onChange={handleStreet} />
                  </Form.Group>
                </div>
                <div className="d-flex justify-content-between gap-3">
                  <Form.Group className="mb-3 col-6">
                    <Form.Label>Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Number" value={number} onChange={handleNumber} />
                  </Form.Group>
                  <Form.Group className="mb-3 col-6">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" value={zipCode} onChange={handleZipCode} />
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

export default Edit;
