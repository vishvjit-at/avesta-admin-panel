import express from "express";
import { FeatureFlagController } from "../controllers/featureFlagController";
const Router = express.Router();

const controller = new FeatureFlagController();

Router.get("/", controller.getFeatureFlags);

export { Router };
