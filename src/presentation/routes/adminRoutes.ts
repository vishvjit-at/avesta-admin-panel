import express from "express";
import { AdminController } from "../controllers/adminController";
const Router = express.Router();

const IAdminController = new AdminController();

Router.post("/login", IAdminController.createUser);

export { Router };
