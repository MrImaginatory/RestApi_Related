import Router from "express";
import { aggregate, getData, searchData } from "../controller/feature.controller.js";

const featureRouter = Router();

featureRouter.route("/getData").get(getData);
featureRouter.route("/search").get(searchData);
featureRouter.route("/aggregate").get(aggregate)

export default featureRouter;