import { Component } from "react";

import "./index.css";

class ThumbnailMaker extends Component {
  render() {
    const { image } = this.props;
    console.log(image);
    return <img src={image.thumbnailUrl} alt="" />;
  }
}

export default ThumbnailMaker;
