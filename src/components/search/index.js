import React, { useState } from "react";
import {
  CloseIcon,
  SearchContainer,
  SearchIcon,
  SearchStyled,
  SearchForm,
} from "./search.styles";
import Button from "../button";

export default function Search({ setPokemonName }) {
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const onClear = () => {
    setPokemonName("");
    setSearch("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setPokemonName(search.toLowerCase());
  };

  return (
    <SearchContainer>
      <SearchIcon />
      <SearchForm onSubmit={onSubmit}>
        <SearchStyled
          value={search}
          onChange={onSearch}
          placeholder="Input pokemon name..."
        />
        {search && <CloseIcon onClick={() => onClear()} />}
      </SearchForm>
      <Button type="secondary" onClick={(e) => onSubmit(e)}>
        Search
      </Button>
    </SearchContainer>
  );
}
