import { Card, CardHeader } from '@mui/material';

export const Book = ({ children, header }) => {
  return (
    <Card>
      <CardHeader title={header} />
    </Card>
  );
};
