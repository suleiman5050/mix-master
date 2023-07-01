import React from "react";
import img from "../assets/not-found.svg";
import Wrapper from "../assets/Wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error.status);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} color="#10b981" alt="not-found" />
          <p>It seems the page is not found</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    );
  }
  return <Wrapper>Something went wrong</Wrapper>;
};

export default Error;
