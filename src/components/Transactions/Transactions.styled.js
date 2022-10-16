import styled from 'styled-components';

export const TransactionTable = styled.table`
  font-family: 'Cantarell', sans-serif;
  font-size: 16px;
  width: 100%;
`;

export const TableHeader = styled.th`
  padding: 8px;
  border: 1px solid ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.green};
`;

export const TableRow = styled.tr`
  background-color: ${p => p.theme.colors.seawave};
  &:nth-child(even) {
    background-color: ${p => p.theme.colors.magenta};
  }
`;

export const TableData = styled.td`
  padding: 8px;
  border: 1px solid ${p => p.theme.colors.black};
  text-align: center;
`;
