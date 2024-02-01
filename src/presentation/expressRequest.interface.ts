import { ValidatedRequestSchema, ContainerTypes, ValidatedRequest } from "express-joi-validation";

export interface IBodyValidationRequestSchema<T> extends ValidatedRequestSchema {
  [ContainerTypes.Body]: T;
}

export interface IBodyValidatedRequest<T> extends ValidatedRequest<IBodyValidationRequestSchema<T>> {}
