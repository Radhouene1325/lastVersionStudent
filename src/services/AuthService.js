
 //const API = 'http://102.219.178.17:4000'
const API = 'http://localhost:4000'


const AuthService = {

    login: function (userInfo) {

        return fetch(`${API}/users/login`,

            {
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers: {
                    'Content-Type': 'application/json'
                },

                credentials: 'include' // gérer token

            }).then((res, errors) => {
                if (res.status === 404) {
                    return errors
                }
                else {
                    if (res.status !== 401)
                        return res.json().then(jsonData => jsonData)
                    else
                        return { isAuthenticated: false }
                }
            })
    },

    logout: function () {
        return fetch(`${API}/users/logout`, { credentials: 'include' })
            .then(res => res.json())
            .then(jsonData => jsonData)
            
        window.location.href = "/";
    },


    isAuthenticated: function () {
        return fetch(`${API}/users/authenticated`, { credentials: 'include' })
            .then(res => {
                if (res.status !== 401)
                    return res.json().then(jsonData => jsonData)
                else
                    return { isAuthenticated: false, user: { email: "", role: "" } }
            })


    },
}
export default AuthService

//     formatError: function (errorResponse) {

//         switch (errorResponse.error.message) {
//             case 'EMAIL_EXISTS':
//                 //return 'Email already exists';
//                 swal("Oops", "Email already exists", "error");
//                 break;
//             case 'EMAIL_NOT_FOUND':
//                 //return 'Email not found';
//                 swal("Oops", "Email not found", "error", { button: "Try Again!", });
//                 break;
//             case 'INVALID_PASSWORD':
//                 //return 'Invalid Password';
//                 swal("Oops", "Invalid Password", "error", { button: "Try Again!", });
//                 break;
//             case 'USER_DISABLED':
//                 return 'User Disabled';

//             default:
//                 return '';
//         }
//     },
