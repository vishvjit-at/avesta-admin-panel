import Joi from  "joi";
import { EStates } from "../../domain/useCases/suburb/createSuburb";
export  const schemas={
    validateSuburb:Joi.object({
    suburbName:Joi.string().required(),
    state:Joi.string().valid(...Object.values(EStates)).required(),
    postcode:Joi.number().required(),
    token:Joi.string().required()
   
})
}

