import axios from "axios"

export default axios.create({
    baseURL: "https://covid19-api.vost.pt/Requests/",
    headers: {
        Accept: "*/*",
    }
})