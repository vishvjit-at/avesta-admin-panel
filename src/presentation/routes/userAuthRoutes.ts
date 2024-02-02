import { Router } from "express";
import { UserAuthenticationController } from "../controllers/userAuthenticationController";
import { VerifyOtpController } from "../controllers/verifyOtpController";
import { ReSendEmailOtpController } from "../controllers/reSendEmailOtpController";
import { createValidator } from "express-joi-validation";
import UserValidation from "../validation/user.validation";

const validator = createValidator({ passError: true });

const router = Router();

router.post("/send/otp", validator.body(UserValidation.authenticateUser), UserAuthenticationController.send);
router.post("/verify/otp", VerifyOtpController.verify);
router.post("/resend/otp", ReSendEmailOtpController.send);

export { router as Router };
