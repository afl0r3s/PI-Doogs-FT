import React from 'react'
import './Pagination.css'

export default function Pagination({cardsPerPage, totalCards, paginate}) {
    const pageNumbers = [];

    for (let i = 1; i < Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i)
        
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(e => (
                    <li key={e} className="pageItem">
                        <a onClick={() => paginate(e)} href="/home" className="pageLink">{e}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
