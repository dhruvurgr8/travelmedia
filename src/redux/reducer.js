const initialState = {
  data: null,
};
const reducer = (state = initialState, action) => {
  if (action.type == "FETCH_DATA") {
    return { ...state, data: action.payload };
  }
  return state;
};
export default reducer;
