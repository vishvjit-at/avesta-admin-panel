import { NextFunction, Request, Response } from "express";
import { FeatureFlag } from "../../gateways/featureFlag";

export class FeatureFlagController {
  public async getFeatureFlags(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const env = req.query.enviornment as string;
      const flags = await new FeatureFlag().getFeatureFlags(env);
      res.json({ data: flags });
    } catch (error) {
      res.status(401).send();
    }
  }
}
