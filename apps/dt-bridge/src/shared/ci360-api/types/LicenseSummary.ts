export interface LicenseSummary {
  currentContract: CurrentContract;
  contracts: Contract[];
  measurements: Measurement[];
  tags: string[];
}

export interface Contract {
  id: number;
  start: number;
  end: number;
  name: string;
}

export interface CurrentContract {
  id: number | string;
  name: string;
  end: number | null;
  type: string;
  daysRenewalPeriod: number | null;
  billLogAnalyticsAsDavisDataUnits: boolean;
  davisDataUnitsEnabled: boolean;
  start?: number;
}

export interface Measurement {
  total: Total;
  quota: Quota;
  overage: Overage;
  credits: Credit[];
  breakdown: Breakdown[];
  active: boolean;
  format: string;
  title: string;
  icon: string;
  color: null | string;
}

export interface Breakdown {
  value: number | null;
  limit: null;
  name: string;
  unlimited: boolean;
}

export interface Credit {
  value: number | null;
  limit: number | null;
  name: string;
  unlimited: boolean;
}

export interface Overage {
  name: string;
  value: number;
  limit: number | null;
  unlimited: boolean;
}

export interface Quota {
  name: string;
  value: number;
  limit: number;
  unlimited: boolean;
}

export interface Total {
  name: string;
  value: number;
  limit: number;
  unlimited: boolean;
}
