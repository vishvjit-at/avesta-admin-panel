import { NextFunction, Request, Response } from "express";
import { UserAuthorization } from "../../gateways/userAuthorization";
import { IUserAuthorizationDto } from "../../domain/interfaces/dtos/userDto";
import { IBodyValidatedRequest } from "../interface/expressRequest.interface";

export class AuthorizationMiddleware {
  static async authenticateUser(req: IBodyValidatedRequest<IUserAuthorizationDto>, res: Response, next: NextFunction) {
    try {
      const userAuthorization = new UserAuthorization();

      const isUserValid = await userAuthorization.authorize(req.query);

      if (!isUserValid) {
        res.status(401).send({ success: false, message: "sorry!, you are unauthorized!" });
        return;
      } else {
        next();
      }
    } catch (error) {
      res.status(500).send({ success: false, message: "Internal server error" });
    }
  }
}
