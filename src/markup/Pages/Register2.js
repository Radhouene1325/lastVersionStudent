import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { RegistredAdvertiser, RegistredServicesProvider, selectregistererror } from '../../features/authentification/authSlice';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header3';
import { Form } from 'react-bootstrap';
// import AuthService from '../../services/AuthService';
// import { AuthContext } from '../../context/AuthContext';
import { login } from '../../features/authentification/authSlice';
// import { loadingToggleAction,loginAction,
// } from '../../store/actions/AuthActions';

// image
//import logo from "../../images/logo-full-white.png";
import loginbg from "./../../images/background/team.jpg";
import logo2 from './../../images/logo-white2.png';
import { BiBorderRadius } from 'react-icons/bi';
import etudient from "../../images/registerIcone/developpeur.png"
import client from "../../images/registerIcone/logo.png"

import entreprise from "../../images/imgRegister/2.jpeg"
import eleve from "../../images/imgRegister/1.png"

var bnr = require('../../images/background/team.jpg');
var bnr3 = require('./../../images/lines.png');



function Register2(props) {
	//a changer
	const [email, setEmail] = useState('')

	const [password, setPassword] = useState('')




	const loginuser = (e) => {

		e.preventDefault();

		let data = {

			email: email,
			password: password
		}
		dispatch(login(data))
	}
	//

	const [values, setValues] = useState({})

	const [role, setrole] = useState('');
	const errors = useSelector(selectregistererror)
	const dispatch = useDispatch();

	const onChangeHandler = (e) => {
		setValues({

			...values,
			[e.target.name]: e.target.value

		})

	}
	const onSignUp = (e) => {
		e.preventDefault();

		if (role === "advertiser") {
			dispatch(RegistredAdvertiser(values))

		}

		else {

			dispatch(RegistredServicesProvider(values))

		}
	}

	const ErrorHandler = ({ name }) => {

		return (
			<>
				{
					errors.map(e => {
						console.log(errors, "errrrrrrrrrrrr");
						return (
							<>
								{
									e.path[0] === name
									&&
									<span style={{ color: "red" }}  >{e.message}</span>
								}
							</>
						)
					})

				}
			</>
		)
	}

	return (
		// className="page-content bg-white login-style2" style={{ backgroundImage: "url(" + loginbg + ")", backgroundSize: "cover" }}
		<div className="page-wraper">
			<Header />
			{role === '' &&
				<div className="section-full content-inner-2   " style={{ backgroundImage: "url( " + bnr + ")", backgroundPosition: "container", paddingBottom: "15%" }}>
					<>
						{/* <img src={bnr} className="gfge col-sm-12" /> */}
						<div className="container mb-5  col-sm-12" style={{left:"12%"}}>
							<div className="section-head text-black text-center">
								<h2 className="m-b0" style={{ marginRight: "300px" }}> S'inscrire en tant qu'un annonceur ou étudiant </h2>
							</div>
							<div className="section-content box-sort-in button-example ">
								<div className="pricingtable-row">
									<div className="row max-w1000 " >
										<div className="col-sm-12 col-md-6 col-lg-6 " >
											<div className="pricingtable-wrapper style2 bg-white " style={{borderRadius:"20%"}}>
												<div className="pricingtable-inner">

													<img src={entreprise} style={{ widht: "50px", height: "50px" }} />
													<div className="m-t20">
														<div onClick={() => setrole('advertiser')} className="site-button radius-xl" style={{ backgroundColor: "#0046c6" }}><span className="p-lr30"> Particulier / Entreprise </span></div>
													</div>
												</div>
											</div>
										</div>

										<div className="col-sm-12 col-md-6 col-lg-6">
											<div className="pricingtable-wrapper style2 bg-white"style={{borderRadius:"20%"}}>
												<div className="pricingtable-inner">
													<img src={eleve} style={{ widht: "50px", height: "50px" }} />
													<div className="m-t20">
														<div onClick={() => setrole('serviceProvider')} className="site-button radius-xl " style={{ width: "65%", backgroundColor: "#0046c6" }}><span className="p-lr30"> Etudiant</span></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				 </div>


			}

			{
				(role === 'serviceProvider' || role === 'advertiser') && <>


					<div className="section-full" style={{ backgroundImage: `url(${bnr})`, padding: "40px" }}>

						<div className="container" >
							<div className="row" style={{ margin: "5px 0px 0px 0px" }}>
								{/* <div className="col-lg-2 col-md-2 d-flex">
								
							</div> */}
								<div className="col-lg-3 col-md-3 " >

								</div>
								<div className="col-lg-6 col-md-6 " style={{ backgroundColor: "white", padding: "20px 20px 20px 20px" }} >


									<form  >

										<div className="row">
											<div className="col-lg-4 col-md-4">
												<div className="form-group">
													<label > Nom <sub style={{ color: "red" }}>*</sub></label>
													<input name="name" onChange={onChangeHandler} className="form-control" placeholder="hello" style={{ border: "1px solid #aaa", borderRadius: "4px" }} />
													<div className="text-danger"> <ErrorHandler name='name' /></div>
												</div>
											</div>

											<div className="col-lg-4 col-md-4">
												<div className="form-group">

													<label className="font-weight-700">Prenom<sub style={{ color: "red" }}>*</sub></label>
													<input name="lastName" onChange={onChangeHandler} className="form-control" style={{ border: "1px solid #aaa", borderRadius: "4px" }} />
													<div className="text-danger"> <ErrorHandler name='lastName' /></div>
												</div>
											</div>
											<div className="col-lg-4 col-md-4">
												<div className="form-group" >
													<label className="font-weight-700">genre<sub style={{ color: "red" }}>*</sub></label>
													<Form.Control as="select" custom className="custom-select" name="Genre" onChange={onChangeHandler} style={{ border: "1px solid #aaa", borderRadius: "4px" }}>

														<option> votre sexe </option>
														<option>Femme</option>
														<option>Homme</option>
													</Form.Control >
												</div>
											</div>
										</div>

										<div className="row">
											<div className="col-lg-4 col-md-4">
												<div className="form-group">
													<label className="font-weight-700">	ville<sub style={{ color: "red" }}>*</sub></label>
													<input name="Country" onChange={onChangeHandler} className="form-control" style={{ border: "1px solid #aaa", borderRadius: "4px" }} />
													<div className="text-danger"> <ErrorHandler name='Country' /></div>
												</div>
											</div>
											<div className="col-lg-4 col-md-4">
												<div className="form-group">
													<label className="font-weight-700">	adresse<sub style={{ color: "red" }}>*</sub></label>
													<input name="Street" onChange={onChangeHandler} className="form-control" style={{ border: "1px solid #aaa", borderRadius: "4px" }} />
													<div className="text-danger"> <ErrorHandler name='Street' /></div>
												</div>
											</div>
											<div className="col-lg-4 col-md-4">
												<div className="form-group">
													<label className="font-weight-700">code Postal<sub style={{ color: "red" }}>*</sub></label>
													<input name="PostalCode" onChange={onChangeHandler} className="form-control" style={{ border: "1px solid #aaa", borderRadius: "4px" }} />
													<div className="text-danger"> <ErrorHandler name='PostalCode' /></div>
												</div>
											</div>

										</div>

										<div className="row">
											<div className="col-lg-4 col-md-4">
												<div className="form-group">
													<label className="font-weight-700">	Téléphone<sub style={{ color: "red" }}>*</sub></label>
													<input name="PhoneNumber" onChange={onChangeHandler} className="form-control" style={{ border: "1px solid #aaa", borderRadius: "4px" }} />
													<div className="text-danger"> <ErrorHandler name='PhoneNumber' /></div>
												</div>
											</div>
											<div className="col-lg-8 col-md-8">
												<div className="form-group">
													<label className="font-weight-700">	Email<sub style={{ color: "red" }}>*</sub></label>
													<input name="email" onChange={onChangeHandler} className="form-control" style={{ border: "1px solid #aaa", borderRadius: "4px" }} />
													<div className="text-danger"> <ErrorHandler name='email' /></div>
												</div>
											</div>
										</div>

										<div className="row">
											<div className="col-lg-4 col-md-4">
												<div className="form-group">
													<label className="font-weight-700">	Password<sub style={{ color: "red" }}>*</sub></label>
													<input name="password" className="form-control" type="password" defaultValue=""
														onChange={onChangeHandler}
														style={{ border: "1px solid #aaa", borderRadius: "4px" }} />
													<div className="text-danger"> <ErrorHandler name='password' /></div>
												</div>


											</div>
											{role === "serviceProvider" && <div className="col-lg-4 col-md-4">
												<div className="form-group">
													<label className="font-weight-700"> Carte d'étudiant<sub style={{ color: "red" }}>*</sub></label>
													<input name="NumCarteEtudiant" onChange={onChangeHandler} className="form-control" style={{ border: "1px solid #aaa", borderRadius: "4px" }} />
													<div className="text-danger"> <ErrorHandler name='NumCarteEtudiant' /></div>
												</div>
											</div>

											}

										</div>

									</form>
									<div className="row">
										<div className="col-lg-4 col-md-4">
											<div className="text-center bottom" style={{ margin: "10px 10px 10px 10px" }}>
												<button onClick={onSignUp} className="site-button button-md btn-block text-white"> S'inscrire</button>

											</div>
										</div>
										<div className="" col-lg-4 col-md-4>
											<div className="form-group text-left" style={{ margin: "10px 10px 10px 10px" }}>

												<Link data-toggle="tab" to="#forgot-password" className="forget-pass m-l5"><i className="fa fa-unlock-alt"></i> oublier mot de passe</Link>
											</div>
										</div>
									</div>




								</div>
								<div className="col-lg-3 col-md-3 " ></div>
								{/* <div className="col-lg2- col-md-2"></div> */}
							</div>
						</div>

					</div>
					{/* <footer className="login-footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 text-center">
								<span className="float-left">© Copyright by <i className="fa fa-heart m-lr5 text-red heart"></i>
								<Link to={"#"}>DexignZone </Link> </span>
								<span className="float-right">
									All rights reserved.
								</span>
							</div>
						</div>
					</div>
				</footer> */}

					<div></div>
				</>

			}
			{/* <Footer /> */}
		</div>
	)
}
// const mapStateToProps = (state) => {
//     return {
//         errorMessage: state.auth.errorMessage,
//         successMessage: state.auth.successMessage,
//         showLoading: state.auth.showLoading,
//     };
// };

// <div className=" page-wraper" style={{ backgroundImage: "url(" + loginbg + ")", }}>
// 	<Header />
// 	{role === '' &&
// 		<div className="section-full content-inner-2 ">
// 			<div className="container mb-5">
// 				<div className="section-head text-black text-center">
// 					<h2 className="m-b0"> Vous êtes ?</h2>
// 				</div>
// 				<div className="section-content box-sort-in button-example m-t80">
// 					<div className="pricingtable-row">
// 						<div className="row max-w1000 m-auto">
// 							<div className="col-sm-12 col-md-6 col-lg-6 ">
// 								<div className="pricingtable-wrapper style2 ">
// 									<div className="pricingtable-inner">

// 										<div className="m-t20">
// 											<div onClick={() => setrole('advertiser')} style={{ width: "70%" }} className="site-button radius-xl"><span className="p-lr30"><img src={client} style={{ width: "20%" }} /> Particulier / Entreprise /></span></div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>

// 							<div className="col-sm-12 col-md-6 col-lg-6">
// 								<div className="pricingtable-wrapper style2 ">
// 									<div className="pricingtable-inner">

// 										<div className="m-t20">
// 											<div onClick={() => setrole('serviceProvider')} className="site-button radius-xl" style={{ width: "70%" }}><span className="p-lr30"><img src={etudient} style={{ width: "20%" }} /> Etudiant</span></div>

// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>


// 	}

// 	{
// 		(role === 'serviceProvider' || role === 'advertiser') && <>


// 			<div className="section-full" style={{ backgroundImage: `url(${bnr})`, padding: "40px" }}>

// 				<div className="container" >
// 					<div className="row" style={{ margin: "5px 0px 0px 0px" }}>

// 						<div className="col-lg-3 col-md-3 " >

// 						</div>
// 						<div className="col-lg-6 col-md-6 " style={{ backgroundColor: "white", padding: "20px 20px 20px 20px" }} >


// 							<form  >

// 								<div className="row">
// 									<div className="col-lg-4 col-md-4">
// 										<div className="form-group">
// 											<label > Nom <sub style={{ color: "red" }}>*</sub></label>
// 											<input name="name" onChange={onChangeHandler} className="form-control" placeholder="hello" style={{ border: "1px solid #aaa", borderRadius: "4px" }} />
// 											<div className="text-danger"> <ErrorHandler name='name' /></div>
// 										</div>
// 									</div>

// 									<div className="col-lg-4 col-md-4">
// 										<div className="form-group">

// 											<label className="font-weight-700">Prenom<sub style={{ color: "red" }}>*</sub></label>
// 											<input name="lastName" onChange={onChangeHandler} className="form-control" style={{ border: "1px solid #aaa", borderRadius: "4px" }} />
// 											<div className="text-danger"> <ErrorHandler name='lastName' /></div>
// 										</div>
// 									</div>
// 									<div className="col-lg-4 col-md-4">
// 										<div className="form-group" >
// 											<label className="font-weight-700">genre<sub style={{ color: "red" }}>*</sub></label>
// 											<Form.Control as="select" custom className="custom-select" name="Genre" onChange={onChangeHandler} style={{ border: "1px solid #aaa", borderRadius: "4px" }}>

// 												<option> votre sexe </option>
// 												<option>Femme</option>
// 												<option>Homme</option>
// 											</Form.Control >
// 										</div>
// 									</div>
// 								</div>

// 								<div className="row">
// 									<div className="col-lg-4 col-md-4">
// 										<div className="form-group">
// 											<label className="font-weight-700">	ville<sub style={{ color: "red" }}>*</sub></label>
// 											<input name="Country" onChange={onChangeHandler} className="form-control" style={{ border: "1px solid #aaa", borderRadius: "4px" }} />
// 											<div className="text-danger"> <ErrorHandler name='Country' /></div>
// 										</div>
// 									</div>
// 									<div className="col-lg-4 col-md-4">
// 										<div className="form-group">
// 											<label className="font-weight-700">	adresse<sub style={{ color: "red" }}>*</sub></label>
// 											<input name="Street" onChange={onChangeHandler} className="form-control" style={{ border: "1px solid #aaa", borderRadius: "4px" }} />
// 											<div className="text-danger"> <ErrorHandler name='Street' /></div>
// 										</div>
// 									</div>
// 									<div className="col-lg-4 col-md-4">
// 										<div className="form-group">
// 											<label className="font-weight-700">code Postal<sub style={{ color: "red" }}>*</sub></label>
// 											<input name="PostalCode" onChange={onChangeHandler} className="form-control" style={{ border: "1px solid #aaa", borderRadius: "4px" }} />
// 											<div className="text-danger"> <ErrorHandler name='PostalCode' /></div>
// 										</div>
// 									</div>

// 								</div>

// 								<div className="row">
// 									<div className="col-lg-4 col-md-4">
// 										<div className="form-group">
// 											<label className="font-weight-700">	Téléphone<sub style={{ color: "red" }}>*</sub></label>
// 											<input name="PhoneNumber" onChange={onChangeHandler} className="form-control" style={{ border: "1px solid #aaa", borderRadius: "4px" }} />
// 											<div className="text-danger"> <ErrorHandler name='PhoneNumber' /></div>
// 										</div>
// 									</div>
// 									<div className="col-lg-8 col-md-8">
// 										<div className="form-group">
// 											<label className="font-weight-700">	Email<sub style={{ color: "red" }}>*</sub></label>
// 											<input name="email" onChange={onChangeHandler} className="form-control" style={{ border: "1px solid #aaa", borderRadius: "4px" }} />
// 											<div className="text-danger"> <ErrorHandler name='email' /></div>
// 										</div>
// 									</div>
// 								</div>

// 								<div className="row">
// 									<div className="col-lg-4 col-md-4">
// 										<div className="form-group">
// 											<label className="font-weight-700">	Password<sub style={{ color: "red" }}>*</sub></label>
// 											<input name="password" className="form-control" type="password" defaultValue=""
// 												onChange={onChangeHandler}
// 												style={{ border: "1px solid #aaa", borderRadius: "4px" }} />
// 											<div className="text-danger"> <ErrorHandler name='password' /></div>
// 										</div>


// 									</div>
// 									{role === "serviceProvider" && <div className="col-lg-4 col-md-4">
// 										<div className="form-group">
// 											<label className="font-weight-700"> Carte d'étudiant<sub style={{ color: "red" }}>*</sub></label>
// 											<input name="NumCarteEtudiant" onChange={onChangeHandler} className="form-control" style={{ border: "1px solid #aaa", borderRadius: "4px" }} />
// 											<div className="text-danger"> <ErrorHandler name='NumCarteEtudiant' /></div>
// 										</div>
// 									</div>

// 									}

// 								</div>







// 							</form>
// 							<div className="row">
// 								<div className="col-lg-4 col-md-4">
// 									<div className="text-center bottom" style={{ margin: "10px 10px 10px 10px" }}>
// 										<button onClick={onSignUp} className="site-button button-md btn-block text-white"> S'inscrire</button>

// 									</div>
// 								</div>
// 								<div className="" col-lg-4 col-md-4>
// 									<div className="form-group text-left" style={{ margin: "10px 10px 10px 10px" }}>

// 										<Link data-toggle="tab" to="#forgot-password" className="forget-pass m-l5"><i className="fa fa-unlock-alt"></i> oublier mot de passe</Link>
// 									</div>
// 								</div>
// 							</div>




// 						</div>
// 						<div className="col-lg-3 col-md-3 " ></div>

// 					</div>
// 				</div>

// 			</div>


// 			<div></div>
// 		</>

// 	}<Footer />
// </div>


// const mapStateToProps = (state) => {
//     return {
//         errorMessage: state.auth.errorMessage,
//         successMessage: state.auth.successMessage,
//         showLoading: state.auth.showLoading,
//     };
// };
export default Register2;