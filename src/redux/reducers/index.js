const INITIAL_STATE = {
  productList: [],
  filterProcess: "",
  orderProcess: "",
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, productList: action.payload };
    case "GET_PRODUCTS_ERR":
      return { ...state, productList: action.payload };
    case "FILTER_PROCESS":
      return { ...state, filterProcess: action.payload };
    case "ORDER_PROCESS":
      return { ...state, orderProcess: action.payload };
    default:
      return state;
  }
}