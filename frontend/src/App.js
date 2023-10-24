import "./App.css";

import HomePage from './components/HomePage/HomePage'
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="Audit" element={<Users />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
