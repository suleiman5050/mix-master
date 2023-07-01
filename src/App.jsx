import { useState } from "react";
import {
  About,
  Landing,
  HomeLayout,
  Error,
  Cocktail,
  NewsLetter,
  SinglePageError,
} from "./Pages";
import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Loader as landingLoader } from "./Pages/Landing";
import { Loader as SingleCocktail } from "./Pages/Cocktail";
import { action as NewsLetterAction } from "./Pages/NewsLetter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
      },
      { path: "about", element: <About /> },
      {
        path: "cocktail/:id",
        loader: SingleCocktail(queryClient),
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
        action: NewsLetterAction,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />;
      </QueryClientProvider>
    </>
  );
}

export default App;
