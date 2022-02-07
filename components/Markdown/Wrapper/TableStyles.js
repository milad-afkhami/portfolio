import { css } from "styled-components";

export const TableStyles = css`
  table {
    width: max-content;
    margin-bottom: 0.5rem;
    color: var(--color-text-secondary);
    background-color: var(--color-bg-secondary);

    /* .table-bordered */
    border: 1px solid var(--color-border-dark);
  }

  table th,
  table td {
    padding: 0.75rem;
    /* .table-bordered th, .table-bordered td */
    border: 1px solid var(--color-border-dark);
  }

  table td {
    border-top: 1px solid var(--color-border-dark);
  }

  table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid var(--color-border-dark);
  }

  /* table-bordered */
  table thead th,
  table thead td {
    border-bottom-width: 2px;
  }

  table tbody + tbody {
    border-top: 2px solid var(--color-border-dark);
  }

  /* table-striped  */
  tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
