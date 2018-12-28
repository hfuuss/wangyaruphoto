import React from 'react'
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';


const photos = [
  {
    src: 'http://images.hfuusec.cn/18-12-28/36945969.jpg',
    width: 4,
    height: 5
  },
  {
    src: 'http://images.hfuusec.cn/18-12-28/52902299.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://images.hfuusec.cn/18-12-28/61565077.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://images.hfuusec.cn/18-12-28/26270668.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://images.hfuusec.cn/18-12-28/76561905.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://images.hfuusec.cn/18-12-28/72791839.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://images.hfuusec.cn/18-12-28/22930556.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://images.hfuusec.cn/18-12-28/62974480.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://images.hfuusec.cn/18-12-28/31005712.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://images.hfuusec.cn/18-12-28/40711274.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://images.hfuusec.cn/18-12-28/33408370.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://images.hfuusec.cn/18-12-28/49708606.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://images.hfuusec.cn/18-12-28/93613437.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://images.hfuusec.cn/18-12-28/21467628.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://images.hfuusec.cn/18-12-28/40159617.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://images.hfuusec.cn/18-12-28/17058251.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://images.hfuusec.cn/18-12-28/61565077.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://images.hfuusec.cn/18-12-28/52902299.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'http://images.hfuusec.cn/18-12-28/37516178.jpg',
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
