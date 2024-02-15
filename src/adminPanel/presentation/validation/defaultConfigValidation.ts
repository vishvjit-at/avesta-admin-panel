import Joi from "joi";

const schemas = {
  updateDefaultConfig: Joi.object({
    probabilityPercentage: Joi.number().required(),
    propertyCountPerSuburb:Joi.number().required()
    ,bccEmail: Joi.string().required()
  })
};
export default schemas;