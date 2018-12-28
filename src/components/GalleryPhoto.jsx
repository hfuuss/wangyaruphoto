import React from 'react'
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import w1 from '../images/w1.png';
import w2 from '../images/w2.png';
import w3 from '../images/w3.png';
import w4 from '../images/w4.png';


const photos = [
  {
    src: w1,
    width: 4,
    height: 5
  },
  {
    src: w2,
    width: 1,
    height: 1
  },
  {
    src: w3,
    width: 1,
    height: 1
  },
  {
    src: w4,
    width: 1,
    height: 1
  },
];

export default class GalleryPhoto extends React.Component {

  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

    render() {
	return (
    <div>
      <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
    </div>
	);
    }
}
