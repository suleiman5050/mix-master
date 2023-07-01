import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../Components/CocktailList";
import SearchForm from "../Components/SearchForm";
import { useQuery } from "@tanstack/react-query";

const cocktailSearchURL =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchURL}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

export const Loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);

    const searchTerm = url.searchParams.get("search") || "";
    // const response = await axios.get(`${cocktailSearchURL}${searchTerm}`);
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    console.log(searchTerm);
    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const data = useQuery(searchCocktailsQuery(searchTerm));
  // console.log(data);
  const { data: drinks } = data;

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
