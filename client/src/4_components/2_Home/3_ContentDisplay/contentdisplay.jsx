import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../5_Pagination/pagination';
import Navfilter from '../2_NavFilter/navfilter';
import Card from '../6_Card/card';
import ErrorSearch from '../7_ErrorSearch/errorSearch';
import './contentdisplay.css';

export default function Contentdisplay() {
	//Access to Redux States
	var breedsArr = useSelector((state) => state.breeds);
	var totalPages = useSelector((state) => state.totalPages);
	var breedsPerPage = useSelector((state) => state.breedsPerPage);
	var errorSearch = useSelector((state) => state.errorSearch);
	//React States
	const [currentPage, setCurrentPage] = useState(1);
	//For Pagination
	const indexOfLastCard = currentPage * breedsPerPage[0];
	const idnexOfFirstCard = indexOfLastCard - breedsPerPage[0];
	const currentCards = breedsArr.slice(idnexOfFirstCard, indexOfLastCard);
	//console.log('Data show:', breedsArr)

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
						<ErrorSearch />
					</div>
				</>
			) : (
				<>
					<Navfilter />
					<div className="cardContainer">
						{currentCards.map((e) => (
								<Card key={e.id} id={e.id} image={e.image} name={e.name} temperament={e.temperament} />
							))
						}
					</div>
					<button className="buttonPag" onClick={() => previosPage()}> Back </button>
					<Pagination totalPages={totalPages} paginateFunction={paginateFunction} />
					<button className="buttonPag" onClick={() => nextPage()}> Next </button>
				</>
			)}
			
		</div>
	);
}
