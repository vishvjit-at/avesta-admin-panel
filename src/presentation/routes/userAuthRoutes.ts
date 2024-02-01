import { Router } from "express";
import { UserAuthController } from "../controllers/userAuthController";
import { SendEmailOtpController } from "../controllers/sendEmailOtpController";
import { VerifyOtpController } from "../controllers/verifyOtpController";
import { ReSendEmailOtpController } from "../controllers/reSendEmailOtpController";
const router = Router();

const userAuthController = new UserAuthController();
const reSendOtpEmailController = new ReSendEmailOtpController();
const verifyOtpController = new VerifyOtpController();

router.post("/login", userAuthController.userLogin);
router.post("/send/otp", SendEmailOtpController.send);
router.post("/verify/otp", verifyOtpController.verify);
router.post("/resend/otp", reSendOtpEmailController.send);

export { router as Router };
