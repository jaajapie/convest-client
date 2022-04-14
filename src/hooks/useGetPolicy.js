import axios from "axios";
import { useState, useEffect } from "react";

const useGetPolicy = () => {
  const [policyData, setPolicyData] = useState([]);
  useEffect(() => {
    const funcGetPolicy = async () => {
      const { data } = await axios.get(`http://188.166.247.236/api/factory`);

      const transFromData = data.map((item) => {
        console.log(data);

        return {
          poolId: item.poolId,
          name: item.poolName,
          totalCoverage: `${item.activePolicies} Policies`,
          policyValue: `${item.activePoliciesValue} USD`,
          totalProvidedCapital: `${item.totalProvidedCapital} USD`,
          poolAddress: `${item.policyManager}`,
          availableValue: "201,548 USD",
          totalPolicySoldVolume: `${item.totalPolicies} Policies`,
          totalPolicySoldValue: `${item.totalPoliciesValue} USD`,
          cARRadio: "327 %",
          buyCoverUrl: `/buycover?poolId=${item.poolId}`,
          activePoliciesCoverageValue: `${item.activePoliciesCoverageValue} USD`,
        };
      });
      setPolicyData(transFromData);
    };
    funcGetPolicy();
  }, []);

  return policyData;
};

export default useGetPolicy;
