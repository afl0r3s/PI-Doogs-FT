import React from 'react'
import { Link } from 'react-router-dom'
import './landing.css'

export default function Landing() {
    return (
        <div className="main">
            <div className="content">
                <h1>Dog Mania</h1>
                <div className="text">The place for Dog lovers...</div>
                <Link to={'/home'}>
                    <button className="button">Start &#187; </button>
                </Link>
                <div className="develop">"Soy Henry" P.I. App<br/>Developed by Alejandro Flores</div>
            </div>
        </div>
    )
}
