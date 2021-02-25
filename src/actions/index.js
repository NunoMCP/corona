import corona from "../api/corona"

export const getData = (date) => {
    return async (dispatch) => {
        const response = await corona.get("get_entry/" + date)
        dispatch({
            type: "GET_DATA",
            payload: response.data
        })
    }
}