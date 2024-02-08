import Joi from "joi";

const schemas = {
  createJob: Joi.object({
    runBy: Joi.number().required(),
    runType: Joi.string().required()
  })
};
export default schemas;
