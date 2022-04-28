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

const useGetPolicy = (poolId, accountAddress) => {
  let policyData = [];

  let arrayPolicy = [];

  let index = 1;

  const funcGetPolicy = async () => {
    //if (accountAddress != "" && accountAddress != "xx") {
    const { data } = await axios.post(`${config.url}/listPolicies`, {
      user: accountAddress, //"0x8c2D08a22144c1Ae2A9BD98717b0a05849f5DBDF",
    });
    let filterData = data;
    console.log(filterData);
    if (filterData?.message !== "Missing Parameter") {
      console.log("filterData::");
      const transFromFilter = filterData.map((item) => {
        const transFromData = item.Data.map((data) => {
          const startDate = new Date(data.startDate);
          const endDate = new Date(data.untilDate);

          const startPeriodDay = `${
            month[startDate.getMonth()]
          } ${startDate.getDate()},  ${startDate.getFullYear()}`;

          const endPeriodDay = `${
            month[endDate.getMonth()]
          } ${endDate.getDate()},  ${endDate.getFullYear()}`;

          return {
            index: index,
            poolId: item.poolId,
            policyId: data.policyId,
            coverageName: item.coverageName,
            coveragePeriod: `${startPeriodDay} - ${endPeriodDay}`,
            startPeriodDay: startDate,
            endPeriodDay: endDate,
            premiumAmount: data.premiumAmount,
            maxCoverage: data.maxCoverage,
            totalClaimPaid: data.claimAmountPaid,
            status: data.status,
            remainClaim: data.remainClaim,
            claimAmountPaid: data.claimAmountPaid,
            premiumAmount: data.premiumAmount,
            claimPending: data.claimPending,
            assetAddress: data.asset,
            assetName: data.assetName,
          };
          index = index + 1;
        });

        arrayPolicy.push(...transFromData);

        return transFromData;
      });

      const uniquePolicy = Array.from(
        new Set(arrayPolicy.map((a) => a.poolId))
      ).map((poolId) => {
        return arrayPolicy.find((a) => a.poolId === poolId);
      });

      console.log("uniquePolicy::");
      console.log(uniquePolicy);

      return uniquePolicy.filter((item) => item.status === "Active");
    }
    // if (poolId != undefined && poolId != "all") {
    //   filterData = data.filter((item) => item.poolId == poolId);
    // }

    // } else {
    //   setPolicyData([]);
    // }
  };
  policyData = funcGetPolicy();

  console.log(policyData);
  return policyData;
};

export default useGetPolicy;
