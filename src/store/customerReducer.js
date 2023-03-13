const defaultState = {
  customers: [],
};
// eslint-disable-next-line default-param-last
const customerReducer = (state = defaultState, action) => {
  // console.log({ ...state });
  // console.log(...state.customers);
  // const obj = { a: 2 };
  // console.log({ ...obj, c: 2 });
  console.log(action.payload);
  // если стейт undefined то нужно вернуть первоначальное зничение, или установить значение по-умолчанию
  switch (action.type) {
    case "ADD_USER":
      return { ...state, customers: [...state.customers, action.payload] };
    case "DELETE_USER":
      return { ...state, customers: state.customers.filter((el) => el.id !== action.payload) };

    // если получили действие которое мы не знаем, мы не должны трогать стейт, поэтому его возвращаем.
    default:
      return state;
  }
};

export default customerReducer;
