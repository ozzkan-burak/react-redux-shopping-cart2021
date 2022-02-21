import React, { useEffect, useState } from "react";
import { formatCurrency } from "../utils";
import { useSelector, useDispatch } from "react-redux";
import { getProductList } from "../redux/actions/productActions";

const ProductList = () => {

  const [productsList, setProductsList] = useState([]);

  const products = useSelector(state => state.productList);
  const filterProcess = useSelector(state => state.filterProcess);


  const dispatch = useDispatch();

  useEffect(() => {
    setProductsList(products);
    dispatch(getProductList());
  }, []);

  useEffect(() => {
    if (filterProcess === 'All') {
      setProductsList(products);
    } else {
      const filteredProductList = products.filter(product => product.size.indexOf(filterProcess) >= 0);
      setProductsList(filteredProductList);
    }

  }, [filterProcess])


  return (
    <div>
      <ul className="products">
        {
          productsList?.map((product) => (
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
          ))
        }
      </ul>
    </div>
  );

};

export default ProductList;