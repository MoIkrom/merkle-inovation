import axios from "axios";

const HOST = "https://fakestoreapi.com";

export const login = (body) => {
  const URL = `${HOST}/auth/login`;
  return axios.post(URL, body, {
    headers: {
      "Content-Type": "application/json", // Set header Content-Type ke application/json
    },
  });
};
export const register = (body) => {
  const URL = `${HOST}/users`;
  return axios.post(URL, body, {
    headers: {
      "Content-Type": "application/json", // Set header Content-Type ke application/json
    },
  });
};
export const addUser = (body) => {
  const URL = `${HOST}/users`;
  return axios.post(URL, body, {
    headers: {
      "Content-Type": "application/json", // Set header Content-Type ke application/json
    },
  });
};

export const totalUser = () => {
  const URL = `${HOST}/users`;
  return axios.get(URL, {
    headers: {
      "Content-Type": "application/json", // Set header Content-Type ke application/json
    },
  });
};
export const allUser = (limit) => {
  const URL = `${HOST}/users?limit=${limit}`;
  return axios.get(URL, {
    headers: {
      "Content-Type": "application/json", // Set header Content-Type ke application/json
    },
  });
};
export const detailUser = (id) => {
  const URL = `${HOST}/users/${id}`;
  return axios.get(URL, {
    headers: {
      "Content-Type": "application/json", // Set header Content-Type ke application/json
    },
  });
};
export const EditUser = (id, body) => {
  console.log(id);
  const URL = `${HOST}/users/${id}`;
  return axios.put(URL, body, {
    headers: {
      "Content-Type": "application/json", // Set header Content-Type ke application/json
    },
  });
};
export const deleteUser = (id) => {
  const URL = `${HOST}/users/${id}`;
  return axios.delete(URL, {
    headers: {
      "Content-Type": "application/json", // Set header Content-Type ke application/json
    },
  });
};
