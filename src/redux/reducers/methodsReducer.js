import {GET_METHODS, GET_METHODS_SUCCESS, GET_METHODS_FAILURE} from '../actions/methodsAction'

export const initialState = {
  methods: '',
  loading: false,
  hasErrors: false,
}


export default function methodsReducer(state = initialState, {type, payload}) {
  switch (type) {
  	case GET_METHODS:
      return { ...state, loading: true }
    case GET_METHODS_SUCCESS:
      return { methods: payload, loading: false, hasErrors: false }
    case GET_METHODS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}