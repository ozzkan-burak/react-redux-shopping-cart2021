import axios from 'axios';

export const getProductList = () => dispatch => {
  axios("https://fakestoreapi.com/products")
      .then((res) => {

        const newProducts = res.data.map(product => {
          const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
          const orders = ["latest", "lowest", "highest"];
          const newRandom = Math.floor((Math.random() * 6));
          const newRandomOrder = Math.floor((Math.random() * 3));
      
          const newSize = newRandom > 0 ? sizes.splice(0, newRandom) : sizes;
          const newOrder = newRandomOrder > 0 ? orders.splice(0, newRandomOrder) : orders;

          const newProduct = {
            ...product,
            sizes: newSize,
            orders: newOrder
          }
          
          return newProduct;
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

export const orderProcess = (size) => {
  return({
    type: 'ORDER_PROCESS',
    payload: size
  })
}

