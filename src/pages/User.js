import React, { useState, useEffect } from "react";
import { allUser, deleteUser } from "../Utils/API";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../css/login.css";

function User(props) {
  //   const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  const getAllUser = () => {
    setLoading(true);
    allUser(limit)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  //   const getTotalUser = () => {
  //     totalUser()
  //       .then((res) => {
  //         setData(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  const openModal = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id)
          .then((response) => {
            Swal.fire({
              title: "Deleted!",
              text: `user with ID : ${id}  has been deleted.`,
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  //   let dataLength = data.length;
  //   let totalPage = Math.ceil(dataLength / limit);

  useEffect(() => {
    getAllUser();
    // getTotalUser();
    // setTotalPages(totalPage);
  }, []);

  //   const handlePaginationClick = (page) => {
  //     setCurrentPage(page);
  //     console.log(page);
  //   };

  //   let items = [];
  //   for (let number = currentPage; number <= totalPage; number++) {
  //     items.push(
  //       <Pagination.Item
  //         key={number}
  //         active={number === currentPage}
  //         //   onClick={() => handlePaginationClick(number)}
  //       >
  //         {number}
  //       </Pagination.Item>
  //     );
  //   }

  return (
    <div>
      <div className="theme">
        <div className="w-75 my-5">
          <Card>
            <h3 className="text-center mt-3">All Users</h3>

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
              <div>
                <div className="d-flex justify-content-end me-5">
                  <Link to={"/new-user"}>
                    <Button>Add User</Button>
                  </Link>
                </div>
                <div className="d-flex gap-3 flex-column my-3">
                  {user.map((item) => (
                    <div className="px-5" key={item.id}>
                      <Card>
                        <Card.Header>Username : {item.username}</Card.Header>
                        <Card.Body>
                          <Card.Title>
                            {" "}
                            <b>ID</b> :&nbsp; {item.id}
                          </Card.Title>
                          <Card.Text className="m-0">
                            <b>Name :</b> &nbsp;
                            {`${item.name.firstname} ${item.name.lastname}`}
                          </Card.Text>
                          <Card.Text className="m-0">
                            <b>Email :</b> &nbsp;
                            {item.email}
                          </Card.Text>
                          <Card.Text className="m-0">
                            <b>Phone Number :</b> &nbsp;
                            {item.phone}
                          </Card.Text>
                          <Card.Text>
                            <b>Address :</b> {`${item.address.city} , No: ${item.address.number} , ${item.address.street} , ${item.address.zipcode}`}
                          </Card.Text>
                          <div className="d-flex gap-3">
                            <Link to={`/detail-user/${item.id}`}>
                              <Button variant="primary">Detail User</Button>
                            </Link>
                            <Button variant="danger" onClick={() => openModal(item.id, item.username)}>
                              Delete User
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
                {/* <div className="d-flex justify-content-end me-5">
                  <Pagination size="sm">{items}</Pagination>
                </div> */}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default User;
