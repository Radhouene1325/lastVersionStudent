import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Headeruser from './../Layout/Headeruser';
import Footer from './../Layout/Footer';
import { Form } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { useDispatch } from 'react-redux';
import { UpdateUser, uploadavatar } from '../../features/users/userSlice';
import Profilesidebar from '../Element/Profilesidebar';
import "./index.css"
function Companyprofile() {


	const { user } = useContext(AuthContext)

	const [userdetails, setuserdetails] = useState(user)
	const dispatch = useDispatch()
	/*
		const handlePicChanged = (e) => {
	
			let fdata = new FormData()
			fdata.append('avatar', e.target.files[0])
			let data = {
				id: user._id, 
				data: fdata
			}
			console.log(e.target.files[0],'aaaiodnosjqvqrfefgrgrgrgrfr');
			dispatch(uploadavatar(data))
		}
	*/

	const handleChange = e => {

		const { name, value } = e.target;
		setuserdetails(prevState => ({
			...prevState,
			[name]: value
		}));

		console.log(userdetails);
	};


	const handleupdate = () => {

		let data = {
			id: user._id,
			data: userdetails
		}
		dispatch(UpdateUser(data))

	}



	return (
		<>
			<Headeruser />

			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white p-t50 p-b20">
						<div className="container">
							<div className="row">
								<Profilesidebar />

								<div className="col-xl-9 col-lg-8 m-b30">
									<div className="job-bx submit-resume">
										<div className="" style={{ display: "flex", justifyContent: "space-between" }}>
											<img style={{ width: "7%", height: "7%",borderRadius:"60px" }} alt="photo profil" src={'http://localhost:4000/file/' + user.avatar} />
											<h5 className="font-weight-700 pull-left text-uppercase">Profil de la société</h5>
											<div className="job-bx-title clearfix">

												<Link to={"/"} style={{ backgroundColor: "#0046c6"}} className="site-button right-arrow button-sm float-right">Retour</Link>
											</div>
										</div>
										<form>
											<div className="row m-b30">
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Nom de l'entreprise</label>
														<input type="text" className="form-control" name="name" value={userdetails.name} onChange={handleChange} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Email</label>
														<input type="email" className="form-control" name="email" value={userdetails.email} onChange={handleChange} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>site web</label>
														<input type="text" className="form-control" name="Genre" value={userdetails.Genre} onChange={handleChange} />
													</div>
												</div>

												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Catégorie</label>
														<Form.Control as="select" custom className="custom-select">
															<option>Web Designer</option>
															<option>Web Developer1</option>
														</Form.Control>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Pays</label>
														<input type="text" className="form-control" name="Country" value={userdetails.Country} onChange={handleChange} />
													</div>
												</div>

											</div>

											<div className="job-bx-title clearfix">
												<h5 className="font-weight-700 pull-left text-uppercase">Coordonnées</h5>
											</div>
											<div className="row m-b30">
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Téléphone</label>
														<input type="text" className="form-control" name="PhoneNumber" value={userdetails.PhoneNumber} onChange={handleChange} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Email</label>
														<input type="email" className="form-control" name="email" value={userdetails.email} onChange={handleChange} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Pays</label>
														<input type="text" className="form-control" name="Country" value={userdetails.Country} onChange={handleChange} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Ville</label>
														<input type="text" className="form-control" name="Street" value={userdetails.Street} onChange={handleChange} />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Zip</label>
														<input type="text" className="form-control" name="PostalCode" value={userdetails.PostalCode} onChange={handleChange} />
													</div>
												</div>


											</div>
											{/* 											
											<div className="job-bx-title clearfix">
												<h5 className="font-weight-700 pull-left text-uppercase">Social link</h5>
											</div>
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Facebook</label>
														<input type="text" className="form-control" placeholder="https://www.facebook.com/" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Twitter</label>
														<input type="email" className="form-control" placeholder="https://www.twitter.com/" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Google</label>
														<input type="text" className="form-control" placeholder="https://www.google.com/" />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Linkedin</label>
														<input type="email" className="form-control" placeholder="https://www.linkedin.com/" />
													</div>
												</div> 
											</div>*/}
											<button type="button" onClick={() => handleupdate()} className="site-button m-b30" style={{ backgroundColor: "#0046c6"}}>Enregistrer</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
			<Footer />
		</>
	)
}
export default Companyprofile;