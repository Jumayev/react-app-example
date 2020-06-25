import {RESET_ORDER, SET_ORDER_ID, GET_ORDER, GET_ORDER_SUCCESS, GET_ORDER_FAILURE} from '../actions/orderAction'

export const newOrderInitState = {
	orderId: '',
  data: '',
  loading: false,
  hasErrors: false,
}

export function newOrderReducer(state = newOrderInitState, {type, payload}) {
	switch (type) {
    case SET_ORDER_ID:
      return {...state, orderId: payload}
  	case GET_ORDER:
      return { ...state, loading: true }
    case GET_ORDER_SUCCESS:
      return { ...state,  data: payload, loading: false, hasErrors: false }
    case GET_ORDER_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    case RESET_ORDER:
      return {orderId: '', data: '', loading: false, hasError: false}
    default:
      return state
  }
}