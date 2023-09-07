import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavLayout from "./route-layout/NavLayout";
import Home from "./pages/Home";
import Products from "./pages/products/Products";
import Cart from "./pages/Cart";
import { checkoutContext, productCheck, notifCheckout } from "./context/Context";
import ProductLayout from "./layout/ProductLayout";
import ProductsFiltered from "./pages/products/ProductsFiltered";

const App = () => {
  const [checkout, setCheckout] = useState(0);
  const [productCheckout, setProductCheckout] = useState([]);
  const [ toggle, setToggle ] = useState(false)

  return (
    <>
      <checkoutContext.Provider value={{ checkout, setCheckout }}>
        <productCheck.Provider value={{ productCheckout, setProductCheckout }}>
          <notifCheckout.Provider value={ { toggle, setToggle }}>
            <Router>

              <Routes>
                <Route path="/" element={<NavLayout />}>
                  <Route index element={<Home />} />
                  <Route path="products" element={<ProductLayout />} >
                    <Route index element={<Products />} />
                    <Route path="category/:category" element={<ProductsFiltered />} />
                  </Route>
                  <Route path="cart" element={<Cart />} />
                </Route>
              </Routes>

            </Router>
          </notifCheckout.Provider>

        </productCheck.Provider>
      </checkoutContext.Provider>
    </>
  );
};

export default App;
