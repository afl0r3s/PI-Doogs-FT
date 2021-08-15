import React from 'react'
import './pagination.css'

export default function Pagination({ totalPages, paginateFunction }) {
    const pages = [...Array(totalPages).keys()].map(num => num+1);

    return (
        <>
            {pages.map(num => (
                <button 
                    key={num}
                    onClick={() => paginateFunction(num)}
                    className="buttonNum"
                > {num} </button>
            ))}
        </>
    )
}
