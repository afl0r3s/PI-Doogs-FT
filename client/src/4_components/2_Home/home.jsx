/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBreeds } from '../../1_actions';
import Navsearch from './1_NavSearch/navsearch';

import Contentdisplay from './3_ContentDisplay/contentdisplay';
import './home.css';

export default function Home() {
	var loadState = useSelector((state) => state.loading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBreeds()); 
	}, [dispatch]);
	

	return (
		<div>
			{loadState ? 
				<>
					<Navsearch />
					<img width="230" src="./dog01.gif" alt="loading.."/>
				</> : 
				<> 
					<Navsearch />
					
					<Contentdisplay />
				</>
			}
		</div> 
	);
}