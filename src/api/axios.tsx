import axios from "axios";

const instance = axios.create({
  baseURL: "https://learn.codeit.kr/api/color-surveys",
  withCredentials: true
});

export default instance;