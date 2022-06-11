import React from "react"; 
import Home from "./pages/Home";
import List from "./pages/list";
import Login from "./pages/login"
import New from "./pages/New";
import Single from "./pages/single"
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import { formInputs, productInputs } from "./pages/formSource";




function App() {
  
  return (
   
    <Router>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="list" element={<List />} />
        <Route path="users" element={<List title="Add New User" />}>
          <Route path="*" element={<Single />} />
          <Route path="single" element={<Single />} />
          <Route path="new" element={<New inputs ={formInputs} title="Add New Pic" />} />
        </Route>
        <Route path="products" element={<List title="Add New Product" />}>
          <Route path="single" element={<Single />} />
          <Route path="new" element={<New inputs ={productInputs} title="Add New Product" />} />
        </Route>
      </Route>
    </Routes>
  
    </Router>
   
  );}



export default App;
