import PropTypes from 'prop-types';
import { Transaction } from './Transactions';
import { TableHeader, TableRow, TransactionTable } from './Transactions.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <TableRow key={transaction.id}>
            <Transaction transaction={transaction} />
          </TableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
