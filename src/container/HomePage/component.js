import React from 'react';
import AppBar from '../../component-homepage/appbar';
import SlideImage from '../../component-homepage/slide-image-carousel';
class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppBar />
        <SlideImage />
      </React.Fragment>
    );
  }
}

export default component;
