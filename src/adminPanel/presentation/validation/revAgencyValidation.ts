import Joi from "joi";

const schemas = {
  getAgency: Joi.object({
   agencyName:Joi.string().required()
  }),
  getAgentEmail:Joi.object({
    id:Joi.number().integer().min(100).required(),
  })

};
export default schemas;