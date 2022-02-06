import { useMoralisQuery  } from "react-moralis";



const useGetProvider =  ()=>{
  
    let providerData = []
    const { data, error } =  useMoralisQuery("Provider");
    if(error != undefined){
        return error
    }

    const jsonData = eval(data)
    if(jsonData != undefined && jsonData[0] != undefined){
        jsonData.forEach(function(provider,index){
            if(provider != undefined){
                let rowData = provider.attributes;
                providerData.push({id:provider.id, productType: rowData.productType, contractAddress: rowData.contractAddress, value:rowData.providerValue})
            }
        });

        return providerData
    }
  
   
}

export default useGetProvider;