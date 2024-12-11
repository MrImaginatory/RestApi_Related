import { fetchAxiosData , fetchUserData, fetchUserId } from "../controller/axiosFetch.controller.js";
import Router from  "express";

const axiosRoute = Router();

axiosRoute.route('/fetchData').get(fetchAxiosData);
axiosRoute.route('/fetchUserId/:id').get(fetchUserId);
axiosRoute.route('/fetchUserData').get(fetchUserData);

export default axiosRoute;
