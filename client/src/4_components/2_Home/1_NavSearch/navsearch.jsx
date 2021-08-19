import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../4_Search/search'
import { useDispatch } from 'react-redux'
import { getBreeds } from '../../../1_actions';
import navSrchStyles from './navsearch.module.css'

export default function Navsearch() {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getBreeds());
    }

    return (
        <nav className={navSrchStyles.navNav}>
            <input type="checkbox" id="check" className={navSrchStyles.checkOpt}></input>
            <label htmlFor="check" className={navSrchStyles.checkBtn}> <i className="fa fa-bars" aria-hidden="true"></i> </label>
            <span className={navSrchStyles.navLogo}>Dog Mania App</span>
            <span className={navSrchStyles.navSearch}> <Search /> </span>
                <ul className={navSrchStyles.navMenu}>
                    <li className={navSrchStyles.navMenuItem}> <Link to={'/home'}> <span className={navSrchStyles.navMenuLink} onClick={(e)=> handleClick(e)}> <i className="fa fa-home"></i> Home</span> </Link> </li>
                    <li className={navSrchStyles.navMenuItem}> <Link to={'/about'}> <span className={navSrchStyles.navMenuLink} > <i className="fa fa-info"></i> About</span> </Link> </li>
                    <li className={navSrchStyles.navMenuItem}> <Link to={'/add'}> <span className={navSrchStyles.navMenuLink} > <i className="fa fa-paw"></i> Create</span> </Link> </li>
                </ul>
        </nav>
    )
}
