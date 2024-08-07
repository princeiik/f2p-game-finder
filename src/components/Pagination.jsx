import React from 'react'

function Pagination({previousPage, nextPage, currentPage, totalPages}) {
    
    return (
        <div className='flex justify-center py-4'>
            <button
              onClick={previousPage}
              disabled={currentPage === 1}
              className='mx-2 px-4 py-2 bg-gray-300 rounded disabled:opacity-50'
            >
              Previous
            </button>
            <span className='mx-2 px-4 py-2 text-slate-100'>{currentPage} of {totalPages}</span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className='mx-2 px-4 py-2 bg-gray-300 rounded disabled:opacity-50'
            >
              Next
            </button>
        </div>
    )
}

export default Pagination