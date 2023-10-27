import Navbar from "../Navbar/Navbar";
import Search from "../search";
import "../../App.css";
import image from "../../images/greninja.png";
function App() {
  return (
    <>
      <Navbar />
      {/* <h1>Scam</h1> */}
      <div className=" h-screen w-screen flex flex-col  items-center">
        <img src={image} alt="" srcset="" width={400} />

        <Search />
        <div className="mt-10">
          <p className="text-white text-4xl">
          Contract is a scam and has been flagged for : 
          </p>
          <p className="text-blue-500 text-2xl">
          Click here to know more
          </p>
        
        </div>
      </div>
    </>
  );
}

export default App;
