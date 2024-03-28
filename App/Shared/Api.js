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
  api.get(
    `/course-lists?filters[type][$eq]=${type}&populate[Topics][populate][0]=Contents&populate[image][populate][0]=image`
  );

// course progress
const setCourseProgress = (data) => api.post("/course-progresses", data);
const getCourseProgress = (uid, courseId) => {
  return api.get(
    `/course-progresses?filter[uid][$eq]=${uid}&filters[courseId][$eq]=${courseId}`
  );
};

export default {
  getSliders,
  getVideoCourse,
  getCourseList,
  setCourseProgress,
  getCourseProgress,
};
