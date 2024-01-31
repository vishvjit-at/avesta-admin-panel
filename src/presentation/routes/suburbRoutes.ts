import express from "express";
import { SuburbController } from "../controllers/suburbController";
const Router = express.Router();

const suburbController = new SuburbController();

Router.post('/', suburbController.createSuburb);
Router.put('/', suburbController.updateSuburbById);
Router.get('/', suburbController.getAllSuburb);
Router.get('/:id', suburbController.getSuburbById);
Router.delete('/:id', suburbController.deleteSuburbById);


export { Router }