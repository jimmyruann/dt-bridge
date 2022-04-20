export interface HealthSummary {
  accountSnoozed: boolean;
  alerts: Alerts;
}

export interface Alerts {
  yellow: Red[];
  red: Red[];
  snoozed: any[];
}

export interface Red {
  label: string;
  metricTag: string;
}
