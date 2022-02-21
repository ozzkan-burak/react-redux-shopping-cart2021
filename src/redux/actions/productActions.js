import axios from 'axios';

export const getProductList = () => dispatch => {
  axios("https://fakestoreapi.com/products")
      .then((res) => {

        
        const newProducts = res.data.map(product => {
          const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
          const newRandom = Math.floor((Math.random() * 6));
      
          const newSize = newRandom > 0 ? sizes.splice(0, newRandom) : sizes;
          return { ...product, size: newSize };
        });

        dispatch({ type: 'GET_PRODUCTS', payload: newProducts })
      }).catch((err)=> {
        dispatch({ type: 'GET_PRODUCTS_ERR', payload: 'İçerik yüklenirken hata oluştu.' })
      })
}

export const filterProcess = (size) => {
  return({
    type: 'FILTER_PROCESS',
    payload: size
  })
}
