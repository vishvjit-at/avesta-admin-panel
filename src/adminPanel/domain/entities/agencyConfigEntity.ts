export class AgencyConfigEntity {
  constructor(private agency: { name?: string; email: string; id?: number; config: string; agencyId: number }) {}

  getId(): number | undefined {
    return this.agency.id;
  }

  getName(): string | undefined {
    return this.agency.name;
  }

  getEmail(): string {
    return this.agency.email;
  }

  getConfig(): string {
    return this.agency.config;
  }
  getAgencyId(): number {
    return this.agency.agencyId;
  }

  setId(id: number) {
    this.agency.id = id;
  }

  setAgencyId(agencyId: number) {
    this.agency.agencyId = agencyId;
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
