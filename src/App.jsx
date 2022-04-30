import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />{" "}
          <Route exact path="/login" element={<Login />} />{" "}
          <Route exact path="/register" element={<Register />} />{" "}
          <Route exact path="/product" element={<Product />} />{" "}
          <Route exact path="/productlist" element={<ProductList />} />{" "}
          <Route exact path="/cart" element={<Cart />} />{" "}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
