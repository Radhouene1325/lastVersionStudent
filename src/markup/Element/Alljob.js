import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment'
import { GetAllAnnonce, selectAnnonces } from '../../features/annonce/annonceSlice';
import { useDispatch, useSelector } from 'react-redux';


function Alljob() {
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
						<h2 className="m-b5">Recent Jobs</h2>  
					
					</div>
					<div className="align-self-end">
						<Link to={"/browse-job-list"} className="site-button button-sm"> Voir plus <i className="fa fa-long-arrow-right"></i></Link>
					</div> 
				</div>
				<div className="row">
					<div className="col-lg-12">
						<ul className="post-job-bx browse-job">
							{annonces.map((item, index) => (
								<li key={index}>
									<div className="post-bx" >
										<div className="d-flex m-b40">
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
						
					</div>
					
				</div>
			</div>
		</div>
	)
}
export default Alljob;