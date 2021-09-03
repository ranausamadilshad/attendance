import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const config = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
};
