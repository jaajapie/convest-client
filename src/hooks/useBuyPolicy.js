import axios from "axios";
import { useState, useEffect } from "react";
import web3 from "web3";

const useBuyPolicy = async (poolId) => {
  const { data } = await axios.get(
    `http://188.166.247.236/api/quotePlans?user=0x8c2D08a22144c1Ae2A9BD98717b0a05849f5DBDF`
  );

  return poolData;
};

export default useBuyPolicy;
