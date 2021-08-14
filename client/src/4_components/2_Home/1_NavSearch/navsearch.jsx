import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../4_Search/search'
import { useDispatch } from 'react-redux'
import { getBreeds } from '../../../1_actions';
import './navsearch.css'

export default function Navsearch() {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getBreeds());
    }


    return (
        <nav className="navSearch">
            <span>Logo de la Aplicacion</span>
            <Search />
            <Link to={'/home'}>
                <button  onClick={(e)=> handleClick(e)}>Home</button>
            </Link>
            <Link to={'/add'}>
                <button>Create Breed</button>
            </Link>
        </nav>
    )
}
