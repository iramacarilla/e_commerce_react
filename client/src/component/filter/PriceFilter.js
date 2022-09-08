import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getFilter } from "../../redux/products/productsActions";

const PriceFilter = ({ products }) => {
  const [val, setVal] = useState(10);
  //const productDetails = useSelector((state) => state.productDetails);
  //const { product, loading, error } = productDetails;
  const valueHandle = (e) => {
    setVal(e.target.value);
    console.log(e.target.value);
  };
  // console.log(products);
  /*const productFilter = (products, num) => {
    if (products) {
      products
        .filter((item) => item.price < num)
        .map((filtered) => {
          console.log(filtered);
        });
    }
  };*/
  let filteredProduct = useDispatch(getFilter(val));
  console.log("fil", filteredProduct);

  return (
    <>
      <input type="range" onChange={valueHandle} />
      <span>{val}</span>
    </>
  );
};

export default PriceFilter;
