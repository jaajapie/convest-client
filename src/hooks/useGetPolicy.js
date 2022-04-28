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
  const [policyData, setPolicyData] = useState([]);

  useEffect(() => {
    let arrayPolicy = [];
    let policyObj = {};
    let index = 1;
    let sumOfClaim = 0;
    let sumOfStake = 0;
    let sumOfPremium = 0;
    const funcGetPolicy = async () => {
      if (accountAddress != "") {
        const { data } = await axios.post(`${config.url}/listPolicies`, {
          user: accountAddress, //"0x8c2D08a22144c1Ae2A9BD98717b0a05849f5DBDF",
        });
        let filterData = data;

        if (poolId != undefined && poolId != "all") {
          filterData = data.filter((item) => item.poolId == poolId);
        }
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
              premiumAmount: data.premiumAmount,
              maxCoverage: data.maxCoverage,
              totalClaimPaid: data.claimAmountPaid,
              status: data.status,
              remainClaim: data.remainClaim,
              claimAmountPaid: data.claimAmountPaid,
              premiumAmount: data.premiumAmount,
              claimPending: data.claimPending,
              assetAddress: data.asset,
            };
            index = index + 1;
          });

          arrayPolicy.push(...transFromData);
          sumOfClaim = sumOfClaim + item.allClaimAmountPaid;
          sumOfStake = sumOfStake + item.MIStaking;
          sumOfPremium = sumOfPremium + item.allPremiumAmount;
          return transFromData;
        });

        policyObj.listData = arrayPolicy;
        policyObj.sumOfClaim = sumOfClaim;
        policyObj.sumOfStake = sumOfStake;
        policyObj.sumOfPremium = sumOfPremium;

        setPolicyData(policyObj);
      }
    };
    funcGetPolicy();
  }, []);
  console.log(policyData);
  return policyData;
};

export default useGetPolicy;
