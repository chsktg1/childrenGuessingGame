import { Component } from "react";

import "./index.css";

class ThumbnailMaker extends Component {
  userClicked = () => {
    const { userTried, image } = this.props;
    userTried(image.id);
  };

  render() {
    const { image } = this.props;

    return <img src={image.thumbnailUrl} alt="" onClick={this.userClicked} />;
  }
}

export default ThumbnailMaker;
