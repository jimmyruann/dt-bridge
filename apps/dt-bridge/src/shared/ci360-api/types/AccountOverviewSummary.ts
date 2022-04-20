export interface AccountOverviewSummary {
  supportType: SupportType;
  supportExpiration: SupportExpiration;
  accountOwner: AccountOwner;
  productSpecialist: AccountOwner;
  dynatraceOneCsm: AccountOwner;
  geo: Geo;
  salesRegion: Geo;
  dynatraceOneSquad: DynatraceOneSquad;
}

export interface AccountOwner {
  label: string;
  value: string;
  email: string;
}

export interface DynatraceOneSquad {
  label: string;
  email: null;
  value?: string;
}

export interface Geo {
  label: string;
  value: string;
  email: null;
}

export interface SupportExpiration {
  label: string;
  value: number | null;
}

export interface SupportType {
  label: string;
  value: string;
}
