import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'

export default function Card({id, image, name, temperament}) {
    return (
        <Link to={`/detail/${id}`}>
            <div className="card">
				<img src={image} alt={name} />
				<div className="breedName">
					{name}
                    <div className="breedTemnperaments">{temperament}</div>
				</div>
			</div>
        </Link>
    )
}
