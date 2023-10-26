import { createApiConfig } from "./config";
import { REPORT_CONTRACT } from "./routes";

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

