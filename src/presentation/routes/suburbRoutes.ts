import express from "express";
import { SuburbController } from "../controllers/suburbController";
const Router = express.Router();
import { createValidator } from "express-joi-validation";
import {schemas  } from "../validation/suburbValidation"

const validator = createValidator({ passError:true});



Router.post('/',validator.body(schemas.validateSuburb), SuburbController.createSuburb);
Router.put('/', SuburbController.updateSuburbById);
Router.get('/', SuburbController.getAllSuburb);
Router.get("/page",SuburbController.getSuburbsWithPagination)
Router.get('/:id', SuburbController.getSuburbById);
Router.delete('/:id', SuburbController.deleteSuburbById);


export { Router }