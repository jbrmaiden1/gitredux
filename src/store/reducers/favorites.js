const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_REQUEST':
      return { ...state, loading: true };
    case 'ADD_FAVORITE_SUCCESS':
      return {
        ...state,
        data: [...state.data, action.payload.repository],
        loading: false,
        error: '',
      };
    case 'ADD_FAVORITE_FAILURE':
      return { ...state, error: action.payload.message, loading: false };
    default:
      return state;
  }
}
