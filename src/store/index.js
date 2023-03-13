import { createStore, combineReducers } from "redux";
import cashReducer from "./cashReducer";
import customerReducer from "./customerReducer";
// подключение dev tools
import { composeWithDevTools } from "redux-devtools-extension";

/** Редюсер — это ВСЕГДА чистая функция, которая принимает как аргумент хранилище(текущий стейт) и Action.
 * Основные правила редюсеров:
В этих функциях не должно быть «side effects» (побочных эффектов). Например, нельзя делать API запрос для получения каких-либо данных
Они не должны мутировать (изменять) принятые аргументы или состояние.
Нельзя вызывать нечистые функции внутри редюсеров (например, Date.now() или Math.random()) */

const rootReducer = combineReducers({
  cashReducer,
  customerReducer,
  // или можно передать так(чтобы прописывать через ключ)
  // cashName: cashReducer,
  // customerName: customerReducer,
});

// передаем dev tools вторым праметром чтобы пользоваться им
const store = createStore(rootReducer, composeWithDevTools());

export default store;
