import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID VSxQHNUWldSa817w2fxWc4S9Vy5RD_omKu0ZFQz_zPY",
  },
});
