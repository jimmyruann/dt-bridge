import { useState } from 'react';
import { useMutation } from 'react-query';
import { refreshOAuth } from '../../../shared/ci360-api';
import Ci360DataTable from './components/ci360-data-table';
import Ci360Form from './components/ci360-form';

export const HomePage = () => {
  const [ci360AccountProps, setCi360AccountProps] = useState<{
    type: string;
    accountId: string;
  } | null>(null);
  const [isCi360Authed, setIsCi360Authed] = useState(false);

  const refreshOAuthMutation = useMutation(() => refreshOAuth());

  const handleSubmit = async (values: { type: string; accountId: string }) => {
    // Check is logged in to ci360
    setCi360AccountProps(values);

    const mutationResult = await refreshOAuthMutation.mutateAsync();
    if (mutationResult.data && mutationResult.data.idTokenHint) {
      console.log('Refresh OAuth', mutationResult.data);
      setIsCi360Authed(true);
    }
  };

  return (
    <div>
      <Ci360Form handleSubmit={handleSubmit} />
      <br />
      {isCi360Authed && ci360AccountProps && (
        <Ci360DataTable {...ci360AccountProps} />
      )}
    </div>
  );
};

export default HomePage;
