import Joi from "joi";

const schemas = {
  updateDefaultConfig: Joi.object({
  json:Joi.string()
    ,bccEmail: Joi.string()
  })
};
export default schemas;