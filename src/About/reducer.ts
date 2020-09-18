import {
  REDUX,
  REDUX_LOGGER,
  REDUX_SAGA,
  EMOTION,
} from './constants';

const initialState = () => ({
  name: ''
});

const about = (state = initialState(), { type, payload }: any) => {
  switch(type) {
    case REDUX:
    case REDUX_LOGGER:
    case REDUX_SAGA:
    case EMOTION:
      return state;
    default:
      return state;
    }
};

export default about;