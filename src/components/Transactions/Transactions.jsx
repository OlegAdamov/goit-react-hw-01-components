import { TableData } from './Transactions.styled';

export const Transaction = ({ transaction: { type, amount, currency } }) => {
  return (
    <>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </>
  );
};
