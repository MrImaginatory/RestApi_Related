import express from "express";
import userRouter from "./routes/user.route.js";
import featureRouter from "./routes/feature.route.js";
import crudRoute from "./routes/crud.route.js";
import axiosRoute from "./routes/axiosFetch.route.js";

const app = express();

app.use(express.json());
app.use("/auth",userRouter);
app.use("/feature",featureRouter);
app.use("/crud",crudRoute);
app.use("/axiosData",axiosRoute)

export { app };