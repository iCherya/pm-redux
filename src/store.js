import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case 'type1':
      return {};
    case 'type2':
      return {};
    case 'type3':
      return {};
    default:
      return state;
  }
};

const initialState = {
  photos: []
};
const store = createStore(reducer, initialState);

export default store;
