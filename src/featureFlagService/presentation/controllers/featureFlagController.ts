import { NextFunction, Request, Response } from "express";
import { FeatureFlag } from "../../gateways/featureFlag";

export class FeatureFlagController {
  public async getFeatureFlags(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const projectName = req.query.projectName as string;
      const envName = req.query.enviornmentName as string;
      const flags = await new FeatureFlag().getFeatureFlags(projectName, envName);
      res.json({ data: flags });
    } catch (error: any) {
      res.status(401).send(error.message);
    }
  }
}
