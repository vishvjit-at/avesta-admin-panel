import express from "express";
import { UserAuthController } from "../controllers/userAuthController";
const Router = express.Router();

const controller = new UserAuthController();

Router.post("/login", controller.createUser);

export { Router };
