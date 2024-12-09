import Router from "express";
import { aggregate, getData, searchData, uploadImage } from "../controller/feature.controller.js";
import upload from "../middlewares/multer.middleware.js";

const featureRouter = Router();

featureRouter.route("/getData").get(getData);
featureRouter.route("/search").get(searchData);
featureRouter.route("/aggregate").get(aggregate);
featureRouter.route("/upload").post(upload.single('image'),uploadImage);

export default featureRouter;