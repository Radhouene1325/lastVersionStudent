import React, { useEffect ,useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment'
import { GetAllAnnonce, selectAnnonces } from '../../features/annonce/annonceSlice';
import { useDispatch, useSelector } from 'react-redux';
import { insc, selectloginstatus } from '../../features/authentification/authSlice';


function Jobsection() {

	const [index,setIndex]=useState(false)
	console.log(index)
	/***********cacher bouton inscrire page home****** */
	const cacheButtonRegisterHome = useSelector(insc)
	console.log(cacheButtonRegisterHome)

	/****************** *************/

	const dispatch = useDispatch();
	const history = useHistory()
	const annonces = useSelector(selectAnnonces);
	useEffect(() => {
		dispatch(GetAllAnnonce());
	}, []);
	return (
		<div className="section-full bg-white content-inner-2">
			<div className="container">
				<div className="d-flex job-title-bx section-head">
					<div className="mr-auto">

						<h2 className="m-b5">Missions récentes </h2>
						<Link to={"/browse-job-list"} className="site-button button-sm" style={{ backgroundColor: "#0046c6"}}>Voir plus <i className="fa fa-long-arrow-right"></i></Link>
					</div>
					{/* <div className="align-self-end">
						<Link to={"/browse-job-list"} className="site-button button-sm">Browse All Jobs <i className="fa fa-long-arrow-right"></i></Link>
					</div> */}
				</div>
				<div className="row">
					<div className="col-lg-9">
						<ul className="post-job-bx browse-job">
							{annonces.map((item, index) => (
								<li key={index}>
									<div className="post-bx" >
										<div className="d-flex m-b30">
											<div className="job-post-company">
												<span><img alt="" src={'http://localhost:4000/getfile/' + item.userId.avatar} /></span>
											</div>
											<div className="job-post-info">
												<h4 onClick={() => { localStorage.setItem('annonceid', item._id); history.push('/job-detail') }}>{item.title}</h4>
												<ul>
													<li><i className="fa fa-map-marker"></i>{item.userId.Street},{item.userId.Country}</li>
													<li><i className="fa fa-bookmark-o"></i> {item.jobType}</li>
													<li><i className="fa fa-clock-o"></i>{moment(item.createdAt).format('DD-MM-YYYY')}</li>
												</ul>
											</div>
										</div>
										<div className="d-flex">
											<div className="job-time mr-auto">
												<span> {item.jobType}</span>
											</div>
											<div className="salary-bx">
												<span>{item.Salary}$</span>
											</div>
										</div>
										<label className="like-btn">
											<input type="checkbox" />
											<span className="checkmark"></span>
										</label>
									</div>
								</li>
							))}

						</ul>
						{index&&<input label ="hoome"></input>}

					</div>
					{ cacheButtonRegisterHome&&<div className="col-lg-3" >
						<div className="sticky-top">

							<div className="quote-bx">
								<div className="quote-info">
									<h4>Faites la différence avec votre présence en ligne !</h4>

									<Link to={"/register"} className="site-button" style={{ backgroundColor: "#0046c6"}}>Créer un compte</Link>
								</div>
							</div>
						</div>
					</div>}
				</div>
			</div>
		</div>
	)
}
export default Jobsection;