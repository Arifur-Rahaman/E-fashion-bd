const CellData = ({ column, rowData, actions}) => {

    //If the column of a particular table is action then return button or buttons 
    if (column.value === 'actions') {
        return (
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {
                    actions.map(action => (
                        <button
                            key={action.name}
                            onClick={() => action.onClick(rowData._id)}
                            className='btn btn-primary btn-xs'
                            >
                            {action.name}
                        </button>
                    ))
                }
            </td>)
    }

    if (column.value === "createdAt") {
        return <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 text-xl whitespace-no-wrap">
                {rowData[column.value].slice(0, 10)}
            </p>
        </td>
    }

    //If the value of cell is Boolean then show Yes for true and No for false
    if (typeof (rowData[column.value]) === "boolean") {
        return <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 text-xl whitespace-no-wrap">
                {rowData[column.value] ? 'Yes' : 'No'}
            </p>
        </td>
    }
    
    return (
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 text-xl whitespace-no-wrap">
                {rowData[column.value]}
            </p>
        </td>)

}

export default CellData