import "./App.css";

import HomePage from './components/HomePage/HomePage'
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import ReportContract from "./components/ReportContract/ReportContract";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/ReportContract" element={<ReportContract/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
