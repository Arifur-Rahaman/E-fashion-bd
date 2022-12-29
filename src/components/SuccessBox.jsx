function SuccessBox({message}) {
    return (
      <div className='container'>
        <div className='p-4 bg-green-50 border border-1'>
          <p className='text-lg font-semibold text-green-600'>{message}</p>
        </div>
      </div>
    )
  }
export default SuccessBox