import express from "express";
import { AuthMiddleware } from "../middleware/authMiddleware";
import { AuthorizationMiddleware } from "../middleware/authorizationMiddleware";
const Router = express.Router();

// this is only for auth middleware testing purpose

Router.get(
  "/",
  AuthMiddleware.authenticateUser,
  async (req, res, next) => {
    req.query.permission = "suburb-get";
    await AuthorizationMiddleware.authenticateUser(req, res, next);
  },
  (req, res, next) => {
    res.send("you are successfully authenticated & authorized");
  }
);

export { Router };
