const REQUESTED = 'redux/photos_list/requested';
const RECEIVED = 'redux/photos_list/received';

const requested = () => ({
  type: REQUESTED
});

const received = (data) => ({
  type: RECEIVED,
  payload: {
    data
  }
});

export const addPhotos = (albumId, start, limit = 6) => (dispatch) => {
  dispatch(requested());

  let fetchUrl = `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`;
  if (albumId) fetchUrl += `&albumId=${albumId}`;

  fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => dispatch(received(data)));
};

const initialState = {
  isLoading: false,
  data: []
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED:
      return { ...state, isLoading: true };
    case RECEIVED:
      return {
        isLoading: false,
        data: [...state.data, ...action.payload.data]
      };
    default:
      return state;
  }
};

export default photosReducer;
