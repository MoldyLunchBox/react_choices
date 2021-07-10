
import Button from './Button'
import PropTypes from 'prop-types'
import CheckBox from './CheckBox'
import Choice from './Choice'

const Header = ({ title }) => {
    return (
        <header >
            {<h1 className='h3_title'>  {title}</h1>}
            <span className='flexDiv'>
                <div class="left">
                    <Choice text='Je suis' />
                </div>
                <div class="middle">
                    <CheckBox label='Homme' />
                </div>
                <div className='right'>
                    <CheckBox label='Femme' />
                </div>
            </span>

            <span className='flexDiv'>

                <div class="left">
                    <Choice text='Je me déplace' />
                </div>
                <div class="middle">
                    <CheckBox label='pied' />
                </div>
                <div className='right'>
                    <CheckBox label='voiture' />
                </div>
            </span>
            <Button color='green' text="C'est parti !" />

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
