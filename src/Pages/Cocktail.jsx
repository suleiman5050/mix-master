import React from "react";
import { Link, useLoaderData, Navigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/Wrappers/CocktailPage";
import { useQuery } from "@tanstack/react-query";

const singleSearchURL =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktailQuery = (id) => {
  return {
    queryKey: ["search", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleSearchURL}${id}`);
      return data;
    },
  };
};

export const Loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(SingleCocktailQuery(id));
    // const { data } = await axios.get(`${singleSearchURL}${id}`);
    return { id };
  };
const Cocktail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(SingleCocktailQuery(id));
  if (!data) return <Navigate to="/" />;
  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;
  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);
  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
      </header>
      <div className="drink">
        <img src={image} alt="" className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients: </span>
            {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item}
                  {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
