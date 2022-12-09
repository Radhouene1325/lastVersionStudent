import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header2';
import Footer from './../Layout/Footer';
import PageTitle from './../Layout/PageTitle';
import { axiosInstance } from '../../config/axios';
import { useDispatch, useSelector } from 'react-redux';
import { GetAnnonceById, selectupdateAnnonces, UpdateAnnonce } from '../../features/annonce/annonceSlice';
import { Alert, message } from 'antd';


var bnr = require('./../../images/banner/bnr1.jpg');

const blogGrid = [
	{
		image: require('./../../images/blog/grid/pic1.jpg'),
	},
	{
		image: require('./../../images/blog/grid/pic2.jpg'),
	},
	{
		image: require('./../../images/blog/grid/pic3.jpg'),
	},
	{
		image: require('./../../images/blog/grid/pic4.jpg'),
	},
]

function Jobdetail() {

	const dispatch = useDispatch()
	const single = useSelector(state => state.annonce.getId)
	console.log(single, 'single');
	useEffect((id) => {
		dispatch(GetAnnonceById(id))
	}, []);

	const [dispalysucessalert, setdispalysucessalert] = useState(false)
	const handleAssigned = () => {

		// axiosInstance.put('http://localhost:4000/annonces/update/' + localStorage.getItem('annonceid'), {ASSIGNED: true})
		// 	.then(res => {

		// 	})

		dispatch(UpdateAnnonce({ ASSIGNED: true }))
	}
	const updateAnnonce = useSelector(selectupdateAnnonces)

	useEffect(() => {

		if (updateAnnonce === 'success') {
			window.alert("annonce assigné avec succées")

		}

	}, [updateAnnonce])



	return (
		<>
			<Header />
			{single &&
				<div className="page-content bg-white">
					<div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bnr + ")" }}>
						<PageTitle activeName="Détail du poste" motherName="Home" />
					</div>
					<div className="content-block">
						<div className="section-full content-inner-1">
							<div className="container">
								<div className="row">
									<div className="col-lg-4">
										<div className="sticky-top">
											<div className="row">
												<div className="col-lg-12 col-md-6">
													<div className="m-b30">
														<img src={require("./../../images/blog/grid/pic1.jpg")} alt="" />
													</div>
												</div>
												<div className="col-lg-12 col-md-6">
													<div className="widget bg-white p-lr20 p-t20  widget_getintuch radius-sm">
														<h4 className="text-black font-weight-700 p-t10 m-b15">Détails du poste</h4>
														<ul>
															<li><i className="ti-location-pin"></i><strong className="font-weight-700 text-black">adresse</strong><span className="text-black-light"></span>{single.userId.Street} {single.userId.Country}</li>
															<li><i className="ti-money"></i><strong className="font-weight-700 text-black">Salaire</strong>{single.Salary} $</li>
															<li><i className="ti-shield"></i><strong className="font-weight-700 text-black">durée</strong>{single.duration}</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>


									<div className="col-lg-8">
										<div className="job-info-box">
											<h3 className="m-t0 m-b10 font-weight-700 title-head">
												<Link to={"#"} className="text-secondry m-r30">{single.title}</Link>
											</h3>

											<h5 className="font-weight-600">

												Description de l'emploi</h5>
											<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
											<p>{single.description}</p>
											<h5 className="font-weight-600">Comment s'inscrire</h5>
											<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
											<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>

											{

												!single.ASSIGNED ?

													<button onClick={handleAssigned} className="site-button ml-3" pointer="cursor">assigné</button>

													:
													<button type='primary' className='btn btn primary ml-3 ' disabled='true' style={{ backgroundColor: 'gray', color: "black" }} >assigné</button>
											}

										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-full content-inner">
							<div className="container">
								<div className="row">

									{blogGrid.map((item, index) => (

										<div className="col-xl-3 col-lg-6 col-md-6" key={index}>
											<div className="m-b30 blog-grid">
												<div className="dez-post-media dez-img-effect "> <Link to={"/blog-details"}><img src={item.image} alt="" /></Link> </div>
												<div className="dez-info p-a20 border-1">
													<div className="dez-post-title ">
														<h5 className="post-title"><Link to={"/blog-details"}>Titre du billet de blog</Link></h5>
													</div>
													<div className="dez-post-meta ">
														<ul>
															<li className="post-date"> <i className="ti-location-pin"></i> London </li>
															<li className="post-author"><i className="ti-user"></i>By <Link to={"#"}>Jone</Link> </li>
														</ul>
													</div>
													<div className="dez-post-text">
														<p> All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
													</div>
													<div className="dez-post-readmore">
														<Link to={"/blog-details"} title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">LIRE LA SUITE</span></Link>
													</div>
												</div>
											</div>
										</div>
									))}

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
export default Jobdetail;