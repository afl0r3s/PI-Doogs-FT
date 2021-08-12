/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBreeds } from '../../1_actions';
import Pagination from './pagination';
import './home.css';

export default function Home() {
	var breedsArr = useSelector((state) => state.breeds);
	var loadState = useSelector((state) => state.loading);
	var totalPages = useSelector((state) => state.totalPages);
	const dispatch = useDispatch();
	//console.log('1', totalPages);

	//const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [cardPerPage] = useState(9);
	// console.log('3', breedsArr.length);
	
	useEffect(() => {
		dispatch(getBreeds()); 
	}, [dispatch]);
	
	
	//Datos para paginacion
	const indexOfLastCard = currentPage * cardPerPage;
	const idnexOfFirstCard = indexOfLastCard - cardPerPage;
	const currentCards = breedsArr.slice(idnexOfFirstCard, indexOfLastCard);

    const paginateFunction = num => {
		setCurrentPage(num);
	}

	return (
		<div>
			<h3>Dogs Mania Page..</h3>
			{loadState ? 
				<>
					<img width="230" src="./dog01.gif" alt="loading.."/>
				</> : 
				<>
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
					<Pagination totalPages={totalPages} paginateFunction={paginateFunction } />
				</>
			}
		</div> 
	);
}

