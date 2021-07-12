import React from "react";
import PropTypes from "prop-types";
import HommeVoiture from "../utils/Homme.jpg"
import Button from "./Button"
import {Link} from "react-router-dom"
const YoutubeEmbed = () => {
  return (
    <div>
      <img src={HommeVoiture} alt="HommeVoiture"/>
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
