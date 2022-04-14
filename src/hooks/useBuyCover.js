import axios from "axios";
import { useState, useEffect } from "react";

const useBuyCover = (poolId) => {
  const [poolData, setPoolData] = useState([]);

  useEffect(() => {
    const funcGetPool = async () => {
      const { data } = await axios.get(
        `http://188.166.247.236/api/quotePlans?user=0x8c2D08a22144c1Ae2A9BD98717b0a05849f5DBDF`
      );
      if (poolId != undefined) {
        const transFromData = data.filter((item) => item.poolId == poolId);
        if (transFromData.length > 0) {
          const transFromPlanData = transFromData[0].planData.map(
            (plan, index) => {
              return {
                id: index,
                typeName: `Type ${index + 1}`,
                name: transFromData[0].poolName,
                investmentRating: 4,

                dailyCost: plan.priceDaily,
                monthlyCost: plan.priceMonthly,
                yearlyCost: plan.priceYearly,
              };
            }
          );

          setPoolData(transFromPlanData);
        }
      }
    };
    funcGetPool();
  }, []);

  return poolData;
};

export default useBuyCover;
