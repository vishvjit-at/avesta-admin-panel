import express from "express";
import { AuthMiddleware } from "../middleware/authMiddleware";
const Router = express.Router();

// this is only for auth middleware testing purpose

Router.post("/", AuthMiddleware.authenticateUser, (req, res, next) => {
  res.send("you are successfully authenticated!!!");
});

export { Router };
