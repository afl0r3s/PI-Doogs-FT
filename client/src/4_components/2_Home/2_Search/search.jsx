import React from 'react'

export default function Search() {
    const handleInputSearch = (e) => {
        e.preventDefault();
    }

    const handleClick = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <input 
                type="search" 
                placeholder="write here the dog breed for search"
                className="imputSearch"
                onChange={e => handleInputSearch(e)}
            ></input>
            <button
                type="submit"
                value="search"
                className="buttonSearch"
                onChange={e => handleClick(e)}
            > Search </button>
        </div>
    )
}
