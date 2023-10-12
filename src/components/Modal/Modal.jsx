import { Overlay, ModalCard } from './Modal.js';

export const Modal = ({data}) => {
  return (
    <Overlay>
      <ModalCard>
        <img src={data.largeImageURL } alt={data.id} />
      </ModalCard>
    </Overlay>
  );
};
