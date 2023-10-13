import {
  Header,
  SearchFormInput,
  SearchFormButton,
  SearchForm,
} from './Searchbar';

import { ImSearch } from 'react-icons/im';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <SearchForm
        onSubmit={evt => {
          onSubmit(evt);
        }}
      >
        <SearchFormButton type="submit">
          <ImSearch />
        </SearchFormButton>
        <SearchFormInput
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};
