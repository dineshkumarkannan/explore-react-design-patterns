import React from 'react'

const Error = ({ error, onRetry }) => {
    return (
        <div className='border-4 border-gray-200 p-2 rounded'>
            <p className='text-xl text-red-300'>{error.message}</p>
            <button onClick={onRetry}
                className='px-2 py-1 rounded bg-amber-200 text-black cursor-pointer'>
                Retry
            </button>
        </div>
    )
}

export default Error