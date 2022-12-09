import React, { useContext }  from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import AuthService from '../../services/AuthService';

// import { logout } from '../../store/actions/AuthActions';
// import { isAuthenticated } from '../../store/selectors/AuthSelectors';

function LogoutPage(props){

 
   const { setUser, setIsAuth } = useContext(AuthContext);
   const history = useHistory();
   function LogoutHanlder() {

     console.log("..logout");
 
     AuthService.logout().then((jsonData) => {

       if (jsonData.success) {
         setUser(jsonData.user);
         setIsAuth(false);
         localStorage.clear("userdetails");
         
        window.location.href('/login')
         
       }

     });

   }
 
 
    return(
        <>
            			
			<button  className="site-button" onClick={LogoutHanlder}>
				<i className="fa fa-lock"></i> Logout 
			</button>
        </>
    )
} 


export default LogoutPage;