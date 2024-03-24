import { create } from "apisauce";

import { API_BASE_URL, API_KEY } from "./Constants";

// define the api
const api = create({
  baseURL: API_BASE_URL,
  headers: {
    "X-API-KEY": API_KEY,
  },
});

// slider
const getSliders = () => api.get("/sliders?populate=*");

// video course
const getVideoCourse = () => api.get("/video-courses?populate=*");

// Course list
const getCourseList = (type) =>
  api.get(`/course-lists?filters[type][$eq]=${type}&populate=*`);

export default {
  getSliders,
  getVideoCourse,
  getCourseList,
};
