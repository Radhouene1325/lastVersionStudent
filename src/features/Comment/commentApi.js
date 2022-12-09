import { axiosInstance } from '../../config/axios'
import { requests } from '../../config/requests'



export const CommentsService = {



    // craete request
    create: (data) => {

        return axiosInstance.post(requests.commentsapi.create, data, { credentials: 'include' })
            .then(res => {
                return res.data.data
            })
            .catch(err => {
                return err
            })
    },
    /*************reponce sou commentaire */
    reponcecommentaireapi: (data) => {
        return axiosInstance.post(requests.commentsapi.repondre, data, { credentials: 'include' })
            .then(res => {
                return res.data.data
            })
            .catch(err => {
                return err
            })
    },

    /*********************end */

    getByIdCommtaire: (id) => {
        return axiosInstance.get(requests.commentsapi.idCommebt + id, { credentials: 'include' })
            .then(res => {
                return res.data.data
            })
            .catch(err => {
                return err
            })

    },
    cmtdelet: (id) => {
        return axiosInstance.delete(requests.commentsapi.deletcomnt + id, { credentials: 'include' })
            .then(res => {
                return res.data.data
            })
            .catch(err => {
                return err
            })
    },
    getAllComments: (data) => {
        return axiosInstance.get(requests.commentsapi.dispaly, data, { credentials: 'include' })
            .then(res => {
                return res.data.data
            })
            .catch(err => {
                return err
            })
    },

    updateCommtaireById: (id, data) => {
        return axiosInstance.put(requests.commentsapi.updateCommtaire+id, data, { credentials: 'include' })
            .then(res => {
                return res.data.data
            })
            .catch(err => {
                return err
            })

    }

}

// export const shwoCommentsService = {

//     getAllComments: () => {
//         return axiosInstance.get(requests.commentsapi.dispaly, { credentials: 'include' })
//             .then(res => {
//                 return res
//             })
//             .catch(err => {
//                 return err
//             })
//     },
// }

