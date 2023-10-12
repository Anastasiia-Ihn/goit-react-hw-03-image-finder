import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import { Button } from './Button/Button.jsx';
import { Loader } from './Loader/Loader.jsx';
import { Component } from 'react';
import { fetchCard } from 'API/api.js';

const perPage = 12;

export { perPage };

export class App extends Component {
  state = {
    query: '',
    page: 1,
    galleryItems: [],
    loader: false,
    error: false,
  };

  async componentDidUpdate(_, prevState) {
    if (this.state.query === '' || this.state.query === ' ') {
      return //??????
    }
      if (
        this.state.page !== prevState.page ||
        this.state.query !== prevState.query
      ) {
        // if (this.state.query === '' || this.state.query === ' ') {
        // return  this.setState({ query: '' }); // зачистка при  пошуку)
        
        // }
        try {
          //  запит на API
          const cards = await fetchCard(this.state.query);
          this.setState({ galleryItems: cards.data.hits });
          this.setState({ page: 1 }); // При новому пошуку повертаємося на першу сторінку
        }
        catch (error) {
          console.log(error);
        }
        finally {
        }
      
    }
  }

  handlerClickOnForm = evt => {
    evt.preventDefault(); //відміна перезагру сторінки
     this.setState({ query: evt.target[1].value }); // те що ввів клієнт
   
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handlerClickOnForm} />
        {/* {this.state.galleryItems.length > 0 && <ImageGallery arrCards={this.state.galleryItems } />} */}
        <ImageGallery arrCards={this.state.galleryItems} />
        <Loader />
        <Button />
      </>
    );
  }
}
