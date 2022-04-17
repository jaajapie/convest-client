import * as React from "react";
import { useState, useEffect } from "react";
import TopSection from "./ActiveCoverView/TopSection";
import MainSection from "./ActiveCoverView/MainSection";
import useGetPolicy from "../../hooks/useGetPolicy";

function GetPolicy() {
  const data = useGetPolicy();
  return data;
}

const Index = () => {
  const policyData = GetPolicy();
  return (
    <>
      <TopSection
        sumOfClaim={policyData.sumOfClaim}
        sumOfStake={policyData.sumOfStake}
        sumOfPremium={policyData.sumOfPremium}
      ></TopSection>
      <MainSection></MainSection>
    </>
  );
};

export default Index;
