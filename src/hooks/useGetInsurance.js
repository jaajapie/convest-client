import { useMoralisQuery  } from "react-moralis";

const useGetInsurance =  (id)=>{
  
    let insuranceData = []
    const { data, error } =  useMoralisQuery("Insurance");
    if(error != undefined){
        return error
    }
  
    const jsonData = eval(data)
    if(jsonData != undefined && jsonData[0] != undefined){
        jsonData.forEach(function(insurance,index){
            if(insurance != undefined){
                let rowData = insurance.attributes;
                if(id != undefined && id == insurance.id){
                    insuranceData.push({id:insurance.id, name: rowData.name, logoUrl: rowData.logo_url})
                } else if(id == undefined){
                    insuranceData.push({id:insurance.id, name: rowData.name, logoUrl: rowData.logo_url})
                }
            }
        });
        
        return insuranceData
    }
  
   
}

export default useGetInsurance;

