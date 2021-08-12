import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBreeds } from '../../1_actions';


export default function Home() {
    var breedsArr = useSelector(state => state.breeds)
    console.log('1',breedsArr)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBreeds())
    }, [dispatch])

    return (
        <div>
            <h3>soy la Home Page...</h3>
            {
                breedsArr.map(e => {
                    return (
                        <div className="card">
                            <p key={e.id}>{e.name}</p> 
                        </div>
                    )
                })
            }
        </div>
    )
}
