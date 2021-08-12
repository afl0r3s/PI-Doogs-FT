/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBreeds } from '../../1_actions';
import Pagination from './Pagination';
import './index.css';

export default function Home() {
	var breedsArr = useSelector((state) => state.breeds);
	const dispatch = useDispatch();
	//console.log('1', breedsArr);

	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [cardPerPage] = useState(9);
	console.log('2', loading);

	useEffect(() => {
		setLoading(true);
		dispatch(getBreeds());
		setLoading(false);
	}, [dispatch]);

	//Datos para paginacion
	const indexOfLastCard = currentPage * cardPerPage;
	const idnexOfFirstCard = indexOfLastCard - cardPerPage;
	const currentCards = breedsArr.slice(idnexOfFirstCard, indexOfLastCard);

    const paginate = pageNumber => setCurrentPage(pageNumber);

	return (
		<div>
			<h3>soy la Home Page...</h3>
			<div className="cardContainer">
			{currentCards.map((e) => {
				return (
					<div key={e.id} className="card">
						<img src={e.image} alt={e.name} />
						<div className="breedName">{e.name} &nbsp; #{e.id}</div>
                        <div className="breedTemnperaments">{e.temperament}</div>
					</div>
				);
			})}
			</div>
            <Pagination 
                cardsPerPage={cardPerPage} 
                totalCards={breedsArr.length} 
                paginate={paginate} />
		</div>
	);
}
