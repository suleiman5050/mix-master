import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar />
      <section className="page">
        {isPageLoading ? <div className="loading"></div> : <Outlet />}
      </section>
    </div>
  );
};

export default HomeLayout;
