import express from "express";
import { AgencyConfigController} from "../controllers/agencyConfigController";
const Router = express.Router();
import { createValidator } from "express-joi-validation";
import {schemas  } from "../validation/suburbValidation"

const validator = createValidator({ passError:true});



Router.post('/',AgencyConfigController.createAgencyConfig);
Router.put('/', AgencyConfigController.updateAgencyConfigById);
Router.get('/', AgencyConfigController.getAllAgencyConfig);

Router.get('/:id', AgencyConfigController.getAgencyConfigById);
Router.delete('/:id', AgencyConfigController.deleteAgencyConfigById);


export { Router }