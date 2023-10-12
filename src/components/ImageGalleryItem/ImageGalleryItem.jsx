import { Modal } from "../Modal/Modal.jsx";
import { ImgGallery, ItemGallery } from "./ImageGalleryItem.js";

export const ImageGalleryItem = ({ dataForCard }) => {
  
  // state = {
  //   isModalOpen: false,
  // };

  // openModal = () => {
  //   this.setState({ isModalOpen: true });
  // };

  // closeModal = () => {
  //   this.setState({ isModalOpen: false });
  // };
  return (<ItemGallery>
    <ImgGallery src={dataForCard.webformatURL}></ImgGallery>
    {/* <Modal data = {dataForCard }></Modal> */}
  </ItemGallery>)
  };
  