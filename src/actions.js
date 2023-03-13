// можно деструктурировать, чтобы не прописывать такие конструкции: store.dispatch({ type: "ADD_CASH", payload: 33 });
// const { dispatch } = store;
// теперь можно вызывать вот так
// dispatch({ type: "ADD_CASH", payload: 33 });
//
// Action Creator -функция которая создает объекты action. Упрощает код. чтобы не прописывать такие еонструкции:
// dispatch({ type: "ADD_CASH", payload: 33 });
// dispatch({ type: "ADD_CASH", payload: Math.floor(Math.random() * 10) }), можно вынести функции отдельно, и вызывать их потом вот так: dispatch(dec(1));
//
//
//
//
export const dec = (payload) => ({ type: "GET_CASH", payload });
export const inc = (payload) => ({ type: "ADD_CASH", payload });
export const rnd = (payload) => ({ type: "GET_CASH", payload });
