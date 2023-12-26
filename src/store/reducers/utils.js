// action - state management

// initial state
export const initialState = {
  ids: [],
};

// ==============================|| AUTH REDUCER ||============================== //

const utils = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_ID': {
      let temp = [...state.ids];
      const pos = state.ids.indexOf(action.payload);
      console.log(pos);
      temp.splice(pos, 1);

      return {
        ...state,
        ids: temp,
      };
    }
    case 'ADD_ID': {
      let temp = [...state.ids, action.payload];
      return {
        ...state,
        ids: temp,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default utils;
