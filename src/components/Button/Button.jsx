import { BtnLoadMore } from './Button.js';

export const Button = ({ onClick }) => {
  return (
    <BtnLoadMore
      onClick={() => {
        onClick();
      }}
    >
      Load more
    </BtnLoadMore>
  );
};
