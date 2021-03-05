import corona from "../api/corona"

//dia 0
const indexStartDate = new Date("02/27/2020")
const indexCurrentDate = new Date()
const indexValue = Math.floor((indexCurrentDate.getTime() - indexStartDate.getTime())/(1000*3600*24))

export const getData = (date) => {
    return async (dispatch) => {
        const response = await corona.get("get_entry/" + date)
        dispatch({
            type: "GET_DATA",
            payload: response.data,
            index: indexValue
        })
    }
}

export const getBeforeData = (date) => {
    return async (dispatch) => {
        const response = await corona.get("get_entry/" + date)
        dispatch({
            type: "GET_BEFORE_DATA",
            payload: response.data,
            index: indexValue - 1
        })
    }
}