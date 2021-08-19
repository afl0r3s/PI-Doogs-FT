import React from 'react'
import paginationStyles from './pagination.module.css'

export default function Pagination({ totalPages, paginateFunction }) {
    const pages = [...Array(totalPages).keys()].map(num => num+1);

    return (
        <>  
            {pages.map(num => (
                <button 
                    key={num}
                    onClick={() => paginateFunction(num)}
                    className={paginationStyles.buttonNum}
                > {num} </button>
            ))}
        </>
    )
}
