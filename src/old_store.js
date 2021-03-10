/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';

const initialState = {
  photos: [],
  photo: {},
  album: {},
  uploaded: false
};

const ADD_PHOTOS = 'add_photos';
const SELECT_PHOTO = 'select_photo';
const SET_PHOTO = 'set_photo';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PHOTOS:
      return {
        ...state,
        photos: [...state.photos, ...action.payload.photos]
      };
    case 'type2':
      return {};
    case 'type3':
      return {};
    default:
      return state;
  }
};

export const addPhotosAction = (photos) => ({
  type: ADD_PHOTOS,
  payload: {
    photos
  }
});

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);

export default store;
