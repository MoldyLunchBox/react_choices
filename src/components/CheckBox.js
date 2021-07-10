import React from 'react'
import PropTypes from 'prop-types'

const CheckBox = ({label}) => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
      return (
        <>
        <label>
        <input
         id="choice"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        />
        {label}
      </label>
      <p>Is "Value 1" checked? {checked.toString()}</p>

        </>    
      ) 
    }

CheckBox.defaultProps = {
  label: 'default',
}
CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
}
export default CheckBox
