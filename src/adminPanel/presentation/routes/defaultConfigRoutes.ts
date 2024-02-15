import express from "express";
const Router = express.Router();
import { createValidator } from "express-joi-validation";
import  UpdateDefaultConfig   from "../validation/defaultConfigValidation"

const validator = createValidator({ passError:true});
import { DefaultConfigController } from "../controllers/dafaultConfigController";
Router.get("/",DefaultConfigController.getDefaultConfig)
Router.post("/",validator.body(UpdateDefaultConfig.updateDefaultConfig),DefaultConfigController.updateDefaultConfig)
export {Router}