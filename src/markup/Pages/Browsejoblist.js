//import React from 'react';
//import {Link} from 'react-router-dom';
import Header from './../Layout/Header2';
import Footer from './../Layout/Footer';
import PageTitle from './../Layout/PageTitle';
import Jobfindbox from './../Element/Jobfindbox';

import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment'
import { GetAllAnnonce, selectAnnonces } from '../../features/annonce/annonceSlice';
import { useDispatch, useSelector } from 'react-redux';


//Images
import Icon1 from './../../images/logo/icon1.png';
import bnr from './../../images/banner/bnr1.jpg';
import { insc } from '../../features/authentification/authSlice';

const jobPost =[
	{ image: Icon1},{ image: Icon1},{ image: Icon1},
	{ image: Icon1},{ image: Icon1},{ image: Icon1},
]
const brandLogo = [
	{ image: Icon1},{ image: Icon1},{ image: Icon1},
	{ image: Icon1},{ image: Icon1},{ image: Icon1},
	{ image: Icon1},{ image: Icon1},{ image: Icon1},
]

function Browsejoblist(){

	const cacheButtonRegisterHome = useSelector(insc)
	console.log(cacheButtonRegisterHome)
	const dispatch = useDispatch();
	const history = useHistory()
	const annonces = useSelector(selectAnnonces);
	useEffect(() => {
		dispatch(GetAllAnnonce());
	}, []);


	return(
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + bnr + ")" }}>
					<PageTitle motherName="Home" activeName="Browse Job List" />
				</div>
				<Jobfindbox />
				<div className="content-block">
					<div className="section-full browse-job p-b50">
						<div className="container">
							<div className="row">
								<div className="col-xl-9 col-lg-8 col-md-7">
									<div className="job-bx-title clearfix">
										<h5 className="font-weight-700 pull-left text-uppercase">2269 Jobs Found</h5>
										<div className="float-right">
											<span className="select-title">Sort by freshness</span>
											<select className="custom-btn">
												<option>Last 2 Months</option>
												<option>Last Months</option>
												<option>Last Weeks</option>
												<option>Last 3 Days</option>
											</select>
										</div>
									</div>
									<ul className="post-job-bx browse-job">
							{annonces.map((item, index) => (
								<li key={index}>
									<div className="post-bx" >
										<div className="d-flex m-b30">
											<div className="job-post-company">
												<span><img alt="" src={'http://localhost:4000/getfile/' + item.userId.avatar} /></span>
											</div>
											<div className="job-post-info">
												<h4 onClick={() => {  localStorage.setItem('annonceid', item._id)  ; history.push('/job-detail') }}>{item.title}</h4>
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
									<div className="pagination-bx m-t30">
										<ul className="pagination">
											<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
											<li className="active"><Link to={"#"}>1</Link></li>
											<li><Link to={"#"}>2</Link></li>
											<li><Link to={"#"}>3</Link></li>
											<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
										</ul>
									</div>
								</div>
								<div className="col-xl-3 col-lg-4 col-md-5">
									<div className="sticky-top">
										{/* <div className="candidates-are-sys m-b30">
											<div className="candidates-bx">
												<div className="testimonial-pic radius"><img src={require('./../../images/testimonials/pic3.jpg')} alt="" width="100" height="100" /></div>
												<div className="testimonial-text">
													<p>I just got a job that I applied for via careerfy! I used the site all the time during my job hunt.</p>
												</div>
												<div className="testimonial-detail"> <strong className="testimonial-name">Richard Anderson</strong> <span className="testimonial-position">Nevada, USA</span> </div>
											</div>
										</div> */}
										{/* <ul className="company-logo-wg sidebar bg-white job-bx m-b30 clearfix">
											{brandLogo.map((item,index)=>(
												<li className="brand-logo" key={index}>
													<Link to={"#"}><img src={item.image} alt="" /></Link>
												</li>
											))}	
										</ul>								 */}
									{cacheButtonRegisterHome&&	<div className="quote-bx">
											<div className="quote-info">
												<h4>Make a Difference with WiStudent!</h4>
												{/* <p>Your resume in minutes with JobBoard resume assistant is ready!</p> */}
												<Link to={"/register"} className="site-button">Create an Account</Link>
											</div>
										</div>}
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
export default Browsejoblist;