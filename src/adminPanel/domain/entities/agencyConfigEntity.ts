export class AgencyConfigEntity {
  constructor(private agency: { name: string; email: string; id?: number; config: string }) {}

  getId(): number | undefined {
    return this.agency.id;
  }

  getName(): string {
    return this.agency.name;
  }

  getEmail(): string {
    return this.agency.email;
  }

  getConfig(): string {
    return this.agency.config;
  }

  setId(id: number) {
    this.agency.id = id;
  }

  setName(name: string) {
    this.agency.name = name;
  }

  setEmail(email: string) {
    this.agency.email = email;
  }

  setPropertyCountPerSuburb(config: string) {
    this.agency.config = config;
  }
}
