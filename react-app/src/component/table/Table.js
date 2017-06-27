import React from 'react';

const Table = ({
  labels: propLabels,
  children
}) => {
  const labels = propLabels.map((label, index) =>
    <th key={label + index}
    >
      <abbr title={label}>{label}</abbr>
    </th>
  );

  return <table className="table">
    <thead>
    <tr>
      {labels}
    </tr>
    </thead>
    <tfoot>
    <tr>
      {labels}
    </tr>
    </tfoot>
    <tbody>
      {children}
    </tbody>
  </table>
};

export default Table;
