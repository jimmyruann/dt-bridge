import { AxiosRequestConfig } from 'axios';
import makeRequest from '../makeRequest';
import {
  RefreshOAuth,
  LicenseSummary,
  HealthSummary,
  AccountOverviewSummary,
} from './types';

interface CI360AccountProps {
  accountId: string;
  type: string;
}

const host = 'https://ci360.dynatrace.com';
const defaultApiConfig: AxiosRequestConfig = {
  method: 'GET',
  baseURL: `${host}/api`,
};

export const refreshOAuth = () => {
  return makeRequest<RefreshOAuth>({
    method: 'POST',
    baseURL: host,
    url: '/oauth/refresh',
  });
};

export const getLicenseSummary = ({
  accountId,
  type,
  contract,
}: CI360AccountProps & { contract?: number }) => {
  return makeRequest<LicenseSummary>({
    ...defaultApiConfig,
    url: `/account/license/summary/${accountId}`,
    params: {
      type,
      contract,
    },
  });
};

export const getHealthSummary = async ({
  accountId,
  type,
}: CI360AccountProps) => {
  return makeRequest<HealthSummary>({
    ...defaultApiConfig,
    url: `/account/health/summary/${accountId}`,
    params: { type },
  });
};

export const getAccountOverviewSummary = async ({
  accountId,
  type,
}: CI360AccountProps) => {
  return makeRequest<AccountOverviewSummary>({
    ...defaultApiConfig,
    url: `/account/overview/summary/${accountId}`,
    params: { type },
  });
};
