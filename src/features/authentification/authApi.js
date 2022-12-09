

import { axiosInstance } from "../../config/axios";
import { requests } from "../../config/requests";



export function registerServicesProvider(data) {
  
    return axiosInstance.post(requests.authapi.registerServiceProvider, data )
      .then(res => {
          return res
      })
      .catch(err => {
          return err
      })


  }

  export function registredAdvertiser(data) {
  
    return axiosInstance.post(requests.authapi.registerAdvertiser, data )
      .then(res => {
          return res
      })
      .catch(err => {
        
          return err
      })
  }


  // login request

  export function Login(data) {

        return axiosInstance.post(requests.authapi.login, data , {credentials : 'include'} )
            .then(res => {
                return res
            }
            )
            .catch(err => {
                return err
            }
            )
           
    }

    