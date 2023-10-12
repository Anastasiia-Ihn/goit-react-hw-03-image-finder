// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
// import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Component } from 'react';

export class App extends Component {
  state = {
    galleryItem: [],
    loader: false,
    error: false,
  };

  render() {
    return (
      <>
        <Searchbar></Searchbar>
        {this.state.galleryItem.length > 0 && <ImageGallery />}
        {/* <ImageGalleryItem></ImageGalleryItem>
          <Modal></Modal> */}

        <Loader></Loader>
        <Button></Button>
      </>
    );
  }
}
