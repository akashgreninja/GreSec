import { createApiConfig } from "./config";
import { REPORT_CONTRACT,GET_REPORTED_CONTRACTS,WHITE_REPORTED_CONTRACTS ,IS_CONTRACT_BLACKLISTED} from "./routes";

const apiConfig = createApiConfig();

export const ReportThatCOntract = (data) => {
  console.log(data);
  const send = {
    ContractAddress: data.contract,
    UserAddress: data.userid,
    reason: data.reason,
    Signature: data.signature,
  };
  return apiConfig.post(REPORT_CONTRACT, send);
};


export const GetAllBlacklistedContracts = () => {
 
  return apiConfig.get(GET_REPORTED_CONTRACTS);
};
export const GetAllWhiteContracts = () => {
 
  return apiConfig.get(WHITE_REPORTED_CONTRACTS);
};

export const ContractBlacklisted = (address) => {
  console.log(address)
  try {
    return apiConfig.get(`${IS_CONTRACT_BLACKLISTED}/${address}`);
  }catch(err){
    console.log(err)
  }
 

};

