import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
});

const token = sessionStorage.getItem("token");

export const config = {
  headers: {
    Authorization: token,
  },
};
