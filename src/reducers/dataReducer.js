const reducerSwitch = (state = {}, action) => {
    if(action.type === "GET_DATA"){
        console.log(action.payload)
        return {...state, thisData: action.payload.data
        }
    } else {
        return state
    }
}

export default reducerSwitch