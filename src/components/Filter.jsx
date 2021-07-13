import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// actions
import {filterProcess} from "../redux/actions/productActions";

const Filter = () => {

  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  const products = useSelector(state => state.productList);

  const dispatch = useDispatch()

  const length = products?.length;

  const filterProducts = (e) => {

    const size = e.target.value

    dispatch(filterProcess(size));
    setSize(size);

    const test = products.filter(product => product.size.indexOf(size) >= 0)
    console.log(test)

  }

  const sortProducts = (sort) => {
    console.log(sort.target.value);
    setSort(sort.target.value);
  }

  return (
    <div className="filter">
      <div className="filter-result">
        {length} {length > 1 ? 'Products' : 'Product'}
      </div>
      <div className="filter-sort">
        Order{" "} <select value={sort} onChange={(e)=> sortProducts(e)}>
          <option>Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      <div className="">
        Filter{" "}
        <select value={size} onChange={(e)=> filterProducts(e)}>
          <option value="All">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  )
};

export default Filter