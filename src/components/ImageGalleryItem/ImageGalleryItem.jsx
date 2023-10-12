import { Component } from "react";
import { Modal } from "../Modal/Modal.jsx";
import { ImgGallery, ItemGallery } from "./ImageGalleryItem.js";

// export const ImageGalleryItem = ({ dataForCard }) => {
  
//   // state = {
//   //   isModalOpen: false,
//   // };

//   // openModal = () => {
//   //   this.setState({ isModalOpen: true });
//   // };

//   // closeModal = () => {
//   //   this.setState({ isModalOpen: false });
//   // };
//   return (<ItemGallery>
//     <ImgGallery src={dataForCard.webformatURL}></ImgGallery>
//     {/* <Modal data = {dataForCard }></Modal> */}
//   </ItemGallery>)
//   };
  

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };
  

  
  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  
  render() {
    const { isModalOpen } = this.state;
    const {dataForCard } = this.props;
  
    return (<ItemGallery>
      <ImgGallery src={dataForCard.webformatURL}></ImgGallery>
    {/* <Modal data = {dataForCard }></Modal> */}
  </ItemGallery>)}}