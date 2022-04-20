import { Group, Select, InputWrapper, Input, Button } from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { z } from 'zod';

interface Ci360FormProps {
  handleSubmit: (values: { type: string; accountId: string }) => void;
}

const ci360FormSchema = z.object({
  type: z.string().min(1, 'Select an environment type'),
  accountId: z.string().min(1, 'Enter account ID'),
});

export const Ci360Form = ({ handleSubmit }: Ci360FormProps) => {
  const ci360Form = useForm({
    schema: zodResolver(ci360FormSchema),
    initialValues: {
      type: 'saas',
      accountId: '',
    },
  });

  return (
    <form onSubmit={ci360Form.onSubmit(handleSubmit)}>
      <Group direction="column" grow>
        <Select
          label="Environment Type"
          description={
            <>
              Usually can be find in the url
              https://ci360.dynatrace.com/account/<b>{`<env-type>`}</b>/12345
            </>
          }
          placeholder="Pick one"
          required
          data={[
            { value: 'saas', label: 'SaaS' },
            { value: 'managed', label: 'Managed' },
          ]}
          {...ci360Form.getInputProps('type')}
        />

        <InputWrapper
          required
          label="Account ID"
          description={
            <>
              Usually can be find in the url
              https://ci360.dynatrace.com/account/managed/<b>{`<id>`}</b>
            </>
          }
          error={ci360Form.getInputProps('accountId').error}
        >
          <Input
            placeholder="Account ID"
            {...ci360Form.getInputProps('accountId')}
          />
        </InputWrapper>

        <Button color="cyan" fullWidth type="submit">
          Grab Data
        </Button>
      </Group>
    </form>
  );
};

export default Ci360Form;
