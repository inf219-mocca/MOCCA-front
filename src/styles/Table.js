import styled from "styled-components";

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  line-height: 1.4;
`;

export const TableHead = styled.thead`
  font-size: 22px;
  font-weight: bold;
`;

export const TableBody = styled.tbody`
  tr:nth-child(odd) {
    background: #eee;
  }

  tr:hover {
    background: #666666;
  }
`;

export const Td = styled.td``;

export const Tr = styled.tr``;
