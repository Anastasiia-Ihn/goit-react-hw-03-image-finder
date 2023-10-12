import {
  Header,
  SearchFormInput,
  SearchFormButton,
  SearchForm,
} from './Searchbar';

export const Searchbar = ({ onSubmit }) => {
  
  return (
    <Header>
      <SearchForm onSubmit={(evt) => {
        onSubmit(evt)
      }
      }>
        <SearchFormButton  type="submit">Search</SearchFormButton>
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
