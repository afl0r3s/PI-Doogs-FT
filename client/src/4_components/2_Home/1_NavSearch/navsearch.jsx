import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../2_Search/search'
import './navsearch.css'

export default function Navsearch() {
    return (
        <nav className="navSearch">
            <Link to={'/home'}>
                <button>Dog Mania</button>
            </Link>
            <Search />
            <Link to={'/add'}>
                <button>Create Breed</button>
            </Link>
        </nav>
    )
}
