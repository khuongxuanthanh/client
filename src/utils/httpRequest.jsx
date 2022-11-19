import axios from "axios";

const httpRequest = axios.create({
  baseUrl: "http://localhost:3000/api",
});

export default httpRequest;