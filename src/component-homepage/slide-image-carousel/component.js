import React from 'react';
import { Typography } from '@material-ui/core';
import SlideImage4 from '../../asset/4.png';
import BackgroundSlideshow from 'react-background-slideshow';
class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <BackgroundSlideshow
          images={[SlideImage4]}
          className={classes.BackgroundSlideshow}
        />
      </div>
    );
  }
}

export default component;
