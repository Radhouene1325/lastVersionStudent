import { axiosInstance } from "../../config/axios"
import { requests } from "../../config/requests"

export function uploadAvatar(data) {
    return axiosInstance.put(requests.userapi.uploadAvatar +data.id, data.data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
export function updateUser(data) {
    return axiosInstance.put(requests.userapi.updateUser +data.id, data.data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}
