import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import store from "./store";
// варианты вызова функций(упрощение написания)
// dispatch({ type: "ADD_CASH", payload: 33 }); или dispatch(dec(1)) или decDispatch(1)
// можно упростить код еще больше: вме  сто dispatch(dec(1)) теперь мы сможем вызвать код вот так decDispatch(1);
// const decDispatch = (payload) => {
//   dispatch(dec(payload));
// };
// decDispatch(1);
// можно упростить еще больше импортировав  функцию bindActionCreators(),  из redux, которая связывает функцию action creator с dispatch; в таком случае не нужно помнить скольео аргументов передавать
// const decDispatch = bindActionCreators(dec, dispatch);
// const incDispatch = bindActionCreators(inc, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);
// decDispatch(1);
// incDispatch(1);
// decDispatch(1);

// или упростить еще

// const { decDispatch, incDispatch, rndDispatch } = bindActionCreators(
//   {
//     incDispatch: inc,
//     decDispatch: dec,
//     rndDispatch: rnd,
//   },
//   dispatch
// );
// decDispatch(1);
// incDispatch(1);
// rndDispatch(Math.floor(Math.random() * 10));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
