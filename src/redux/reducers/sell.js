import * as actionTypes from "../actions/actionTypes";
const initialState = {
  isbn: null,
  title: "",
  edition: "",
  authors: [],
  price: 0,
  course_name: "",
  course_code: "",
  condition: "Used",
  images: [],
  error: null,
};

const campaignReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SELL_SET_BOOK_INFO:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.SELL_SET_MORE_INFO:
      return { ...state, ...payload };
    case actionTypes.SELL_SET_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case actionTypes.CAMPAIGN_SUBMITTED:
      return initialState;

    default:
      return state;
  }
};

export default campaignReducer;
