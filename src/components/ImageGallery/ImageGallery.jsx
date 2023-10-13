// import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem.jsx';
// import { Modal } from './Modal/Modal.jsx';

import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem.jsx";
import { List } from "./ImageGallery.js";

export const ImageGallery = ({arrCards} ) => {
  
  
  return <List>
    {arrCards.map(card => (<ImageGalleryItem key={card.id} dataForCard = {card} >
      
      </ImageGalleryItem>  
))}
  </List>
    
};
