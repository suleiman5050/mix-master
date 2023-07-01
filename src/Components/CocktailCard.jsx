import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/Wrappers/CocktailCard";

const CocktailCard = ({ id, name, info, glass, image }) => {
  return (
    <Wrapper>
      <div className="image-container">
        <img className="img" src={image} alt="" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          Details
        </Link>
      </div>
    </Wrapper>
  );
};

export default CocktailCard;
