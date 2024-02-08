import Joi from "joi";

const schemas = {
  authenticateUser: Joi.object({
    email: Joi.string().email().required()
  }),
  verifyOtp: Joi.object({
    token: Joi.string().required(),
    otp: Joi.number().required()
  }),
  reSendOtp: Joi.object({
    token: Joi.string().required()
  })
};
export default schemas;
