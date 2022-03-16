import { useMoralisQuery } from "react-moralis";

const useGetInsurance = (id) => {
  let insuranceData = [];
  const { data, error } = useMoralisQuery("Insurance");
  if (error != undefined) {
    return error;
  }

  insuranceData.push({
    id: 1,
    name: "Hospital Benefit V1",
    logoUrl: "",
    contractAddress: "0x6D764D593525dBb88C7736e5b6E2CE6260F3114151",
  });
  insuranceData.push({
    id: 1,
    name: "Critical Illness V1 ",
    logoUrl: "",
    contractAddress: "0x6D764D593525dBb88C7736e5b6E2CE6260F3114152",
  });
  insuranceData.push({
    id: 1,
    name: "Hospital Benefit V2 ",
    logoUrl: "",
    contractAddress: "0x6D764D593525dBb88C7736e5b6E2CE6260F3114153",
  });
  insuranceData.push({
    id: 1,
    name: "Critical Illness V2 ",
    logoUrl: "",
    contractAddress: "0x6D764D593525dBb88C7736e5b6E2CE6260F3114154",
  });
  insuranceData.push({
    id: 1,
    name: "Hospital Benefit V3 ",
    logoUrl: "",
    contractAddress: "0x6D764D593525dBb88C7736e5b6E2CE6260F3114155",
  });
  insuranceData.push({
    id: 1,
    name: "Critical Illness V3 ",
    logoUrl: "",
    contractAddress: "0x6D764D593525dBb88C7736e5b6E2CE6260F3114156",
  });

  if (id != undefined) {
    insuranceData = insuranceData.filter(function (data) {
      return data.contractAddress == id;
    });
  }
  return insuranceData;
  // const jsonData = eval(data)
  // if(jsonData != undefined && jsonData[0] != undefined){
  //     jsonData.forEach(function(insurance,index){
  //         if(insurance != undefined){
  //             let rowData = insurance.attributes;
  //             if(id != undefined && id == insurance.id){
  //                 insuranceData.push({id:insurance.id, name: rowData.name, logoUrl: rowData.logo_url})
  //             } else if(id == undefined){
  //                 insuranceData.push({id:insurance.id, name: rowData.name, logoUrl: rowData.logo_url})
  //             }
  //         }
  //     });

  //     return insuranceData
  // }
};

export default useGetInsurance;
