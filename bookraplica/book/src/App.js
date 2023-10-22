import { Route, Routes } from "react-router-dom";
import Home from "./Home"
import List from "./List"
import Number from "./Number"
import Wholesale from "./Wholesale"
import LockTheBox from "./LockTheBox"
import Login from "./Login"
import Payment from "./Payment"

function App() {

  return (
    <div className="App">
        
       
        <Routes>
 <Route path="/" element={<Home/>}/>
  <Route path="/List" element={<List/>}/>
  <Route path="/number" element={<Number/>}/>
  <Route path="/Wholesale" element={<Wholesale/>}/>
  <Route path="/LockTheBox" element={<LockTheBox/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/Payment" element={<Payment />} />
  
   
 </Routes>
    
    </div>
    
  );
}

export default App;
