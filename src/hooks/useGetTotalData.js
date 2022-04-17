import axios from "axios";
import { useState, useEffect } from "react";
import { config } from "../config";

const useGetTotalData = () => {
  const [totalData, setTotalData] = useState([]);

  useEffect(() => {
    const funcGetTotalData = async () => {
      const { data } = await axios.get(
        `${config.url}/totalData?user=0x8c2D08a22144c1Ae2A9BD98717b0a05849f5DBDF`
      );

      setTotalData(data);
    };
    funcGetTotalData();
  }, []);

  return totalData;
};

export default useGetTotalData;
