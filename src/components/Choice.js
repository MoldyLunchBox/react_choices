import PropTypes from 'prop-types'

const Choice = ({text}) => {
    return (
        <>
           {text}
        </>
    )
}

Choice.defaultProps = {
    title: 'default title'
}
Choice.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Choice
