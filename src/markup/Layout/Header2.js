import React, {Component, useContext, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import Logout from './Logout';
import LogoutPage from './Logout';
import { AuthContext } from '../../context/AuthContext';
import AuthService from '../../services/AuthService';

var bnr3 = require('./../../images/background/bg3.jpg');

function Header2 (){
	
	const { isAuth } = useContext(AuthContext);

	const history = useHistory();
	const { setUser, setIsAuth } = useContext(AuthContext);
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

		return(
			<>
			<header className="site-header mo-left header border-bottom fullwidth" >
				
				<div className="sticky-header main-bar-wraper navbar-expand-lg">
					<div className="main-bar clearfix">
						<div className="container clearfix">
							
							<div className="logo-header mostion">
								<Link to={"./"}><img src={require('./../../images/logoHeader.png')} className="logo" alt="" /></Link>
							</div>
							
							<button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
								
								<span></span>
								<span></span>
								<span></span>
							</button>
							
							<div className="extra-nav">
								<div className="extra-cell">
									{!isAuth ?
									<>
									<Link to={"/register"} className="site-button" style={{ backgroundColor: "#0046c6"}}><i className="fa fa-user"></i> S'inscrire</Link>
									<Link to={"/login"} className="site-button" style={{ backgroundColor: "#0046c6"}}><i className="fa fa-lock"></i> Connexion</Link>
									</>	
									:
									<div>
									<Link to={"/company-profile"} className="site-button" style={{ backgroundColor: "#0046c6"}}><i className="fa fa-user"></i> My Profil </Link>
									<button  className="site-button" onClick={LogoutHanlder} style={{ backgroundColor: "#0046c6"}}>
									<i className="fa fa-lock"></i> Se déconnecter 
								    </button>
                                   </div>
								}</div>
							</div>
							
							<div className="header-nav navbar-collapse collapse myNavbar justify-content-start" id="navbarNavDropdown">
								<ul className="nav navbar-nav">
									<li className="active">
										<Link to={"./"}>Accueil<i className="dez-page"></i></Link>
									</li>
									
									
										
											<li><Link to={"/aboutus"} className="dez-page">A propos</Link></li>
											
												
								</ul>			
							</div>
						</div>
					</div>
				</div>				
			</header>
			{/*  Model Start */}
			{/* <Modal show={show} onHide={handleClose} className=" lead-form-modal"  centered >
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<button type="button" className="close" onClick={handleClose}>
							<span aria-hidden="true">&times;</span>
						</button>
						<div className="modal-body row m-a0 clearfix">
							<div className="col-lg-6 col-md-6 overlay-primary-dark d-flex p-a0" style={{backgroundImage: "url("+ bnr3 +")",  backgroundPosition:"center", backgroundSize:"cover" }}>
								<div className="form-info text-white align-self-center">
									<h3 className="m-b15">Login To You Now</h3>
									<p className="m-b15">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry.</p>
									<ul className="list-inline m-a0">
										<li><Link to={"#"} className="m-r10 text-white"><i className="fa fa-facebook"></i></Link></li>
										<li><Link to={"#"} className="m-r10 text-white"><i className="fa fa-google-plus"></i></Link></li>
										<li><Link to={"#"} className="m-r10 text-white"><i className="fa fa-linkedin"></i></Link></li>
										<li><Link to={"#"} className="m-r10 text-white"><i className="fa fa-instagram"></i></Link></li>
										<li><Link to={"#"} className="m-r10 text-white"><i className="fa fa-twitter"></i></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 p-a0">
								<div className="lead-form browse-job text-left">
									<form>
										<h3 className="m-t0">Personal Details</h3>
										<div className="form-group">
											<input value="" className="form-control" placeholder="Name"/>
										</div>	
										<div className="form-group">
											<input value="" className="form-control" placeholder="Mobile Number"/>
										</div>
										<div className="clearfix">
											<button type="button" className="btn-primary site-button btn-block">Submit </button>
										</div>
									</form>
								</div>
							</div>
						</div>	
					</div>
				</div>	
			
					
			</Modal> */}
			{/*  Model END */}
			</>
		)
	
}

export default Header2;