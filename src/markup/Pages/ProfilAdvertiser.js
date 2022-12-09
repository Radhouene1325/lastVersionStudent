import React, { useContext, useState } from 'react';
//import './posts.css'
import { Link } from 'react-router-dom';
import Headeruser from './../Layout/Headeruser';
import Footer from './../Layout/Footer';
//import {Form} from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { useDispatch } from 'react-redux';
import moment from 'moment'
//import { UpdateUser, uploadavatar } from '../../features/users/userSlice';
import Profilesidebar from '../Element/Profilesidebar';
//import Post from '../Element/Post' ;
import Jobsection from './../Element/Jobsection';
import Alljob from '../Element/Alljob';
import Post from '../Element/Post';

function Profiladvertiser() {

	const { user } = useContext(AuthContext)

	const [userdetails, setuserdetails] = useState(user)
	const dispatch = useDispatch()

	return (
		<>
			<Headeruser />

			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white p-t50 p-b20">
						<div className="container">
							<div className="row" >
								<Profilesidebar />
								<div className="col-xl-9 w-60 col-lg-8 col-md-12  col-sm-12  m-b30">
									<div className="job-bx submit-resume">
										<div className="">
											<Post />
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			<div className="notifications">


			</div>

			<Footer />
		</>
	)
}
export default Profiladvertiser;