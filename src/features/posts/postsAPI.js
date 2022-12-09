import { axiosInstance } from '../../config/axios'
import { requests } from '../../config/requests'


// authentication service
export const PostsService = {



    // craete request
    create: (data) => {

        return axiosInstance.post(requests.postsapi.create, data, { credentials: 'include' })
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    },
    getPosts: () => {
        return axiosInstance.get(requests.postsapi.getAll, { credentials: 'include' })
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    },

    /***********************getPostById radhouene */

    idPost: (id) => {
        return axiosInstance.get(requests.postsapi.getPostById + "/" + id, { credentials: 'include' })
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    },

    /*********** */


    getMyPosts: () => {
        return axiosInstance.get(requests.postsapi.myposts, { credentials: 'include' })
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    },
    like: (id,data) => {
        return axiosInstance.put(requests.postsapi.like + '/' + id,data)
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    },
    dislike: (id,data) => {
        return axiosInstance.put(requests.postsapi.dislike + '/' + id,data)
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    },
    delete: (id) => {
        return axiosInstance.delete(requests.postsapi.delete + '/' + id, { credentials: 'include' })
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    },


    createImagePost: (datafile) => {
        return axiosInstance.post(requests.postsapi.imagePost, datafile, { credentials: 'include' })
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })

    }

} 