import React from 'react';
import {Link} from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import SavedJobs from './../Element/SavedJobs';
import Profilesidebar from '../Element/Profilesidebar';

function Jobsavedjobs(){	
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
									<SavedJobs />
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

export default Jobsavedjobs;