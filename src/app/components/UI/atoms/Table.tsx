import React from 'react'

interface TableProps {
  tableHead: Array<string>
  tableData: any
}

const Table: React.FC<TableProps> = ({ tableHead, tableData }): JSX.Element => {
  const tableHeading = (
    <tr>
      <th></th>
      {tableHead?.map((h, i) => (
        <th key={i}>{h}</th>
      ))}
    </tr>
  )
  const tableBody = (
    <>
      {tableData &&
        tableData?.map((d: any, i: number) => (
          <tr key={i}>
            {tableHead?.map((h, di: number) => (
              <td key={di}>{h[d]}</td>
            ))}
          </tr>
        ))}
    </>
  )
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>{tableHeading}</thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  )
}

export default Table
