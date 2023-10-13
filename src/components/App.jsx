import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import { Button } from './Button/Button.jsx';
import { Component } from 'react';
import { fetchCard } from 'API/api.js';
import { SpinnerDotted } from 'spinners-react';
import { Layout } from './Layout';

import toast, { Toaster } from 'react-hot-toast';

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
    const { page, query } = this.state;

    if (page !== prevState.page || query !== prevState.query) {
      if (query !== prevState.query) {
        this.setState({ page: 1, galleryItems: [] });
      }

      if (query === '' || query === ' ') {
        return this.setState({ galleryItems: [] });
      }

      try {
        this.setState({ loader: true });

        const cards = await fetchCard(query, page);

        if (!cards.data.hits.length) {
          this.setState({ error: true });
          toast.error('Sorry, not found');
        }

        this.setState(prevState => {
          return {
            galleryItems: [...prevState.galleryItems, ...cards.data.hits],
          };
        });
      } catch (error) {
        this.setState({ error: true });
        toast.error('Not found');
      } finally {
        this.setState({ loader: false });
      }
    }
  }

  handlerClickOnForm = evt => {
    evt.preventDefault(); //відміна перезагру сторінки
    this.setState({ query: evt.target[1].value }); // те що ввів клієнт
    this.setState({ page: 1 });
  };

  handlerClickOnLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { galleryItems, loader } = this.state;
    return (
      <Layout>
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
        <Toaster />
      </Layout>
    );
  }
}
