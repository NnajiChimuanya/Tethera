import axios from "axios";

const instance = axios.create({
  baseURL: "https://tethera-a.herokuapp.com/",
});

// "https://mono-backend-accessement.herokuapp.com/"

export default instance;
