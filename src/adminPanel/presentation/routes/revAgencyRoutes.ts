import express from "express";
const Router = express.Router();
import { createValidator } from "express-joi-validation";
import  RevAgencyValidation   from "../validation/revAgencyValidation"

const validator = createValidator({ passError:true});
import { RevAgencyController } from "../controllers/revAgencyController";
Router.get("/agencyByName",validator.body(RevAgencyValidation.getAgency),RevAgencyController.getAgencyByName)
Router.get("/agentEmails",validator.body(RevAgencyValidation.getAgentEmail), RevAgencyController.getAgentsEmailByAgencyName)
export {Router}