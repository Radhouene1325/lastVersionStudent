
import { axiosInstance } from "../../config/axios";
import { requests } from "../../config/requests";


export function getAllAnnonce() {

  return axiosInstance.get(requests.annonceapi.getAll )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}


export function createAnnonce(data) {
  return axiosInstance.post(requests.annonceapi.create, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function deleteAnnonce(id) {
  return axiosInstance.delete(requests.annonceapi.delete  + id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export function updateAnnonce(data) {

  return axiosInstance.put(requests.annonceapi.update + localStorage.getItem('annonceid'), {ASSIGNED: true})
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export function getAnnonceById(id) {

  return axiosInstance.get(requests.annonceapi.getbyId  + localStorage.getItem("annonceid"))
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function getAnnonceByUser(id) {
  return axiosInstance.get(requests.annonceapi.getByUserId + id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

