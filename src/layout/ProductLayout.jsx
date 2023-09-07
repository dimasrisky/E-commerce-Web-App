import React, { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import ButtonFilter from "../components/ButtonFilter";

const ProductLayout = () => {
  const [category, setCategory] = useState();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
        .then(res => res.json())
        .then(dataCategory => setCategory(dataCategory))
  }, [])

  return (
    <>
      <div className="w-[85%] mx-auto text-center mt-28">
        <h1 className="text-3xl font-jomolhari text-white mb-10">Our Products</h1>
        <div className="flex justify-center gap-9 items-center">
            <NavLink to={'/products'}><button className="px-10 py-1 border border-white text-white focus:bg-white hover:bg-white hover:text-black rounded-md focus:text-black transition duration-200">All</button></NavLink>
            {category?.map(eachCategories => <ButtonFilter value={eachCategories}/>)}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default ProductLayout;
