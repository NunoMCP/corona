import corona from "../api/corona"

const indexStartDate = new Date("02/27/2020")
const indexCurrentDate = new Date()

export const getData = (date) => {
    return async (dispatch) => {
        const response = await corona.get("get_entry/" + date)
        dispatch({
            type: "GET_DATA",
            payload: response.data,
            index: Math.floor((indexCurrentDate.getTime() - indexStartDate.getTime())/(1000*3600*24))
        })
    }
}

export const getBeforeData = (date) => {
    return async (dispatch) => {
        const response = await corona.get("get_entry/" + date)
        dispatch({
            type: "GET_BEFORE_DATA",
            payload: response.data,
            index: Math.floor((indexCurrentDate.getTime() - indexStartDate.getTime())/(1000*3600*24)) - 1
        })
    }
}