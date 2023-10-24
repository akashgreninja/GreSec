import "./App.css";
import Search from "./components/search";

function App() {
  return (
    <>
    {/* <h1>Scam</h1> */}
    <div className=" h-screen w-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl text-white pb-5">Scam</h2>
    
      <Search />
    </div>
    </>
  );
}

export default App;
