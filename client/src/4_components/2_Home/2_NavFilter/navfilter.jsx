import React from 'react'
import { useDispatch } from 'react-redux';
//import { useHistory } from 'react-router-dom';
import { filterSource, sortAlphabetic, sortweight } from '../../../1_actions';
import './navfilter.css'

export default function Navfilterordercreate() {
    const dispatch = useDispatch();
    //const history = useHistory();

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
                <div className="navfilTitle">Source By:</div>
                <select id="select" onChange={(e) => handleFilterCreated(e)}>
                    <option value='ALL'> All </option>
                    <option value='API'> Api </option>
                    <option value="DB"> Database </option>
                </select>
            </div>
            <div className="navfilGroup">
                <div className="navfilTitle">Order Alfabetic:</div>
                <select id="select" onChange={(e) => handleSortAlpha(e)}>
                    <option value='AZ'> A - Z </option>
                    <option value="ZA"> Z - A </option>
                </select>
            </div>
            <div className="navfilGroup">
                <div className="navfilTitle">Order Weigth:</div>
                <select id="select" onChange={(e) => handleSortWeight(e)}>
                    <option value='MoreLess'> + to - </option>
                    <option value="LessMore"> - to +</option>
                </select>
            </div>
        </div>
    )
}
