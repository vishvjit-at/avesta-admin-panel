import express from "express";
import { UserAuthController } from "../controllers/userAuthController";
import { SendEmailOtpController } from "../controllers/sendEmailOtpController";
import { VerifyOtpController } from "../controllers/verifyOtpController";
import { ReSendEmailOtpController } from "../controllers/reSendEmailOtpController";
const Router = express.Router();

const userAuthController = new UserAuthController();
const sendOtpEmailController = new SendEmailOtpController();
const reSendOtpEmailController = new ReSendEmailOtpController();
const verifyOtpController = new VerifyOtpController();

Router.post("/login", userAuthController.userLogin);
Router.post("/send/otp", sendOtpEmailController.send);
Router.post("/verify/otp", verifyOtpController.verify);
Router.post("/resend/otp", reSendOtpEmailController.send);

export { Router };
