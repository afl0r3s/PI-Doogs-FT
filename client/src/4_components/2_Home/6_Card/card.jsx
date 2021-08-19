import React from 'react'
import { Link } from 'react-router-dom'
import cardStyles from './card.module.css'

export default function Card({id, image, name, temperament}) {
    return (
        <Link to={`/detail/${id}`}>
            <div className={cardStyles.card}>
				<img src={image} alt={name} />
				<h4 className="breedName">	{name} </h4>
                <div className="breedTemnperaments">{temperament}</div>
			</div>
        </Link>
    )
}
