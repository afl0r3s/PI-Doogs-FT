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
            <div> <span className="appTitle">Dog Mania App</span> </div>
            <div> <Search /> </div>
            <div>
                <Link to={'/home'}>
                    <button className="navSearchHome" onClick={(e)=> handleClick(e)}>  Home</button>
                </Link>
                <Link to={'/add'}>
                    <button className="navSearchCreate"> Create Breed</button>
                </Link>
            </div>
        </nav>
    )
}
