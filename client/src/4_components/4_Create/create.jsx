import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { getTemperaments, postBreed, getBreeds } from '../../1_actions';
import styles from './create.module.css';

export function validate(input) {
	let errors = {};
	if (!input.name) errors.name = 'Name is required';
	else if(input.name.length < 4)  errors.name = 'Lenght less than 4 characters';
    else if (!/^[a-zA-Z_ ]*$/.test(input.name)) errors.name = 'Name is invalid';

    if (!input.height) errors.height = 'Heigh is required';
    else if (!/^\d{1,2}-\d{1,2}$/.test(input.height)) errors.height = 'Format is invalid';

    if (!input.weight) errors.weight = 'Heigh is required';
    else if (!/^\d{1,2}-\d{1,2}$/.test(input.weight)) errors.weight = 'Format is invalid';

    if (!input.life_span) errors.life_span = 'Life Span is required';
    else if (!/^\d{1,2}$/.test(input.life_span)) errors.life_span = 'Format is invalid';

    if (!input.image) errors.image = 'Image URL is required';
    else if (!/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/.test(input.image)) errors.image = 'Format of URL is invalid';

	return errors;
}

export default function Create() {
    const dispatch = useDispatch();
    const history = useHistory();
    const temperamentsArray = useSelector(state => state.temperaments);
    const statePost = useSelector(state => state.statePost);

    const [input, setInput] = useState({
		name: '',
        height:'',
        weight:'',
        life_span:'',
        image:'',
	});
    const [errors, setErrors] = useState({});

    const [tempName, setTempName] = useState([]);
    const [tempData, setTempData] = useState([]);
    //console.log('array Names: ',tempName);
    //console.log('array Data: ',tempData);

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])

    const handleInputChange = function (e) {
		setErrors(validate({
			...input,
			[e.target.name]: e.target.value,
            [e.target.height]: e.target.value,
            [e.target.weight]: e.target.value,
            [e.target.life_span]: e.target.value,
            [e.target.image]: e.target.value,
		}));

		setInput({
			...input,
			[e.target.name]: e.target.value,
            [e.target.height]: e.target.value,
            [e.target.weight]: e.target.value,
            [e.target.life_span]: e.target.value,
            [e.target.image]: e.target.value,
		});
	};

    //Esta funcion es la que hace el post de la nueva raza conectandose con el Back End
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('val1:',input.name)
        if(!input.name || !input.height || !input.weight || !input.life_span || !input.image || tempName.length===0) alert('One o more fileds are empty !!')
        else {
            const dataPostBreed = {
                name: input.name,
                height: input.height,
                weight: input.weight,
                life_span: input.life_span,
                image: input.image,
                temperamentsArr: tempData.map(e => {
                    return parseInt(e)
                })
            }
            //console.log('Post data: ',JSON.stringify(dataPostBreed))
            dispatch(postBreed(dataPostBreed));
            input.name = ''
            input.height = ''
            input.weight = ''
            input.life_span = ''
            input.image= ''
            setTempName([])
        }
    }

    const handleAddTemperament = (e) => {
        var select = document.getElementById("selectTemp");
        var options=document.getElementsByTagName("option")
        var objTemp = {
            id: select.value,
            name: options[select.value].innerHTML
        }
        setTempData([...tempData,e.target.value])
        setTempName([...tempName,objTemp])
    }

    const handleRemoveTemperament = (id) =>  {
        const newName =  tempName.filter(f => f.id !== id);
        setTempName(newName);
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getBreeds());
        history.push(`../home`);
    }

    return (
        <div className={styles.createContent}>
            <nav className={styles.navNav}>
                <span className={styles.navLogo}>Dog Mania App</span>
                <ul className={styles.navMenu}>
                    <li className={styles.navMenuItem}> <Link to={'/home'}> <span className={styles.navMenuLink} onClick={(e)=> handleClick(e)}> <i className="fa fa-home"></i> Home</span> </Link> </li>
                    <li className={styles.navMenuItem}> <Link to={'/about'}> <span className={styles.navMenuLink} > <i className="fa fa-info"></i> About</span> </Link> </li>
                </ul>
            </nav>
            <div className={styles.tittle}>
                <h1>Create New Breed</h1>
            </div>
            <form onSubmit={handleSubmit}>
            <fieldset>
                <legend> <h2>Create you new Breed</h2> </legend>
                    <label>Name of breed</label><br/>
                    <input type="text" className={errors.name ? `${styles.danger}` : `${styles.imputCreateTxt}` }  name="name"
                    placeholder="Name for new breed.." value={input.name} onChange={handleInputChange}></input>
                    {errors.name && ( <p className={styles.danger}>{errors.name}</p> )}
                    
                    <p></p>
                    <label>Height</label><br/>
                    <input type="text" className={errors.height ? `${styles.danger}` : `${styles.imputCreateTxt}` } name="height"
                    placeholder="Min - Max" value={input.height} onChange={handleInputChange}></input>
                    {errors.height && ( <p className={styles.danger}>{errors.height}</p> )}
                    
                    <p></p>
                    <label>Weight</label><br/>
                    <input type="text" className={errors.weight ? `${styles.danger}` : `${styles.imputCreateTxt}` } name="weight"
                    placeholder="Min - Max" value={input.weight} onChange={handleInputChange}></input>
                    {errors.weight && ( <p className={styles.danger}>{errors.weight}</p> )}
                    
                    <p></p>
                    <label>Life Span</label><br/>
                    <input type="text" className={errors.life_span ? `${styles.danger}` : `${styles.imputCreateTxt}` } name="life_span"
                    placeholder="Max life years.." value={input.life_span} onChange={handleInputChange}></input>
                    {errors.life_span && ( <p className={styles.danger}>{errors.life_span}</p> )}

                    <p></p>
                    <label>Image</label><br/>
                    <input type="text"className={errors.image ? `${styles.danger}` : `${styles.imputCreateTxt}` } name="image"
                    placeholder="Image URL.." value={input.image} onChange={handleInputChange}></input>
                    {errors.image && ( <p className={styles.danger}>{errors.image}</p> )}

                    <p></p>
                    <label>Temperament</label><br/>
                    <select id="selectTemp" onChange={(e) => handleAddTemperament(e)} name="selectTemp">
                        <option key='0' value=''>Select Temperaments</option>
                        {   
                            
                            temperamentsArray.map(e =>  (
                                <option key={e.id} value={e.id} name={e.name}>{e.name} </option>
                                )
                            )
                        }
                    </select>
                    <div>
                        { tempName.map(d => ( <div key={d.id} >{d.name} <span onClick={() => handleRemoveTemperament(d.id)} className={styles.close}>[X]</span> </div> )) }
                    </div>
            </fieldset>
                <button type="submit" className={styles.buttonSave}> <i className="fa fa-floppy-o"></i> Save </button>

            </form>
            {
                statePost ? <span className={styles.mesage}>New Breed save sucesfuly !</span> : null
            }
        </div>
    )
}
