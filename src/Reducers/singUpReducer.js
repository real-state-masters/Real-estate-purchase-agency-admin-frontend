const initialValue = {
  email: ""
};

const singUpReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "SAVE_EMAIL": {
      return { ...state, email: action.payload };
    }
    default:
      return state;
  }
};

export default singUpReducer;