import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Form, Input, Button } from './SearchForm.styled';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();

  useEffect(() => setQuery(searchParams.get('query') ?? ''), [searchParams]);

  const onFormSubmit = event => {
    event.preventDefault();
    onSubmit(query.trim().toLowerCase());
  };

  const onInputChange = ({ target }) => {
    setQuery(target.value);
  };

  return (
    <Form onSubmit={onFormSubmit} autoComplete="off">
      <Input
        type="text"
        placeholder="Enter movie name"
        value={query}
        onChange={onInputChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
