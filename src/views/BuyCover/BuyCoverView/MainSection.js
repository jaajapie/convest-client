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
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { poolId } = router.query;

  const BuyCoverData = useBuyCover(poolId);
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
  const router = useRouter();
  const { poolId } = router.query;
  if (poolId != undefined) {
    return (
      <BuyCoverArea>
        <CreateTabBuyCover></CreateTabBuyCover>
      </BuyCoverArea>
    );
  } else {
    return <div>No data</div>;
  }
};

export default MainContent;
