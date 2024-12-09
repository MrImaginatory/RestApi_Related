import express from "express";
import userRouter from "./routes/user.route.js";
import featureRouter from "./routes/feature.route.js";

const app = express();

app.use(express.json());
app.use("/auth",userRouter);
app.use("/feature",featureRouter);

export { app };