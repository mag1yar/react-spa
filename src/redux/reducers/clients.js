const initialState = {
  items: [],
  item: null,
  isLoaded: false,
};

const clients = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CLIENTS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };
    case 'SELECT_CLIENT':
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default clients;
