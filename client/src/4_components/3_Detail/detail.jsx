/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { getDetail, getBreeds } from '../../1_actions/index';

import './detail.css'

export default function Detail() {
	const dispatch = useDispatch();
	const location = useLocation();
    const history = useHistory();
	var loadState = useSelector((state) => state.loading);
	var breedDetail = useSelector((state) => state.breedDetail);
	var breedId = location.pathname.split('/').pop();
	console.log('1', breedDetail);

	useEffect(() => {
		dispatch(getDetail(Number(breedId)));
	}, [dispatch]);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getBreeds());
        history.push(`../home`);
    }

	return (
		<div>
			{loadState ? (
				<>
					<img width="230" src="../dog01.gif" alt="loading.." />
				</>
			) : (
				<>
                    <Link to={'/home'}>
                        <button  onClick={(e)=> handleClick(e)}>Home</button>
                    </Link>
                    <h1>Breed Detail:</h1>
					<div className="cardContent">
						<img src={breedDetail.image} alt={breedDetail.name} />
                        <div className="cardTextContent">
                            <div className="cardText">
                                <div>
                                    <span className="detailTitle">ID #:</span>
                                    <span className="detailInfo">{breedDetail.id}</span>
                                </div>
                                <div>
                                    <span className="detailTitle">Name:</span>
                                    <span className="detailInfo">{breedDetail.name}</span>
                                </div>
                                <div>
                                    <span className="detailTitle">Weight:</span>
                                    <span className="detailInfo">{breedDetail.Weight}</span>
                                </div>
                                <div>
                                    <span className="detailTitle">Height:</span>
                                    <span className="detailInfo">{breedDetail.height}</span>
                                </div>
                                <div>
                                    <span className="detailTitle">Life Span:</span>
                                    <span className="detailInfo">{breedDetail.life_span}</span>
                                </div>
                                <div>
                                    <span className="detailTitle">Temperament:</span>
                                </div>
                                <div>
                                    <span className="detailInfo">{breedDetail.temperament}</span>
                                </div>

                            </div>
                        </div>
					</div>
				</>
			)}
		</div>
	);
}
