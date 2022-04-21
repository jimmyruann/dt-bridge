import { AccountOverviewSummary, LicenseSummary } from './types';

export type HandleReturnType = { key: string; value: string | null }[];

export const handleAccountOverviewSummary = (
  accountSummary?: AccountOverviewSummary
): HandleReturnType => {
  if (!accountSummary) return [];
  return [
    {
      key: accountSummary.accountOwner.label,
      value: accountSummary.accountOwner.value,
    },
    {
      key: accountSummary.dynatraceOneCsm.label,
      value: accountSummary.dynatraceOneCsm.value,
    },
    {
      key: accountSummary.dynatraceOneSquad.label,
      value: accountSummary.dynatraceOneSquad.value || null,
    },
    {
      key: accountSummary.geo.label,
      value: accountSummary.geo.value,
    },
    {
      key: accountSummary.productSpecialist.label,
      value: accountSummary.productSpecialist.value,
    },
    {
      key: accountSummary.salesRegion.label,
      value: accountSummary.salesRegion.value,
    },
    {
      key: accountSummary.supportExpiration.label,
      value: accountSummary.supportExpiration.value
        ? accountSummary.supportExpiration.value.toString()
        : null,
    },
    {
      key: accountSummary.supportType.label,
      value: accountSummary.supportType.value,
    },
  ];
};

export const handleLicenseSummary = (
  healthSummary?: LicenseSummary
): HandleReturnType => {
  console.log(healthSummary);
  if (!healthSummary) return [];

  return healthSummary.measurements.map((measurement) => ({
    key: measurement.title,
    value: `${measurement.quota.value} / ${measurement.quota.limit}`,
  }));
};
