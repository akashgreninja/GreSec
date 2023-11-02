import { useState } from "react";
import Search from "../search";
import "../../App.css";
import image from "../../images/greninja.png";
import { ContractBlacklisted } from "../../Api/reportContract";
function App() {
  const [search, setsearch] = useState("");
  const [check, setcheck] = useState({ value: "" });
  const [scam, setscam] = useState(null);
  const [content, setcontent] = useState([]);

  const HandleChange = (e) => {
    setcheck({ ...check, [e.target.name]: e.target.value });
    console.log(check);
  };

  const searchforval = async (e) => {
    console.log(check);
    const { data } = await ContractBlacklisted(check.value);
    setsearch(data.message);
    console.log(data.message);
    if (search === "False") {
      setscam(false);
    } else {
      console.log("we here really");
      setscam(true);
      setcontent(data.message);
    }
  };

  return (
    <>
      {/* <h1>Scam</h1> */}
      <div className=" h-screen w-screen flex flex-col  items-center">
        <img src={image} alt="" srcset="" width={400} />

        <Search
          // setcheck={setcheck}
          searchforval={searchforval}
          HandleChange={HandleChange}
        />
        <div className="mt-10">
          {scam === true && (
            <div>
              <p className="text-white text-4xl">
                Contract is a scam and has been flagged for:
                <button
                disabled={true}
                  type="button"
                  class=" ml-3 py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  {content}
                </button>
              </p>
              <a href={`https://etherscan.io/address/${check.value}`}>
                {" "}
                <p className="text-blue-500 text-2xl">
                  Click here to know more
                </p>
              </a>
            </div>
          )}
          {scam === false && (
            <p className="text-white text-4xl">
              Contract is safe for now/has not been flagged
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
