
import Button from './Button'
import PropTypes from 'prop-types'
import Choice from './Choice'
import { useState } from 'react'
import { gender } from "../utils/gender";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
    const [checkedState, setCheckedState] = useState(
        new Array(gender.length).fill(false)
    );
//pour les 2 premiers boxes: crocher/decrocher juste un seule box et decrocher l autre 
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : (index < 2 ? false : item)
        );
        setCheckedState(updatedCheckedState);
    };
//pour les 2 derniers boxes: crocher/decrocher le box clique et lesser les autres ils sont 

    const handleOnChange2 = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    };
    return (
        <header >
            {<h1 className='h3_title'>  {title}</h1>}
            <span className='flexDiv'>
                <div class="left">
                    <Choice text='Je suis' />
                </div>
                {
                    gender.map(({ id, name }, index) => {
                        if (index < 2)
                            return (
                                <div className="middle">
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        checked={checkedState[index]}
                                        onChange={() => handleOnChange(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}> <a> {name}</a></label>
                                </div>
                            );
                        return (
                            <div></div>
                        )
                    }
                    )
                }
            </span>
            <span className='flexDiv'>

                <div class="left">
                    <Choice text='Je me déplace' />
                </div>
                {
                    gender.map(({ id, name }, index) => {
                        if (index >= 2)
                            return (
                                <div className="middle">
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        checked={checkedState[index]}
                                        onChange={() => handleOnChange2(index)}
                                    />
                                    <label hover="green" htmlFor={`custom-checkbox-${index}`}> <a> {name}</a> </label>
                                </div>
                            );
                        return (
                            <div></div>
                        )
                    }
                    )
                }
            </span>
            {
                //very sorry for this mess, its 2 am and the deadline is this morning
                
                //homme
                checkedState[0] &&
                //voiture
                ((checkedState[3] &&
                    <Link
                        to={{ pathname: "/YoutubeEmbed", state: { foo: "GKgoqO3GIBg" } }}>
                        <Button disabled={true} color='green' text="C'est parti !" />
                    </Link>)
                    //pieds
                    || (checkedState[2]) &&
                    <Link
                        to={{ pathname: "/YoutubeEmbed", state: { foo: "wBqM2ytqHY4" } }}>
                        <Button disabled={true} color='green' text="C'est parti !" />
                    </Link>) ||
                //femme
                (checkedState[1] &&
                    //voiture
                    ((checkedState[3] &&
                        <Link
                            to={{ pathname: "/YoutubeEmbed", state: { foo: "gtBt1j6RjKA" } }}>
                            <Button disabled={true} color='green' text="C'est parti !" />
                        </Link>)
                    //pieds
                    || ((checkedState[2]) &&
                    <Link
                        to={{ pathname: "/YoutubeEmbed", state: { foo: "m4VH2mW0nac" } }}>
                        <Button disabled={true} color='green' text="C'est parti !" />
                    </Link>))) ||
            <Button disabled={true} color='grey' text="C'est parti !" />
            }
        </header>
    )
}


Header.defaultProps = {
    title: 'Découvrez-vous en vidéo'
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// const headingStyle = { 
//     color: 'red',
//      backgroundColor:'black'}
export default Header
