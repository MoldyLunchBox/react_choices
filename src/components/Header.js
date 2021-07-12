
import Button from './Button'
import PropTypes from 'prop-types'
import CheckBox from './CheckBox'
import Choice from './Choice'
import {useState} from 'react'
import Render from './Render'
import { gender } from "../utils/gender";
import YoutubeEmbed from "./YoutubeEmbed";
import {Link } from "react-router-dom";


const Header = ({ title }) => {
    const [checkedState, setCheckedState] = useState(
        new Array(gender.length).fill(false)
      );
    
    
      const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
        index === position  ? !item : (index < 2 ? false : item)
        );
        setCheckedState(updatedCheckedState);
      };
    
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
                    gender.map(({id, name}, index) => {
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
                            <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                        
                        </div>
                   
                   );
                   return(
                    <div></div>
                ) 

                }
                )
            }
            {
                 gender.map(({ id,name}, index) => {
                    console.log(checkedState[index])
                 })
            }
            
            </span>

            <span className='flexDiv'>

                <div class="left">
                    <Choice text='Je me déplace' />
                </div>
                {
                    gender.map(({id, name}, index) => {
                        if (index >=2)
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
                            <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                        </div>
                   );
                   return(
                       <div></div>
                   )
                }
                )
            }
            </span>
            <Link to="/YoutubeEmbed">
            <Button color='green' text="C'est parti !" />
            </Link>


        </header>
    )
}


Header.defaultProps = {
    title: 'default title'
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// const headingStyle = { 
//     color: 'red',
//      backgroundColor:'black'}
export default Header
