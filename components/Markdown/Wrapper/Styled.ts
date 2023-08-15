import { styled } from "goober";

const StyledWrapper = styled("div")`
  font-size: var(--font-size-md);
  /* font-weight: 300; */

  code {
    font-family: monospace !important;
  }

  a {
    color: var(--color-brand-primary-main);
    :hover {
      color: var(--color-brand-primary-hover);
    }
  }

  table code {
    background: var(--color-brand-primary-light);
    padding: 2px 4px;
    border-radius: 4px;
    color: var(--color-bg-tertiary-main);
    font-weight: bold;
  }

  ul,
  ol {
    margin-bottom: 1rem;
    margin-left: 1rem;
    ul,
    ol {
      margin-left: 2rem;
      margin-bottom: 0.5rem;
    }
  }

  blockquote {
    background: var(--color-bg-secondary-main);
    border-left: 10px solid var(--color-border-light-main);
    margin: 1.5em 0 1.5rem 1rem;
    padding: 1rem;
  }

  blockquote p {
    display: inline;
  }

  kbd {
    font-family: monospace;
    background-color: var(--color-bg-tertiary-main);
    border-radius: var(--curve-xsm);
    border: 1px solid var(--color-border-light-main);
    box-shadow: var(--shadow-sm);
    padding: 0 var(--spacing-1);
  }

  /* for adding small text as p.s. */
  h5 {
    font-weight: 100;
  }

  /* Table Styles */
  table {
    width: max-content;
    margin-bottom: 0.5rem;
    color: var(--color-text-secondary-main);
    background-color: var(--color-bg-secondary-main);

    /* .table-bordered */
    border: 1px solid var(--color-border-dark-main);
  }

  table th,
  table td {
    padding: 0.75rem;
    /* .table-bordered th, .table-bordered td */
    border: 1px solid var(--color-border-dark-main);
  }

  table td {
    border-top: 1px solid var(--color-border-dark-main);
  }

  table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid var(--color-border-dark-main);
  }

  /* table-bordered */
  table thead th,
  table thead td {
    border-bottom-width: 2px;
  }

  table tbody + tbody {
    border-top: 2px solid var(--color-border-dark-main);
  }

  /* table-striped  */
  tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }

  /* Prism Tomorrow Theme */
  code[class*="language-"],
  pre[class*="language-"] {
    color: #ccc;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #2d2d2d;
  }
  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }
  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999;
  }
  .token.punctuation {
    color: #ccc;
  }
  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: #e2777a;
  }
  .token.function-name {
    color: #6196cc;
  }
  .token.boolean,
  .token.number,
  .token.function {
    color: #f08d49;
  }
  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: #f8c555;
  }
  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #cc99cd;
  }
  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #7ec699;
  }
  .token.operator,
  .token.entity,
  .token.url {
    color: #67cdcc;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .token.inserted {
    color: green;
  }
`;

export default StyledWrapper;
