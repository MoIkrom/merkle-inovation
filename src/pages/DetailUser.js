/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { detailUser } from "../Utils/API";
import { Card, Button } from "react-bootstrap";
import "../css/login.css";
import { Link } from "react-router-dom";

function DetailUser({ route }) {
  const url = window.location.pathname;
  const id = url.substring(url.lastIndexOf("/") + 1);

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [zipcode, setZipCode] = useState("");

  const getDetailUser = () => {
    setLoading(true);
    detailUser(id)
      .then((response) => {
        setUser(response.data);
        setFirstName(response.data.name.firstname);
        setLastName(response.data.name.lastname);
        setCity(response.data.address.city);
        setNumber(response.data.address.number);
        setZipCode(response.data.address.zipcode);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getDetailUser();
  }, []);
  return (
    <div>
      <div className="theme">
        <div className="w-75 my-5">
          <Card>
            <h3 className="text-center mt-3">Detail Users</h3>
            <div className="d-flex gap-3 flex-column my-3">
              {loading ? (
                <div className="pb-5 px-5 d-flex justify-content-center align-items-center ">
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              ) : (
                <div className="pb-5 px-5">
                  <Card>
                    <Card.Header>Username : {user.username}</Card.Header>
                    <Card.Body>
                      <Card.Title>ID :&nbsp; {user.id}</Card.Title>
                      <Card.Text className="m-0">
                        <b>Name :</b> &nbsp;
                        {`${firstName} ${lastName}`}
                      </Card.Text>
                      <Card.Text className="m-0">
                        <b>Email :</b> &nbsp;
                        {user.email}
                      </Card.Text>
                      <Card.Text className="m-0">
                        <b>Phone Number :</b> &nbsp;
                        {user.phone}
                      </Card.Text>
                      <Card.Text>
                        <b>Address : </b>&nbsp; {`${city} , No: ${number} , ${zipcode} `}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              )}
              {loading ? (
                ""
              ) : (
                <div className="d-flex justify-content-between mx-5 mb-4">
                  <Link to={`/edit-user/${user.id}`}>
                    <Button variant="success">Edit</Button>
                  </Link>
                  <Link to={`/user`}>
                    <Button variant="secondary">Kembali</Button>
                  </Link>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DetailUser;
