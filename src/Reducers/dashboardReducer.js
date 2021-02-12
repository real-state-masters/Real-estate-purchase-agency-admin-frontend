const initialValue = {
  properties: [],
  showFilters: false,
  showEdit: false,
  email: "",
};

const dashboardReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_PROPERTIES": {
      //   console.log(state);
      //   console.log(action);
      //   console.log(action.payload);
      return { ...state, properties: [...action.payload.properties] };
    }
    case "ADD_FILTERS":
      return { ...state, showFilters: action.payload };
    case "ADD_EDIT_CARD":
      return { ...state, showEdit: action.payload };
    case "GET_ALL_PROPERTIES": {
      return { ...state, properties: [...action.payload.properties] };
    }
    case "SAVE_EMAIL": {
      return { ...state, email: action.payload };
    }
    default:
      return state;
  }
};

export default dashboardReducer;
