import React from 'react'
import Row from './Row'

function Table({ data, columns, actions, topAction, title }) {
    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div>
                <div className='flex items-center justify-between'>
                    <h2 className="text-2xl font-semibold leading-tight">{title}</h2>
                    <>{topAction && <button onClick={()=>topAction.onClick()} className='btn btn-primary btn-sm'>
                        {topAction.name}
                    </button>}</>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div
                        className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                    >
                        <table className="min-w-full leading-normal overflow-auto">
                            <thead>
                                <tr>
                                    {
                                        columns.map((column) => (
                                            <th
                                                key={column.value}
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                {column.heading}
                                            </th>
                                        ))
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {/* ***The number of row of the table is the number of element in the array of data (length)*** */}
                                {
                                    data.map(rowData => (
                                        <Row
                                            key={rowData.email}
                                            rowData={rowData}
                                            columns={columns}
                                            actions={actions}
                                        />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table