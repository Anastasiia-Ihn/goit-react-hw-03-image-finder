import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import { Button } from './Button/Button.jsx';
import { Component } from 'react';
import { fetchCard } from 'API/api.js';
import { SpinnerDotted } from 'spinners-react';

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
    // if (this.state.query.trim === '' || this.state.query === ' ') {
    //   // return this.setState({galleryItems: []})
    //   return;
    // }
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      try {
        this.setState({ loader: true, galleryItems: [], page: 1 }); //????????
        //  запит на API
        const cards = await fetchCard(this.state.query, this.state.page);
        this.setState({ galleryItems: cards.data.hits });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loader: false });
      }
    }
  }

  handlerClickOnForm = evt => {
    evt.preventDefault(); //відміна перезагру сторінки
    this.setState({ query: evt.target[1].value }); // те що ввів клієнт
    // this.setState({ loader: true, galleryItems: [], page: 1 });
  };

  handlerClickOnLoadMore = () => {
    this.setState(prevState => {
      console.log(prevState.page + 1);
      return prevState.page + 1;
    });
  };

  render() {
    const { galleryItems, loader } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handlerClickOnForm} />

        {galleryItems.length > 0 && <ImageGallery arrCards={galleryItems} />}

        {loader && (
          <SpinnerDotted
            size={50}
            thickness={100}
            speed={100}
            color="#36ad47"
          />
        )}

        {galleryItems.length >= perPage && (
          <Button onClick={this.handlerClickOnLoadMore} />
        )}
      </>
    );
  }
}
