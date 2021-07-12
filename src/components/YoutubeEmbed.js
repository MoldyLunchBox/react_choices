import React from "react";
import PropTypes from "prop-types";
import Homme from "../utils/Homme.jpg"


const YoutubeEmbed = () => {
  return (
    <div>
      <img src={Homme} alt="BigCo Inc. logo"/>
    </div>
  )
}

export default YoutubeEmbed


YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;