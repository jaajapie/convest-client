import axios from "axios";
import { useState, useEffect } from "react";

const useGetPool = (id, providerValue) => {
  const [poolData, setPoolData] = useState([]);
  useEffect(() => {
    const funcGetPool = async () => {
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
          totalClaimValueReserve: `${item.totalClaimValueReserve} USD`,
          totalClaimValuePaid: `${item.totalClaimValuePaid} USD`,
        };
      });
      setPoolData(transFromData);
    };
    funcGetPool();
  }, []);

  return poolData;
};

export default useGetPool;
