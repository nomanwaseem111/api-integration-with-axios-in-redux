import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {userReducer} from './redux/reducer/userReducer'
const rootReducer = combineReducers({
     usersList : userReducer
})

const intialState = {}

const middleware = [thunk]


const store = createStore(rootReducer,intialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store
