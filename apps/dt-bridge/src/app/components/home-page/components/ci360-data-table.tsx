import { useQueries } from 'react-query';
import {
  getAccountOverviewSummary,
  getLicenseSummary,
  getHealthSummary,
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

  console.log(queries);

  return <div>{/* {type} {accountId} */}hi</div>;
};

export default Ci360DataTable;
