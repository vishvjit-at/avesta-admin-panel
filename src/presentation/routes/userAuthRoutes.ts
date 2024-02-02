import { Router } from "express";
import { UserAuthController } from "../controllers/userAuthController";
import { SendEmailOtpController } from "../controllers/sendEmailOtpController";
import { VerifyOtpController } from "../controllers/verifyOtpController";
import { ReSendEmailOtpController } from "../controllers/reSendEmailOtpController";
const router = Router();

router.post("/login", UserAuthController.userLogin);
router.post("/send/otp", SendEmailOtpController.send);
router.post("/verify/otp", VerifyOtpController.verify);
router.post("/resend/otp", ReSendEmailOtpController.send);

export { router as Router };
