import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// actions
import { getProductList } from "../redux/actions/productActions";

// utils
import { formatCurrency } from "../utils";

const ProductList = () => {

  const [productsList, setProductsList] = useState([]);

  const products = useSelector(state => state.productList);
  const filterProcess = useSelector(state => state.filterProcess);
  const orderProcess = useSelector(state => state.orderProcess);

  const dispatch = useDispatch();

  // tüm ürünlerin listelenmesi için redux tetiklenir 
  useEffect(() => {
    dispatch(getProductList());
  }, []);
  
  // syafa içindeki state boş array olarak verilmiştir, ürünler api den çekildeiğinde sayfa tekrar render edilir.
  useEffect(() => {
    setProductsList(products);
  }, [products]);

  // filterProcess redux state değiştiğinde ürünlerin filtrelenmesi için tetiklenir
  useEffect(() => {
    if (filterProcess === 'All') {
      setProductsList(products);
    } else {
      const filteredProductList = products.filter(product => product.sizes.indexOf(filterProcess) >= 0);
      setProductsList(filteredProductList);
    }
  }, [filterProcess]);

  useEffect(() => {

    if (filterProcess === 'All') {
      setProductsList(products);
    } else {
      const sortedProductList = products.slice().sort((a, b) => (
        orderProcess === 'lowest' ? 
          ((a.price < b.price) ? 1 : -1) :
          orderProcess === 'highest' ?
          ((a.price > b.price) ? 1 : -1) :
          a._id > b._id ? 1 : -1
      ));
      setProductsList(sortedProductList);
    }
  }, [orderProcess]);

  console.log({orderProcess})


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