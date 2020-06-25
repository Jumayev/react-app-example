export const SET_ORDER_ID = 'SET_ORDER_ID'
export const GET_ORDER = 'GET_ORDER'
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS'
export const GET_ORDER_FAILURE = 'GET_ORDER_FAILURE'
export const RESET_ORDER = 'RESET_ORDER'

export const setOrderId = data => ({
	type: SET_ORDER_ID,
	payload: data.orderId
})

export const getOrder = () => ({
	type: GET_ORDER
})

export const getOrderSucces = data => ({
	type: GET_ORDER_SUCCESS,
	payload: data
})

export const getOrderFailure = () => ({
	type: GET_ORDER_FAILURE,
})

export const resetOrder = () => ({
	type: RESET_ORDER,
})

export function fetchOrder(id) {
	return async dispatch => {
		dispatch(getOrder())
		try{
			const response = await fetch(`/api/order/${id}`)
			const data = await response.json()
			dispatch(getOrderSucces(data))

		} catch (error) {
			dispatch(getOrderFailure())
		}

	}
}