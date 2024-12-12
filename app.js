import express from "express";
import userRouter from "./routes/user.route.js";
import featureRouter from "./routes/feature.route.js";
import crudRoute from "./routes/crud.route.js";
import axiosRoute from "./routes/axiosFetch.route.js";
import emailRoute from "./routes/email.route.js";
import couponRoute from "./routes/coupon.route.js";

const app = express();

app.use(express.json());
app.use("/auth",userRouter);
app.use("/feature",featureRouter);
app.use("/crud",crudRoute);
app.use("/axiosData",axiosRoute);
app.use("/email",emailRoute);
app.use("/shopping",couponRoute);

export { app };