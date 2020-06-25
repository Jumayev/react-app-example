import { combineReducers } from 'redux'

import methodsReducer from './methodsReducer'
import {newOrderReducer} from './orderReducer'

const rootReducer = combineReducers({
	methods: methodsReducer,
	newOrder: newOrderReducer,
})

export default rootReducer