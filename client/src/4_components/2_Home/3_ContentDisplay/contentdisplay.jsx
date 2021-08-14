import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../pagination';
import Navfilter from '../2_NavFilter/navfilter';
import './contentdisplay.css';

export default function Contentdisplay() {
	//Acces to Redux States
	var breedsArr = useSelector((state) => state.breeds);
	var totalPages = useSelector((state) => state.totalPages);
	var breedsPerPage = useSelector((state) => state.breedsPerPage);
	var errorSearch = useSelector((state) => state.errorSearch);
	//Reac States
	const [currentPage, setCurrentPage] = useState(1);
	//For Pagination
	const indexOfLastCard = currentPage * breedsPerPage[0];
	const idnexOfFirstCard = indexOfLastCard - breedsPerPage[0];
	const currentCards = breedsArr.slice(idnexOfFirstCard, indexOfLastCard);
	const paginateFunction = (num) => {
		setCurrentPage(num);
	};
	function previosPage() {
		setCurrentPage((currentPage) => currentPage - 1);
	}
	function nextPage() {
		setCurrentPage((currentPage) => currentPage + 1);
	}

	return (
		<div>
			{errorSearch ? (
				<>
					<div className="cardContainer">
						<div key="0" className="card">
							<img width="230" src="./sad_dog.png" alt="error.." />
							<div className="breedName">
								No results found ...
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<Navfilter />
					<button onClick={() => previosPage()}> Back </button>
					<button onClick={() => nextPage()}> Next </button>
					<div className="cardContainer">
						{currentCards.map((e) => {
							return (
								<div key={e.id} className="card">
									<img src={e.image} alt={e.name} />
									<div className="breedName">
										{e.name} &nbsp; #{e.id}
									</div>
									<div className="breedTemnperaments">{e.temperament}</div>
								</div>
							);
						})}
					</div>
				</>
			)}
			<Pagination totalPages={totalPages} paginateFunction={paginateFunction} />
		</div>
	);
}
