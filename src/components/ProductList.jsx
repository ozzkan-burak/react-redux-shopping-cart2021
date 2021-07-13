import React, { useEffect, useState } from "react";
import { formatCurrency } from "../utils";
import { useSelector, useDispatch } from "react-redux";
import { getProductList } from "../redux/actions/productActions";

const ProductList = () => {

  //const [products, setProducts] = useState([]);

  let products = useSelector(state => state.productList);
  const filterProcess = useSelector(state => state.filterProcess);

  console.log(filterProcess)
  const dispatch = useDispatch();

  useEffect(() => {
    test()
    dispatch(getProductList()); 
  }, []);

  useEffect(()=>{
    products = products.filter(product => product.size.indexOf(filterProcess) >= 0)
    console.log(products)

    console.log(newProductList)
  }, [filterProcess])

  let newProductList;

const test = () => {
  return newProductList = products?.map((product) => (
    <li key={product.id}>
      <div className="product">
        <a href={'#' + product.id}>
          <span className="product-img-container">
            <img src={product.image} alt={product.title} />
          </span>
          <span className="product-name-container">
            <p className="product-name">
              {product.title}
            </p>
          </span>

        </a>
        <div className="product-price">
          {formatCurrency(product.price)}
        </div>
        <button className="button primary">Add To Cart</button>
      </div>
    </li>
  ));
}


  return (
    <div>
      <ul className="products">
        {newProductList}
      </ul>
    </div>
  );

};

export default ProductList;