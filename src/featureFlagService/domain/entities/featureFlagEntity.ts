export class FeatureFlagEntity {
  constructor(private key: string, private isEnabled: boolean, private id?: number) {}
}
