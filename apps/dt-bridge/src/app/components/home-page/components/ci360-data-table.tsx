import { Paper, Table } from '@mantine/core';
import React from 'react';
import { useQueries } from 'react-query';
import {
  getAccountOverviewSummary,
  getLicenseSummary,
  getHealthSummary,
  handleAccountOverviewSummary,
  HandleReturnType,
  handleLicenseSummary,
} from '../../../../shared/ci360-api';

interface Ci360DataTableProps {
  type: string;
  accountId: string;
}

export const Ci360DataTable = (accountProps: Ci360DataTableProps) => {
  const queries = useQueries([
    {
      queryKey: ['getAccountOverviewSummary', accountProps],
      queryFn: async () => {
        const { data } = await getAccountOverviewSummary(accountProps);
        return data;
      },
    },
    {
      queryKey: ['getLicenseSummary', accountProps],
      queryFn: async () => {
        const { data } = await getLicenseSummary(accountProps);
        return data;
      },
    },
    {
      queryKey: ['getHealthSummary', accountProps],
      queryFn: async () => {
        const { data } = await getHealthSummary(accountProps);
        return data;
      },
    },
  ]);

  const isLoading = queries.some((query) => query.isLoading);
  const isError = queries.some((query) => query.isError);

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <>
        {queries.forEach((query) => {
          console.error(query.error, query.data);
        })}
        <div>There is an error</div>
      </>
    );

  const renderRows = (data: HandleReturnType, label: React.ReactNode) => {
    return (
      <>
        <tr>
          <td align="center" colSpan={2}>
            <b>{label}</b>
          </td>
        </tr>
        {data.map((each, i) => (
          <tr key={i}>
            <td>{each.key}</td>
            <td>{each.value || 'N/A'}</td>
          </tr>
        ))}
      </>
    );
  };

  console.log(queries);

  return (
    <Table highlightOnHover>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {renderRows(
          handleAccountOverviewSummary(queries[0].data),
          'Account Overview'
        )}
      </tbody>
    </Table>
  );
};

export default Ci360DataTable;
