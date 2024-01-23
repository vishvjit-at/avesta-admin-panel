import express from "express";
import { AuthenticateAdminController } from "../controllers/adminController";
const Router = express.Router();

const IAdminController = new AuthenticateAdminController();

Router.post("/login", IAdminController.createUser);

export { Router };
