import { combineReducers } from "redux"
import HomeReducer from './reducers/home.reducer'
export const createReducer =  reducers => {
    return combineReducers({
        home: HomeReducer,
        ...reducers
    })
}