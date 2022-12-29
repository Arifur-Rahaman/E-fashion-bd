import React from 'react'
function Loader() {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden  flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full animate-spin
                    border-4 border-solid border-primary border-t-transparent"></div>
            <h2 className="text-center text-xl font-semibold">Loading...</h2>
            <p className="w-1/3 text-center">This may take a few seconds, please don't close this page.</p>
        </div>
    )
}

export default Loader