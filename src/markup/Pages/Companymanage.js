import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import { Modal } from 'react-bootstrap';
import {Form}  from 'react-bootstrap';   
import { AuthContext } from '../../context/AuthContext';
import Profilesidebar from '../Element/Profilesidebar';
import { DeleteAnnonce, GetByUser, selectdeleteAnnonces, selectgetByUser, selectupdateAnnonces, UpdateAnnonce } from '../../features/annonce/annonceSlice';
import { useDispatch, useSelector } from 'react-redux';

function Companymanage() {

	const [company, setCompany] = useState(false);
	const annonces = useSelector(selectgetByUser);
	console.log(annonces[0], 'aaaaaaaaaaaa');
	const deleteA = useSelector(selectdeleteAnnonces);
	const updateA = useSelector(selectupdateAnnonces);
	const [updateAnnonce, setUpdateAnnonce] = useState({annonces});

	const dispatch = useDispatch();

	const { user } = useContext(AuthContext);

	useEffect(() => {

		dispatch(GetByUser(user._id));

	}, [deleteA, updateA,dispatch]);

	const [editModal, setEditModal] = useState(false);
	
	
	const handleEditClick = ( event,id) => {
        event.preventDefault();
		setEditModal(true);
		setUpdateAnnonce(annonces.find(o => o._id === id))
      
        
    };
    
	const handleChange = (e) => {
		const { value, name } = e.target;
		setUpdateAnnonce((prev) => ({
		  ...prev,
		  [name]: value,
		}));
	  };
	
	
	  const handleEditForm = () => {
		
	
		let data = { 
		  title: updateAnnonce.title,
		  description: updateAnnonce.description,
		  jobType: updateAnnonce.jobType,
		  Salary: updateAnnonce.Salary,
		  categories: updateAnnonce.categories,
		  duration: updateAnnonce.duration,
		
		 
		  id: annonces._id,
		};
		dispatch(UpdateAnnonce(data));
		setEditModal(false);
	
	  };
	
	return (
		<>
			<Header2 />
			{annonces &&
				<div className="page-content bg-white">
					<div className="content-block">
						<div className="section-full bg-white p-t50 p-b20">
							<div className="container">
								<div className="row">
									<Profilesidebar />

									<div className="col-xl-9 col-lg-8 m-b30">
										<div className="job-bx browse-job clearfix">
											<div className="job-bx-title  clearfix">
												<h5 className="font-weight-700 pull-left text-uppercase">Gérer les travaux</h5>
												<div className="float-right">
													<span className="select-title">Trier par fraîcheur</span>
													<select className="custom-btn">
														<option>tout</option>
														<option>rien</option>
														<option>lis</option>
														<option>non lis</option>
														<option>Favorites</option>
														<option>Sans étoile</option>
													</select>
												</div>
											</div>
											<table className="table-job-bx cv-manager company-manage-job">
												<thead>
													<tr>
														<th className="feature">
															<div className="custom-control custom-checkbox">
																<input type="checkbox" id="check12" className="custom-control-input selectAllCheckBox" name="example1" />
																<label className="custom-control-label" htmlFor="check12"></label>
															</div>
														</th>
														<th>Job Title</th>
														<th>Categorie</th>
														<th>Date</th>
														<th>Status</th>
													</tr>
												</thead>
												<tbody>
													{

														annonces.map((a, i) => {

															return (

																<tr>
																	<td className="feature">
																		<div className="custom-control custom-checkbox">
																			<input type="checkbox" className="custom-control-input" id="check1" name="example1" />
																			<label className="custom-control-label" htmlFor="check1"></label>
																		</div>
																	</td>
																	<td className="job-name">{a.title}

																		<ul className="job-post-info">
																			<li><i className="fa fa-map-marker"></i> {a.userId.Street} {a.userId.Country}</li>
																			<li><i className="fa fa-bookmark-o"></i> {a.jobType}</li>
																			
																		</ul>
																	</td>
																	
																	<td className="application text-primary">
																	<li><i className="fa fa-contao "></i> {a.categories}</li></td>
																	
																	
																	<td className="application text-primary">
																	<li><i className="fa fa-calendar"></i> {a.duration}</li>
																		
																																				</td>



																	
																

																	<td className="job-links">
																		<Link to={"#"} onClick={() => setCompany(true)}>
																			<i className="fa fa-eye"></i></Link>
																		<Link to={"#"}><i className="ti-trash" onClick={() => dispatch(DeleteAnnonce(a._id))}></i></Link>
																		<Link to={"#"} 
										onClick={(event) => handleEditClick(event)}
									>
										<i className="fa fa-pencil"></i>
									</Link>
																	</td>
																</tr>

															)
														})

													}
												</tbody>
											</table>
											<div className="pagination-bx m-t30 float-right">
												<ul className="pagination">
													<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> précédent</Link></li>
													<li className="active"><Link to={"#"}>1</Link></li>
													<li><Link to={"#"}>2</Link></li>
													<li><Link to={"#"}>3</Link></li>
													<li className="next"><Link to={"#"}> <i className="ti-arrow-right"></i>suivant</Link></li>
												</ul>
											</div>

											<Modal show={company} onHide={setCompany} className="modal fade modal-bx-info">
												<div className="modal-dialog my-0" role="document">
													<div className="modal-content">
														<div className="modal-header">
															<div className="logo-img">
																<img alt="" src={require("./../../images/logo/icon2.png")} />
															</div>
															<h5 className="modal-title">Nom de l'entreprise</h5>
															<button type="button" className="close" onClick={() => setCompany(false)}>
																<span aria-hidden="true">&times;</span>
															</button>
														</div>
														<div className="modal-body">
															<ul>
																<li><strong>titre de mission :</strong><p> {annonces.title}</p></li>
																<li><strong>salaire:</strong><p>{annonces.Salary}</p></li>
																<li><strong>Deseription :</strong>
																	<p>{annonces.description}</p>
																</li>
															</ul>
														</div>
														<div className="modal-footer">
															<button type="button" className="btn btn-secondary" onClick={() => setCompany(false)}>Close</button>
														</div>
													</div>
												</div>
											</Modal>

											<Modal className="modal modal-bx-info" show={editModal} onHide={setEditModal} >
												<div className="" >
													<div className="">
														<form >
															<div className="modal-header">
																<h4 className="modal-title fs-20">Modifier la tâche</h4>
																<button type="button" className="close" onClick={() => setEditModal(false)}>
																	<span>×</span>
																</button>
															</div>
															<div className="modal-body">
																<i className="flaticon-cancel-12 close" ></i>
																<div className="add-contact-box">
																	<div className="add-contact-content">
																
																		<div className="form-group ">
																			<label className="text-black font-w500">titre de mission</label>
																			<div className="contact-name">
																				<input type="text" className="form-control" autocomplete="off"
																					name="title" required="required"
																					onChange={handleChange}
																					value={updateAnnonce.title}
																				/>
																			</div>
																		</div>

												
																			<div className="form-group">
																				<label  className="text-black font-w500">Description</label>
																				<input name="description" onChange={handleChange}
																					value={updateAnnonce.description} type="text" className="form-control tags_input" autocomplete="off" />

																			</div>
																	

																		<div className="form-group">
																			<label  className="text-black font-w500">type de mission</label>
																			<Form.Control as="select" custom className="custom-select" name="jobType" autocomplete="off" onChange={handleChange} value={updateAnnonce.jobType}>
																				<option>à plein temps</option>
																				<option>à temps partiel</option>
																				<option>travail à domicile</option>

																			</Form.Control>

																		</div>


																		<div className="form-group">
																			<label  className="text-black font-w500">Salaire ($):</label>
																			<input name="Salary" onChange={handleChange} value={updateAnnonce.Salary} type="text" className="form-control" autocomplete="off" />
																		</div>



																		<div className="form-group">
																			<label  className="text-black font-w500">durée</label>
																			<input name="duration" onChange={handleChange} value={updateAnnonce.duration} type="text" className="form-control" autocomplete="off" />
																		</div>



																	</div>
																</div>
															</div>
															<div className="modal-footer">
																<button type="submit" className="btn btn-primary" onClick={handleEditForm}>Sauvegarder</button>
																{/* <button type="button" onClick={() => setEditModal(false)} className="btn btn-danger">
																	<i className="flaticon-delete-1"></i> Discard
																</button> */}
															</div>
														</form>

													</div>
												</div>
											</Modal>

										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			}
			<Footer />
		</>
	)

}
export default Companymanage;