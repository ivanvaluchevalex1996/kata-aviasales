/** Action — передается в виде объекста({type:"",payload:""})действие, описывает что нужно сделать. Согласно принципам функционального программирования, мы не можем изменять объект напрямую, поэтому нам нужны экшены, чтобы передать их в диспатчер и «сказать», что нужно сделать. */

const defaultState = {
  cash: 0,
  count: 0,
};
// eslint-disable-next-line default-param-last
const cashReducer = (state = defaultState, action) => {
  // если стейт undefined то нужно вернуть первоначальное зничение, или установить значение по-умолчанию
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };
    case "ADD_COUNT":
      return { ...state, count: state.count + action.payload };
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };
    case "ADD_RND":
      return { ...state, cash: state.cash + action.payload };
    // если получили действие которое мы не знаем, мы не должны трогать стейт, поэтому его возвращаем.
    default:
      return state;
  }
};

export default cashReducer;
