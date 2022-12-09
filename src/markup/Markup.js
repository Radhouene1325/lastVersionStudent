import React from 'react';
import { Route, Switch } from 'react-router-dom';

//import Homepage from './Pages/Homepage1';
import Homepage2 from './Pages/Homepage2';

import Jobprofile from './Pages/Jobprofile';
import Jobsalert from './Pages/Jobsalert';
import Jobsavedjobs from './Pages/Jobsavedjobs';
import Changepasswordpage from './Pages/Changepasswordpage';
import Companyprofile from './Pages/Companyprofile';
import UserDetail from './Pages/UserDetail'
import Componypostjobs from './Pages/Componypostjobs';
import Companymanage from './Pages/Companymanage';
import Aboutus from './Pages/Aboutus';
import Jobdetail from './Pages/Jobdetail';

import Browsejoblist from './Pages/Browsejoblist';
import Browsejobgrid from './Pages/Browsejobgrid';
import Browsejobfilterlist from './Pages/Browsejobfilterlist';
import Browsejobfiltergrid from './Pages/Browsejobfiltergrid';

import Categoryalljob from './Pages/Categoryalljob';
import Categorycompanyjob from './Pages/Categorycompanyjob';
import Categorydesignationsjob from './Pages/Categorydesignationsjob';
import Categoryjobs from './Pages/Categoryjobs';
import Categorylocationjobs from './Pages/Categorylocationjobs';
import Categoryskilljobs from './Pages/Categoryskilljobs';
//import Profil from './Pages/profilserviceprovider';
import Profiladvertiser from './Pages/ProfilAdvertiser';

//import Loginpage1 from './Pages/Loginpage1';
//import Loginpage2 from './Pages/Loginpage2';
//import Loginpage3 from './Pages/Loginpage3';

//import Register1 from './Pages/Register1';
import Register2 from './Pages/Register2';
import Error404 from './Pages/Error404';

import Contact from './Pages/Contact';
import RatingPage from './Element/RatingPage';
import ConfirmApplication from './Pages/ConfirmApplication'
import Candidature from './Pages/Candidature'
//import Blogclassic from './Pages/Blogclassic';
//import Blogclassicsidebar from './Pages/Blogclassicsidebar';
//import Blogdetailgrid from './Pages/Blogdetailgrid';
//import Blogdetailgridsidebar from './Pages/Blogdetailgridsidebar';
//import Blogleftimg from './Pages/Blogleftimg';
//import Blogdetail from './Pages/Blogdetail';
import ScrollToTop from './Element/ScrollToTop';
import LeftBar from './Layout/LeftBar'
const Markup= () => {
	return(
		<>
			<div className="page-wraper">
				<Switch>
					<Route path='/' exact component={Homepage2} />
					
					<Route path='/index-2' exact component={Homepage2} />
					
					<Route path='/jobs-profile' exact component={Jobprofile} />
					
					<Route path='/jobs-alerts' exact component={Jobsalert} />
					<Route path='/jobs-saved-jobs' exact component={Jobsavedjobs} />
					<Route path='/jobs-change-password' exact component={Changepasswordpage} />
						
						
					<Route path='/company-profile' exact component={Companyprofile} />
					
					<Route path='/company-post-jobs' exact component={Componypostjobs} />
					<Route path='/company-manage-job' exact component={Companymanage} />
					
					<Route path='/user-detail' exact component={UserDetail} />
					
					
					<Route path='/about-us' exact component={Aboutus} />
					<Route path='/job-detail' exact component={Jobdetail} />
					
					<Route path='/browse-job-list' exact component={Browsejoblist} />
					<Route path='/browse-job-grid' exact component={Browsejobgrid} />
					<Route path='/browse-job-filter-list' exact component={Browsejobfilterlist} />
					<Route path='/browse-job-filter-grid' exact component={Browsejobfiltergrid} />
					
					<Route path='/category-all-jobs' exact component={Categoryalljob} />
					<Route path='/category-company-jobs' exact component={Categorycompanyjob} />
					<Route path='/category-designations-jobs' exact component={Categorydesignationsjob} />
					<Route path='/category-jobs' exact component={Categoryjobs} />
					<Route path='/category-location-jobs' exact component={Categorylocationjobs} />
					<Route path='/category-skill-jobs' exact component={Categoryskilljobs} />
				    <Route path='/profiladvertiser' exact component={Profiladvertiser} />

					{/* 
					
					<Route path='/login' exact component={Loginpage2 } />
					<Route path='/login-2' exact component={Loginpage1} />
					<Route path='/login-3' exact component={Loginpage3} /> */}
					
					 <Route path='/register' exact component={Register2} />
					{/* <Route path='/register-2' exact component={Register2} /> */}
					<Route path='/error-404' exact component={Error404} />
					
					<Route path='/contact' exact component={Contact} />
					<Route path='/confirm' exact component={ConfirmApplication}/>
					<Route path='/rating ' exact component={RatingPage}/>
					<Route path='/leftBar' exact component={LeftBar}/>
					<Route path='/candidat' exact component={Candidature}/>

				</Switch>
			</div>
			<ScrollToTop />
		</>	
	)
	
	
}

export default Markup;