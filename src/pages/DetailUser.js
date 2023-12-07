/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { detailUser } from "../Utils/API";
import { Card } from "react-bootstrap";
import "../css/login.css";

function DetailUser({ route }) {
  const url = window.location.pathname;
  const id = url.substring(url.lastIndexOf("/") + 1);

  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState("");

  const getDetailUser = () => {
    setLoading(true);
    detailUser(id)
      .then((response) => {
        setUser(response.data);
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
                      {/* <Card.Title>Name :&nbsp; {`${user.name.firstname} ${user.name.lastname}`}</Card.Title> */}
                      <Card.Text className="m-0">
                        <b>Email :</b> &nbsp;
                        {user.email}
                      </Card.Text>
                      <Card.Text className="m-0">
                        <b>Phone Number :</b> &nbsp;
                        {user.phone}
                      </Card.Text>
                      {/* <Card.Text>
                        <b>Address : </b>&nbsp; {`${user.address.city} , No: ${user.address.number} , ${user.address.street} , ${user.address.zipcode}`}
                      </Card.Text> */}
                    </Card.Body>
                  </Card>
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
