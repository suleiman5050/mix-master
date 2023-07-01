import React from "react";
import Wrapper from "../assets/Wrappers/SearchForm";
import { useNavigation, Form } from "react-router-dom";
const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          className="form-input"
          name="search"
          id="search"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn" disabled={isLoading}>
          {isLoading ? "searching..." : "Search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
