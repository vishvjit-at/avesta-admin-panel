export class FeatureFlagEntity {
  constructor(private key: string, private projectId: number, private id?: number) {}

  getKey(): string {
    return this.key;
  }
}
