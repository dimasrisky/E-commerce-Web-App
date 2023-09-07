import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { checkoutContext, productCheck, notifCheckout } from '../../context/Context'
import CardProduct from "../../components/CardProduct";

const ProductsFiltered = () => {
  const { category } = useParams()
  const [product, setIsProduct] = useState([]);
  const { setCheckout } = useContext( checkoutContext )
  const { setProductCheckout } = useContext( productCheck )
  const { setToggle } = useContext( notifCheckout ) 

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${ category }`)
        .then(res => res.json())
        .then(dataProducts => setIsProduct(dataProducts))
  }, [category])

  const clickCart = ( item ) => {
    setCheckout(prev => prev + 1)
    setToggle(true)
    setProductCheckout(prev => [
      ...prev,
      item
    ]);
  }
  
  return (
    <>
      <section id="products">
        <div className="w-[85%] h-[85vh] mx-auto my-10 mt-[5rem]">
          <div className="flex flex-wrap gap-12 justify-center mx-auto">
            {product?.map((eachItem) => (
                <CardProduct key={eachItem.id} id={eachItem.id} title={eachItem.title} price={eachItem.price} image={eachItem.image} clickCart={clickCart} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsFiltered;
