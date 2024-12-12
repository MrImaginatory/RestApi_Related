import Router from "express";
import { nodeMailer } from "../controller/email.controller.js";
import upload from "../middlewares/multer.middleware.js";

const emailRoute = Router();

emailRoute.route('/sendEmail').post(upload.single('image'),nodeMailer);

export default emailRoute;