import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Afterloginhome from "../Components/Afterloginhome";
import Men from "../Components/Men";
import Women from "../Components/Women";
import Product from "../Components/Product";
import Privateroute from "../Private/Privateroute";

const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/afterlogin"
          element={
            <Privateroute>
              <Afterloginhome />
            </Privateroute>
          }
        />

        <Route
          path="/men"
          element={
            <Privateroute>
              <Men />
            </Privateroute>
          }
        />

        <Route
          path="/women"
          element={
            <Privateroute>
              <Women />
            </Privateroute>
          }
        />

        <Route
          path="/product"
          element={
            <Privateroute>
              <Product />
            </Privateroute>
          }
        />
        <Route />
      </Routes>
    </>
  );
};

export default Allroutes;
