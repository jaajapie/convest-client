import React from "react";
import BuyCover from "../src/views/BuyCover";
import MainLayout from "../src/layouts/MainLayout";
import Header from "../src/components/Header";

const buycover = () => {
  return (
    <MainLayout>
      <Header title={`CONVEST FINANCE: BUYCOVER`}></Header>
      <BuyCover></BuyCover>
    </MainLayout>
  );
};

export default buycover;
