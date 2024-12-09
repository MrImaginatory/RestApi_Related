import Router from "express";
import { aggregate, getData, searchData } from "../controller/feature.controller.js";

const featureRouter = Router();

app.use("/getData").get(getData);
app.use("/search").get(searchData);
app.use("/aggregate").get(aggregate)

export default featureRouter;