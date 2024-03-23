import { create } from "apisauce";

import { API_BASE_URL, API_KEY } from "./Constants";

// define the api
const api = create({
  baseURL: API_BASE_URL,
  headers: {
    "X-API-KEY": API_KEY,
  },
});

const getSliders = () => api.get("/sliders?populate=*");

export default {
  getSliders,
};
