import Joi from "joi";

const schemas = {
  authenticateUser: Joi.object({
    email: Joi.string().email().required()
  })
};
export default schemas;
