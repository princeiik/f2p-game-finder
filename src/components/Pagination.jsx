import React from 'react'

function Pagination({previousPage, nextPage, currentPage, totalPages}) {
    
    return (
        <div className='flex justify-center py-4'>
            {/* Previous button */}
            <button
              onClick={previousPage}
              disabled={currentPage === 1}
              className='select-none rounded-lg bg-purple-600 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all enabled:hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 enabled:hover:shadow-lg enabled:hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:bg-gray-500'
            >
              Previous
            </button>
            <span className='mx-2 px-4 py-2 text-slate-100'>{currentPage} of {totalPages}</span>
            {/* Next button */}
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className='select-none rounded-lg bg-purple-600 py-2 px-7 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all enabled:hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 enabled:hover:shadow-lg enabled:hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:opacity-50 disabled:bg-gray-500'
            >
              Next
            </button>
        </div>
    )
}

export default Pagination