import React, {  useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import {Form}  from 'react-bootstrap';         

import Profilesidebar from '../Element/Profilesidebar';
import { useDispatch } from 'react-redux';
import { CreateAnnonce } from '../../features/annonce/annonceSlice';
import userSlice from '../../features/users/userSlice';
import { AuthContext } from '../../context/AuthContext';






function Componypostjobs(){
	
	
	const [values, setValues] = useState({})
	const {user}=useContext(AuthContext)

	const dispatch=useDispatch()

	const onChangeHandler = (e) => {
		setValues({

		   ...values,
		   [e.target.name]: e.target.value,
		   userId: user._id,

		})

	 }

	 const OnCreate = () =>{

        dispatch(CreateAnnonce(values))
        
    }


	return(
		<>
			<Header2 />
			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white p-t50 p-b20">
						<div className="container">
							<div className="row">
							<Profilesidebar/>

								<div className="col-xl-9 col-lg-8 m-b30">
									<div className="job-bx submit-resume">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Publier une mission</h5>
											<Link to={"/company-profile"} style={{ backgroundColor: "#0046c6"}} className="site-button right-arrow button-sm float-right">Retour</Link>
										</div>
										<form>
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Titre</label>
														<input name="title" onChange={onChangeHandler} type="text" className="form-control" placeholder="Entrer le titre de mission" />
													</div>
												</div>
												 <div className="col-lg-6 col-md-6">
													<div className="form-group">

														<label>Categorie</label>
														<Form.Control as="select" custom className="custom-select" name="categories" onChange={onChangeHandler}>
															<option>Aides personnes agé</option>
															<option>Services</option>
															<option>IT</option>
															<option>Restauration/Hotellerie</option>
														</Form.Control>
													</div>
												</div> 
											
												<div className="col-lg-12 col-md-12">
													<div className="form-group">
														<label>Description</label>
														<input name="description" onChange={onChangeHandler} type="text" className="form-control tags_input" />
														
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Type d'emploi</label>
														<Form.Control as="select" custom className="custom-select" name="jobType" onChange={onChangeHandler}>
															<option>à plein temps</option>
															<option>à temps partiel</option>
															<option>travail à domicile</option>
														
														</Form.Control>
													</div>
												</div>
									
											

												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Salaire ($):</label>
														<input name="Salary" onChange={onChangeHandler} type="text" className="form-control" placeholder="e.g. 10000" />
													</div>
												</div>

												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Date:</label>
														<input name="duration" onChange={onChangeHandler} type="text" className="form-control" placeholder="JJ/MM/AAAA" />
													</div>
												</div>
												
												{/* <div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Post_Number</label>
														<Form.Control as="select" custom className="custom-select" name="region" onChange={onChangeHandler}>
															<option>New York</option>
															<option>London</option>
															<option>Los Angeles</option>
														</Form.Control>
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="form-group">
														<label>Location</label>
														<input type="text" className="form-control" placeholder="London" />
													</div>
												</div> */}
												
											</div>
											<button onClick={OnCreate}  style={{ backgroundColor: "#0046c6"}}  type="button" className="site-button m-b30">Publier</button>
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
export default Componypostjobs;