import Router from "express";
import { deleteUser, searchData, updateUser } from "../controller/crud.controller.js";

const crudRoute = Router();

crudRoute.route("/updateData/:id").post(updateUser);
crudRoute.route("/deleteData/:id").post(deleteUser);
crudRoute.route("/searchData/:id").get(searchData);
crudRoute.route("/searchData/").get(searchData);

export default crudRoute;