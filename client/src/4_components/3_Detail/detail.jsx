/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { getDetail, getBreeds } from '../../1_actions/index';
import navSrchStyles from './detail.module.css'

export default function Detail() {
	const dispatch = useDispatch();
	const location = useLocation();
    const history = useHistory();
	var loadState = useSelector((state) => state.loading);
	var breedDetail = useSelector((state) => state.breedDetail);
	var breedId = location.pathname.split('/').pop();
	//console.log('1>', breedId);

	useEffect(() => {
		dispatch(getDetail(breedId));
	}, [dispatch]);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getBreeds());
        history.push(`../home`);
    }

	return (
		<div>
            <nav className={navSrchStyles.navNav}>
            <span className={navSrchStyles.navLogo}>Dog Mania App</span>
                <ul className={navSrchStyles.navMenu}>
                    <li className={navSrchStyles.navMenuItem}> <Link to={'/home'}> <span className={navSrchStyles.navMenuLink} onClick={(e)=> handleClick(e)}> <i className="fa fa-home"></i> Home</span> </Link> </li>
                    <li className={navSrchStyles.navMenuItem}> <Link to={'/about'}> <span className={navSrchStyles.navMenuLink} > <i className="fa fa-info"></i> About</span> </Link> </li>
                    <li className={navSrchStyles.navMenuItem}> <Link to={'/add'}> <span className={navSrchStyles.navMenuLink} > <i className="fa fa-paw"></i> Create</span> </Link> </li>
                </ul>
            </nav>
			{loadState ?
				<> 
					<img width="230" src="../dog01.gif" alt="error" />
				</>
			: (
				<>
                    <div className={navSrchStyles.cardContent}>
                        <h1>Breed Detail:</h1>
                    </div>
                    <div className={navSrchStyles.cardContent}>
                        <div className={navSrchStyles.card}>
                            <span>
                                <img src={breedDetail.image} alt={breedDetail.name} />
                            </span>
                            <span className={navSrchStyles.cardTextContent}>
                                <div className={navSrchStyles.cardText}>
                                    <div className={navSrchStyles.detailTitle}>ID #:</div>
                                    <div className={navSrchStyles.detailInfo}>{breedDetail.id}</div>
                                    <div className={navSrchStyles.detailTitle}>Name :</div>
                                    <div className={navSrchStyles.detailInfo}>{breedDetail.name}</div>
                                    <div className={navSrchStyles.detailTitle}>Weight :</div>
                                    <div className={navSrchStyles.detailInfo}>{breedDetail.weight} Kg.</div>
                                    <div className={navSrchStyles.detailTitle}>Height :</div>
                                    <div className={navSrchStyles.detailInfo}>{breedDetail.height} cm.</div>
                                    <div className={navSrchStyles.detailTitle}>Life Span</div>
                                    <div className={navSrchStyles.detailInfo}>{breedDetail.life_span}</div>
                                    <div className={navSrchStyles.detailTitle}>Temperaments</div>
                                    <div className={navSrchStyles.detailInfo}>{breedDetail.temperament}</div>
                                </div>
                            </span>
                        </div>
                    </div>
				</>
			)}
		</div>
	);
}
