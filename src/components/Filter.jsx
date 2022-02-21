import React, { useEffect ,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// actions
import {filterProcess, orderProcess} from "../redux/actions/productActions";

const Filter = () => {

  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [productListLength, setProductListLength] = useState(0);

  const products = useSelector(state => state.productList);

  const dispatch = useDispatch()

  const filterProducts = (e) => {

    const size = e.target.value
    dispatch(filterProcess(size));
    setSize(size);
  };

  useEffect(() => {
    const length = products.length;
    setProductListLength(length);

    console.log({length});
    console.log({products});
  } , [products])


  const sortProducts = (sort) => {

    const sorted = sort.target.value; 
    dispatch(orderProcess(sorted));
    setSort(sorted);
  };

  return (
    <div className="filter">
      <div className="filter-result">
        {productListLength} {productListLength > 1 ? 'Products' : 'Product'}
      </div>
      <div className="filter-sort">
        Order{" "} <select value={sort} onChange={(e)=> sortProducts(e)}>
          <option value="latest">Latest</option>
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