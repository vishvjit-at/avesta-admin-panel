import { Router } from "express";
import { CreateJobController } from "../controllers/createJobController";
import { createValidator } from "express-joi-validation";
import JobValidation from "../validation/job.validation";

const validator = createValidator({ passError: true });

const router = Router();

router.post("/create", validator.body(JobValidation.createJob), CreateJobController.send);

export { router as Router };
