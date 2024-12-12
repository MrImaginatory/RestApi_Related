import Router from "express";
import { couponCodeCreation,couponValidate } from "../controller/discount.controller.js";

const couponRoute = Router();

couponRoute.route("/addCoupon").post(couponCodeCreation);
couponRoute.route("/validate").post(couponValidate);

export default couponRoute;