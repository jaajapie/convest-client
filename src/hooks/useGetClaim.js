import axios from "axios";
import { useState, useEffect } from "react";
import { config } from "../config";

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const useGetClaim = (poolId) => {
  const [claimData, setClaimData] = useState([]);

  useEffect(() => {
    let arrayClaim = [];
    let index = 0;
    const funcGetClaim = async () => {
      const { data } = await axios.post(`${config.url}/listClaims`, {
        user: "0x8c2D08a22144c1Ae2A9BD98717b0a05849f5DBDF",
      });
      let filterData = data;

      if (poolId != undefined && poolId != "all") {
        filterData = data.filter((item) => item.poolId == poolId);
      }
      filterData.map((item) => {
        const transFromData = item.Data.map((data) => {
          const requestDate = new Date(data.timeOut);

          const requestDay = `${
            month[requestDate.getMonth()]
          } ${requestDate.getDate()},  ${requestDate.getFullYear()}`;
          index = index + 1;

          return {
            index: index,
            claimId: data.claimId,
            claimRequestDate: `${requestDay}`,
            requestAmount: data.requestAmount,
            approveAmount: data.approveAmount,
            votePower: data.sumOfTheVote,
            status: data.status,
          };
        });

        arrayClaim.push(...transFromData);

        return transFromData;
      });

      setClaimData(arrayClaim);
    };
    funcGetClaim();
  }, []);

  console.log("claimData::");
  console.log(claimData);
  return claimData;
};

export default useGetClaim;
