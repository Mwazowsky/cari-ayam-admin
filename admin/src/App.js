import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import "./App.css";

function App() {
  const admin = useSelector((state) => {
    if (state.user.currentUser === null || state.user.currentUser.isAdmin === false) {
      return false;
    } else {
      return state.user.currentUser.isAdmin;
    }
  });

  // const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  // const currentUser = user && JSON.parse(user).currentUser;
  // const admin = currentUser?.isAdmin;

  console.log(admin);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={admin ? <Navigate to="/" /> : <Login />} />
      </Routes>
        {admin && (
          <>
            <Topbar />
              <div className="container">
                <Sidebar />
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/users" element={<UserList />} />
                  <Route path="/user/:userId" element={<User />} />
                  <Route path="/newUser" element={<NewUser />} />
                  <Route path="/products" element={<ProductList />} />
                  <Route path="/product/:productId" element={<Product />} />
                  <Route path="/newproduct" element={<NewProduct />} />
                </Routes>
              </div>
          </>
        )}
    </Router>
  );
}

export default App;
