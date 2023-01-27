import { Routes, Route } from "react-router-dom"
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home'
import Login from './Component/Login/Login';
import Products from "./Component/Products/Products";
import Registration from './Component/Registration/Registration'
import RequireAuth from "./Component/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Registration' element={
          <RequireAuth>
            <Registration></Registration>
          </RequireAuth>
        }></Route>
        <Route path="/Products" element={
          <RequireAuth>
            <Products></Products>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
