const intialState = {
  count: 0,
};

const counterReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'Increment':
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
