import React, { useEffect, useState } from "react";

import useBuyCover from "../../../hooks/useBuyCover";
import BuyCoverDetail from "./BuyCoverDetail";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const BuyCoverArea = styled("div")(({ theme }) => ({
  marginTop: "2%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  paddingLeft: "16px",
  paddingRight: "16px",
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CreateTabBuyCover = () => {
  // const BuyCoverData = [];
  // BuyCoverData.push({
  //   id: 1,
  //   typeName: "Type1",
  //   name: "Health Insurance",
  //   detail1: "USDT 10%",
  //   detail2: "COMPOUND LENDING 50%",
  //   detail3: "UNISWAP LIQUIDITY PROVIDER 30%",
  //   investmentRating: 4,
  //   investmentRisk: "Level 7/10 (Hight Risk)",
  //   dailyCost: "0.15 USD",
  //   monthlyCost: "4.5 USD",
  //   yearlyCost: "54.75 USD",
  //   profitSharing: "5.42 %",
  //   profitEarned: "3.12 USD",
  //   stakedValue: "0.157485",
  // });
  // BuyCoverData.push({
  //   id: 2,
  //   typeName: "Type2",
  //   name: "Health Insurance2",
  //   detail1: "USDT 10%",
  //   detail2: "COMPOUND LENDING 50%",
  //   detail3: "UNISWAP LIQUIDITY PROVIDER 30%",
  //   investmentRating: 4,
  //   investmentRisk: "Level 7/10 (Hight Risk)",
  //   dailyCost: "0.15 USD",
  //   monthlyCost: "4.5 USD",
  //   yearlyCost: "54.75 USD",
  //   profitSharing: "5.42 %",
  //   profitEarned: "3.12 USD",
  //   stakedValue: "0.157485",
  // });
  // BuyCoverData.push({
  //   id: 3,
  //   typeName: "Type2",
  //   name: "Health Insurance2",
  //   detail1: "USDT 10%",
  //   detail2: "COMPOUND LENDING 50%",
  //   detail3: "UNISWAP LIQUIDITY PROVIDER 30%",
  //   investmentRating: 4,
  //   investmentRisk: "Level 7/10 (Hight Risk)",
  //   dailyCost: "0.15 USD",
  //   monthlyCost: "4.5 USD",
  //   yearlyCost: "54.75 USD",
  //   profitSharing: "5.42 %",
  //   profitEarned: "3.12 USD",
  //   stakedValue: "0.157485",
  // });
  // BuyCoverData.push({
  //   id: 4,
  //   typeName: "Type2",
  //   name: "Health Insurance2",
  //   detail1: "USDT 10%",
  //   detail2: "COMPOUND LENDING 50%",
  //   detail3: "UNISWAP LIQUIDITY PROVIDER 30%",
  //   investmentRating: 4,
  //   investmentRisk: "Level 7/10 (Hight Risk)",
  //   dailyCost: "0.15 USD",
  //   monthlyCost: "4.5 USD",
  //   yearlyCost: "54.75 USD",
  //   profitSharing: "5.42 %",
  //   profitEarned: "3.12 USD",
  //   stakedValue: "0.157485",
  // });
  // BuyCoverData.push({
  //   id: 5,
  //   typeName: "Type2",
  //   name: "Health Insurance2",
  //   detail1: "USDT 10%",
  //   detail2: "COMPOUND LENDING 50%",
  //   detail3: "UNISWAP LIQUIDITY PROVIDER 30%",
  //   investmentRating: 4,
  //   investmentRisk: "Level 7/10 (Hight Risk)",
  //   dailyCost: "0.15 USD",
  //   monthlyCost: "4.5 USD",
  //   yearlyCost: "54.75 USD",
  //   profitSharing: "5.42 %",
  //   profitEarned: "3.12 USD",
  //   stakedValue: "0.157485",
  // });
  const BuyCoverData = useBuyCover("HB16022022");
  console.log("BuyCoverData::");
  console.log(BuyCoverData);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {BuyCoverData.map((detail, indexDetail) => (
            <Grid key={indexDetail} item xs={12} md={4}>
              <BuyCoverDetail detail={detail}></BuyCoverDetail>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
const MainContent = () => {
  return (
    <BuyCoverArea>
      <CreateTabBuyCover></CreateTabBuyCover>
    </BuyCoverArea>
  );
};

export default MainContent;
