import "./App.css";

import HomePage from './components/HomePage/HomePage'
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import ReportContract from "./components/ReportContract/ReportContract";
import Navbar from "./components/Navbar/Navbar";
import BlacklistedContracts from "./components/BlacklistedContracts/BlacklistedContracts";
import WhiteListedContracts from "./components/WhitelistedContracts/WhitelistedContracts";

function App() {
  return (
    
    <BrowserRouter>
       <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/ReportContract" element={<ReportContract/>}></Route>
        <Route path="/Blacklisted_Contracts" element={<BlacklistedContracts/>}></Route>
        <Route path="/Whitelisted_Contracts" element={<WhiteListedContracts/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
