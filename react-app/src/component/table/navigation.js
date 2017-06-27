import React from 'react';

const isDisabled = (total, amountPerPage, pageNumber, operation) => {
  return (pageNumber + operation) < 1 ||
    Math.ceil(total / amountPerPage) < (pageNumber + operation);
};

const Navigation = ({
  amountPerPage,
  total,
  pageNumber,
  page
}) => <nav className="pagination">
  <a
    className="pagination-previous"
    title="This is the first page"
    disabled={isDisabled(total, amountPerPage, pageNumber, -1)}
    onClick={() => !isDisabled(total, amountPerPage, pageNumber, -1) && page(pageNumber - 1)}
  >
    Previous
  </a>
  <a
    className="pagination-next"
    disabled={isDisabled(total, amountPerPage, pageNumber, 1)}
    onClick={() => !isDisabled(total, amountPerPage, pageNumber, 1) && page(pageNumber + 1)}
  >Next page</a>
  <ul className="pagination-list">
    {
      new Array(Math.ceil(total / amountPerPage))
        .fill(1)
        .map((t, i) =>
          <li key={i}>
            <a className={
              pageNumber === (i + 1) ?
              'pagination-link is-current' :
              'pagination-link'
            }
            onClick={() => page(i + 1)}
            >{i + 1}</a>
          </li>
        )
    }
  </ul>
</nav>;

export default Navigation;