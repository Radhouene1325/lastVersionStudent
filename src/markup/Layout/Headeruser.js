import React, {Component, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import Logout from './Logout';
import LogoutPage from './Logout';
import { AuthContext } from '../../context/AuthContext';
import AuthService from '../../services/AuthService';
import { useDispatch } from 'react-redux';
import { uploadavatar } from '../../features/users/userSlice';

var bnr3 = require('./../../images/background/bg3.jpg');

function Header2 (){
	const { user } = useContext(AuthContext)
	const { isAuth } = useContext(AuthContext);
	const dispatch = useDispatch()

	function LogoutHanlder() {
 
		console.log("..logout");
	
		AuthService.logout().then((jsonData) => {
   
		  if (jsonData.success) {
  
			setUser(jsonData.user);
			setIsAuth(false);
			localStorage.clear("userdetails");
		  
		  }
	window.location.replace('/login')
		});
   
	  }

	const handlePicChanged = (e) => {

		let fdata = new FormData()
		fdata.append('avatar', e.target.files[0])
		let data = {
			id: user._id,
			data: fdata
		}

		dispatch(uploadavatar(data))
	}
	const { setUser, setIsAuth } = useContext(AuthContext);

		return(
			<>
			<header className="site-header mo-left header border-bottom fullwidth"
			
			>
				
				<div className="sticky-header main-bar-wraper navbar-expand-lg">
					<div className="main-bar clearfix">
						<div className="container clearfix">
							
							<div className="logo-header mostion">
								<Link to={"./"}><img src={require('./../../images/logo.png')} className="logo" alt="" /></Link>
							</div>
							
							<button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
								<span></span>
								<span></span>
								<span></span>
							</button>
							
							<div className="extra-nav">
								<div className="extra-cell">
									{/*  {!isAuth ?
									<>
									<Link to={"/register"} className="site-button"><i className="fa fa-user"></i> Sign Up</Link>
									<Link to={"/login"} className="site-button"><i className="fa fa-lock"></i> Login</Link>
									</>	
									:
										
								}*/}
								{/* <li className="nav-item dropdown" style={{ opacity: 1 }}>
          
									<div className= "createFormAvatar">
								<img src={'http://localhost:4000/file/' + user.avatar}  />
								</div>
								</li> */}

								{/*<LogoutPage/>*/}
								<button  className="site-button" style={{ backgroundColor: "#0046c6"}} onClick={LogoutHanlder}>
									<i className="fa fa-lock"></i> Logout 
								    </button>
								
							
								
								</div>
								</div>
							
							
							<div className="header-nav navbar-collapse collapse myNavbar justify-content-start" id="navbarNavDropdown">
								<ul className="nav navbar-nav">
									<li className="active">
										<Link to={"./"}>Home<i className="dez-page"></i></Link>
										
						
							
									</li>
									
									
																		
									
								
								</ul>			
							</div>
						</div>
					</div>
				</div>				
			</header>
			
			{/*  Model END */}
			</>
		)
	
}

export default Header2;