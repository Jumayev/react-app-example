export const GET_METHODS = 'GET_METHODS'
export const GET_METHODS_SUCCESS = 'GET_METHODS_SUCCESS'
export const GET_METHODS_FAILURE = 'GET_METHODS_FAILURE'

export const getMethods = methods => ({
	type: GET_METHODS
})

export const getMethodsSucces = methods => ({
	type: GET_METHODS_SUCCESS,
	payload: methods
})

export const getMethodsFailure = () => ({
	type: GET_METHODS_FAILURE,
})

export function fetchMethods() {
	return async dispatch => {
		dispatch(getMethods())
		try{
			const response = await fetch('/api/method')
			const data = await response.json()
			dispatch(getMethodsSucces(data))

		} catch (error) {
			dispatch(getMethodsFailure())
		}

	}
}