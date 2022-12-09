import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { login } from '../../features/authentification/authSlice';

// import { loadingToggleAction,loginAction,
// } from '../../store/actions/AuthActions';

// image
//import logo from "../../images/logo-full-white.png";
import loginbg from "./../../images/background/team.jpg";
import logo2 from './../../images/logoFooter.png';


function Login () {

	const [email, setEmail] = useState('')

	const [password, setPassword] = useState('')
  
	const dispatch = useDispatch()
  
  
	const loginuser = (e) => {
  
	  e.preventDefault();
  
	  let data = { 

		email: email,
		password: password
	  }
	  dispatch(login(data))
	}
  

  return (
	
		
		<div className="page-wraper">
			
			<div className="page-content bg-white login-style2" style={{backgroundImage:"url("+ loginbg +")", backgroundSize:"cover"}}>
				<div className="section-full">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-6 d-flex">
								<div className="text-white max-w400 align-self-center">
									<div className="logo">
										<Link to={"/"}><img src={logo2} alt="" /></Link>
									</div>
									<h2 className="m-b10">Connectez-vous maintenant</h2>
									<p className="m-b30">Ensemble en toute confiance</p>
									<ul className="list-inline m-a0">
										<li><Link to={''} className="m-r10 text-white "><i className="fa fa-facebook"></i></Link></li>
										<li><Link to={''} className="m-r10 text-white "><i className="fa fa-google-plus"></i></Link></li>
										<li><Link to={''} className="m-r10 text-white "><i className="fa fa-linkedin"></i></Link></li>
										<li><Link to={''} className="m-r10 text-white "><i className="fa fa-instagram"></i></Link></li>
										<li><Link to={''} className="m-r10 text-white"><i className="fa fa-twitter"></i></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="login-2 submit-resume p-a30 seth">
									<div className="nav">
										<form onSubmit={loginuser} className="col-12 p-a0 ">
											<p className="font-weight-600">Si vous avez un compte chez nous, veuillez vous connecter.</p>
											{/* {props.errorMessage && (
												<div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
													{props.errorMessage}
												</div>
											)}
											{props.successMessage && (
												<div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
													{props.successMessage}
												</div>
											)} */}
											<div className="form-group ">
												<label>E-Mail </label>
												<div className="input-group">
													<input type="email" className="form-control" 
														placeholder="Tapez votre adresse e-mail"  
														value={email}
														onChange={(e) => setEmail(e.target.value)}
													/>
													
												</div>
											</div>
											<div className="form-group">
												<label>Password *</label>
												<div className="input-group">
													<input
														type="password"
														className="form-control"
														value={password}
														placeholder="Tapez votre mot de passe"
														onChange={(e) =>
															setPassword(e.target.value)
														}
													/>
												
												</div>
											</div>
											<div className="text-center">
												<button className="site-button float-left" style={{ backgroundColor: "#0046c6"}}>Connecter</button>
												<Link  to="register" className="site-button-link forget-pass m-t15 float-right"><i className="fa fa-unlock-alt"></i> Inscrivez-vous</Link> 
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</div>
				<footer className="login-footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 text-center">
								<span className="float-left">© Copyright by <i className="fa fa-heart m-lr5 text-red heart"></i>
								<Link to={"#"}>Petratech </Link> </span>
								<span className="float-right">
									All rights reserved.
								</span>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
};

// const mapStateToProps = (state) => {
//     return {
//         errorMessage: state.auth.errorMessage,
//         successMessage: state.auth.successMessage,
//         showLoading: state.auth.showLoading,
//     };
// };
export default Login;