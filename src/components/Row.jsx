import React from 'react'
import CellData from './CellData'

function Row({ rowData, columns, actions}) {
    return (
        <tr>
            {
                //Number of cell in a particular row is the number of column in the table
                columns.map(column => (
                    <CellData
                        key={column.value}
                        column={column}
                        rowData={rowData}
                        actions={actions}
                    />
                ))
            }
        </tr>
    )
}
export default Row