import express from "express";
import { SuburbController } from "../controllers/suburbController";
const Router=express.Router();
const controller=new SuburbController();
Router.get("/",controller.getAllSuburb)
Router.get("/:id",controller.getSuburbById)
Router.post("/", controller.createSuburb);
Router.delete("/:id",controller.deleteSuburbByID)
Router.put("/:id",controller.updateSuburbById)

export {Router}