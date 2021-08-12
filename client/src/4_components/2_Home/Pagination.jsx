import React from 'react'
import './Pagination.css'

export default function Pagination({ totalPages, paginateFunction }) {
    const pages = [...Array(totalPages).keys()].map(num => num+1);

    return (
        <div>
            {pages.map(num => (
                <button 
                    key={num}
                    onClick={() => paginateFunction(num)}
                > {num} </button>
            ))}
        </div>
    )
}
