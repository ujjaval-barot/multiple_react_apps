import axios from "axios";
import store from "../configureStore";

const BASE_URL = "http://localhost:3030";

export const Axios = axios.create({
  baseURL: BASE_URL,
});

Axios.post(url, data);

export const config = (multipart) => {
  let headers = {
    "Content-Type": "application/json",
  };
  if (multipart) headers["Content-Type"] = "multipart/form-data";
  return { headers };
};
