import axios from "axios";
import { GET_USER, POST_USER, base_url, DELETE_USER, UPDATE_USER } from "../../constant";

let get_user = (action) => {
    console.log(action, "acrtion from action");
    return axios.get(base_url + GET_USER).then((res) => {
        console.log(res);
        let data = res.data;
        let status = res.status
        return { data, status }
    })
}

let post_user = (action) => {
    console.log("post_user api.js")
    return axios.post(base_url + POST_USER, action.payload).then((res) => {
        let data = res.data
        let status = res.status
        return { data, status }
    })
}
let delete_user = (action) => {
    console.log(base_url + DELETE_USER + action.payload, "base_url + DELETE_USER + action.payload");
    return axios.delete(base_url + DELETE_USER + action.payload).then((res) => {
        console.log(res, "res api delete");
        let data = res.data
        let status = res.status

        return { data, status }
    })
}

let update_user = (action) => {
    console.log(action, "ation update");
    return axios.put(base_url + UPDATE_USER + action.payload._id, action.payload)
        .then((res) => {
            let data = res.data
            let status = res.status
            return { data, status }
        })
}


export { get_user, post_user, delete_user, update_user }