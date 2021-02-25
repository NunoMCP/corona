const reducerSwitch = (state = {}, action) => {
    if(action.type === "GET_DATA"){
        return {...state, thisData: action.payload.data
        }
    } else {
        return state
    }
}

export default reducerSwitch