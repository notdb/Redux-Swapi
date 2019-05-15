import { FETCH_PEOPLE_START, FETCH_PEOPLE_SUCCESS } from "../actions";

const initialState = {
  // Array characters, Boolean fetching, null error
  characters: [],
  fetching: false,
  error: ""
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_PEOPLE_START:
      return {
        ...state,
        fetching: true,
        error: ""
      };
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: "",
        characters: action.payload
      };
    default:
      return state;
  }
};
