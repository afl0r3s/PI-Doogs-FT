import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterSource, sortAlphabetic, getTemperaments, getBreedstTemperaments } from '../../../1_actions';
import navFilterStyles from './navfilter.module.css'

export default function Navfilterordercreate() {
    const dispatch = useDispatch();
    const temperamentsArray = useSelector(state => state.temperaments);

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])

    const handleFilterTemperament = (e) => {
        dispatch(getBreedstTemperaments(e.target.value));
    }
    
    const handleFilterCreated = (e) => {
        dispatch(filterSource(e.target.value));
    }

    const handleSortAlpha = (e) => {
        dispatch(sortAlphabetic(e.target.value));
    }
    /* 
    const handleSortWeight = (e) => {
        console.log(e.target.value)
        dispatch(sortweight(e.target.value))
    }
    */
    return (
        <div className={navFilterStyles.navfiltercontent}>
            <div className={navFilterStyles.navfilGroup}>
                <select id="select" onChange={(e) => handleFilterTemperament(e)}>
                <option key="0" value="ALL">&#xf0b0; Filter All Temperaments</option>
                    {
                        temperamentsArray.map(e =>  (
                            <option key={e.id} value={e.name}>&#xf11a; {e.name}</option>
                            )
                        )
                    }
                </select>
            </div>
            <div className={navFilterStyles.navfilGroup}>
                <select id="select" onChange={(e) => handleFilterCreated(e)}>
                    <option value='ALL'>&#xf0b0;  Filter All Source</option>
                    <option value='API'>&#xf1c9; Api</option>
                    <option value="DB">&#xf1c0; Database</option>
                </select>
            </div>
            <div className={navFilterStyles.navfilGroup}>
                <select id="select" onChange={(e) => handleSortAlpha(e)}>
                    <option value='ALL'>&#xf0dc; Order All</option>
                    <option value='AZ'>A -&#187; Z</option>
                    <option value="ZA">Z -&#187; A</option>
                    <option value='MoreLess'>&#xf161; weigth</option>
                    <option value="LessMore">&#xf160; weigth</option>
                </select>
            </div>
            {/* <div className={navFilterStyles.navfilGroup">
                <select id="select" onChange={(e) => handleSortWeight(e)}>
                    <option value='ALL'>Order Weigth All</option>
                    <option value='MoreLess'>+ to -</option>
                    <option value="LessMore">- to +</option>
                </select>
            </div> */}
        </div>
    )
}
