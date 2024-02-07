import { ValidatedRequestSchema, ContainerTypes, ValidatedRequest } from "express-joi-validation";

export interface IBodyValidationRequestSchema<T> extends ValidatedRequestSchema {
  [ContainerTypes.Body]: T;
}

export interface IQueryValidationRequestSchema<T> extends ValidatedRequestSchema {
  [ContainerTypes.Query]: T;
}
export interface IParamsValidationRequestSchema<T> extends ValidatedRequestSchema {
  [ContainerTypes.Params]: T;
}


export interface IBodyValidatedRequest<T> extends ValidatedRequest<IBodyValidationRequestSchema<T>> {}

export interface IQueryValidatedRequest<T> extends ValidatedRequest<IQueryValidationRequestSchema<T>> {}

export interface IParamsValidatedRequest<T> extends ValidatedRequest<IParamsValidationRequestSchema<T>> {}