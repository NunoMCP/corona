const reducerSwitch = (state = {}, action) => {
    if(action.type === "GET_DATA"){
        return {...state, today: action.payload, todayIndex: action.index
        }
    } else if(action.type === "GET_BEFORE_DATA"){
        return {...state, yesterday: action.payload, yesterdayIndex: action.index}
    } else if(action.type === "GET_COUNTIES"){
        return {...state, counties: action.payload}
    } else {
        return state
    }
}

export default reducerSwitch