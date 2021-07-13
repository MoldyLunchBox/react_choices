import React from "react";
import PropTypes from "prop-types";
import Button from "./Button"
import {Link} from "react-router-dom"
import ReactPlayer from "react-player"

const YoutubeEmbed = (props) => {
  const {foo} = props.location.state
// console.log(foo) // "bar"
  return (
    <div>
      <ReactPlayer   width='500px'
        
        url={`https://www.youtube.com/watch?v=${foo}`}
      />
      <Link to="/">
        <Button button="green" text="retour"/>
      </Link>
    </div>
  )
}

export default YoutubeEmbed


YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};
