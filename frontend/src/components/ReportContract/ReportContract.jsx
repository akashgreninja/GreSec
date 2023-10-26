import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Reported.css";
import { ReportThatCOntract } from "../../Api/reportContract";
const ReportContract = () => {
  const [final, finalsetfinal] = useState({ contract: "", reason: "", userid: "",signature:"" });
  const [enable, setenable] = useState(false);
  const [signature, setSignature] = useState(null);

  const handleChange = (e) => {
    finalsetfinal({ ...final, [e.target.name]: e.target.value });
    console.log(final);
  };

  const connectWallet = async (e) => {
    e.preventDefault();
    if (typeof window.ethereum !== "undefined") {
      try {
        // Request account access
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        console.log(`Wallet address: ${account}`);
        finalsetfinal({ ...final, userid: account });
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Metamask is not installed or not available");
    }
  };

  const SignForm = async (e) => {
    e.preventDefault();
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];

        const message = "Please sign this message to verify your identity";
        const signedMessage = await window.ethereum.request({
          method: "personal_sign",
          params: [message, account],
        });
        console.log(`Signature: ${signedMessage}`);
        finalsetfinal({ ...final, signature: signedMessage });

        SubmitForm()

  
        // setSignature(signedMessage);
     
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Metamask is not installed or not available");
    }
  };

  const SubmitForm = async (e) => {
    const {data}=await ReportThatCOntract(final)
    console.log(data)

  }

  return (
    <>
      <Navbar />

      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <div class="form-container">
          <div class="logo-container">Report Contract</div>
          <div>
            <form class="form">
              <div class="form-group">
                <label for="email">Contract ID</label>
                <input
                  type="text"
                  id="contract"
                  onChange={handleChange}
                  name="contract"
                  placeholder="0x00"
                  required=""
                />
                <label for="email">
                  Enter the reason of reporting the contract{" "}
                </label>
                <input
                  type="text"
                  id="reason"
                  name="reason"
                  onChange={handleChange}
                  placeholder="Enter your reason "
                  required=""
                />
              </div>
              <button
                class="form-submit-btn "
                type="button "
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
              {/* {
                enable? */}
              <button
                class="form-submit-btn "
                type="button "
                disabled={enable}
                onClick={SignForm}
              >
                Sign and Submit Report
              </button>
              :null
              {/* } */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportContract;
