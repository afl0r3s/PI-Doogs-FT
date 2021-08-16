import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterSource, sortAlphabetic, sortweight, getTemperaments, getBreedstTemperaments } from '../../../1_actions';
import './navfilter.css'

export default function Navfilterordercreate() {
    const dispatch = useDispatch();
    const temperamentsArray = useSelector(state => state.temperaments);

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])

    const handleFilterTemperament = (e) => {
        dispatch(getBreedstTemperaments(e.target.value));
        //history.push(`../home`);
    }
    
    const handleFilterCreated = (e) => {
        dispatch(filterSource(e.target.value));
        //history.push(`../home`);
    }

    const handleSortAlpha = (e) => {
        dispatch(sortAlphabetic(e.target.value));
        //history.push(`../home`);
    }

    const handleSortWeight = (e) => {
        console.log(e.target.value)
        dispatch(sortweight(e.target.value))
    }

    return (
        <div className="navfiltercontent">
            <div className="navfilGroup">
                <select id="select" onChange={(e) => handleFilterTemperament(e)}>
                <option key="0" value="ALL">Filter All Temperaments</option>
                    {
                        temperamentsArray.map(e =>  (
                            <option key={e.id} value={e.name}>{e.name}</option>
                            )
                        )
                    }
                </select>
            </div>
            <div className="navfilGroup">
                <select id="select" onChange={(e) => handleFilterCreated(e)}>
                    <option value='ALL'>Filter All Source</option>
                    <option value='API'>Api</option>
                    <option value="DB">Database</option>
                </select>
            </div>
            <div className="navfilGroup">
                <select id="select" onChange={(e) => handleSortAlpha(e)}>
                    <option value='ALL'>Order Alphabethic All</option>
                    <option value='AZ'>A - Z</option>
                    <option value="ZA">Z - A</option>
                </select>
            </div>
            <div className="navfilGroup">
                <select id="select" onChange={(e) => handleSortWeight(e)}>
                    <option value='ALL'>Order Weigth All</option>
                    <option value='MoreLess'>+ to -</option>
                    <option value="LessMore">- to +</option>
                </select>
            </div>
        </div>
    )
}
