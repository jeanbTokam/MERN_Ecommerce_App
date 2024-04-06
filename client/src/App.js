import { Button } from 'antd';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'


function App() {
  return (
    <div >
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
