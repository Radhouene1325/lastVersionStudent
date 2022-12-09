import React from 'react';

import { BrowserRouter as Router, Switch } from "react-router-dom";

import './css/plugins.css';
import './css/style.css';
import './css/templete.css';
import './css/skin/skin-1.css';
import './plugins/slick/slick.min.css';
import './plugins/slick/slick-theme.min.css';

import ScrollToTop from './markup/Element/ScrollToTop';
import Aboutus from './markup/Pages/Aboutus.js';
import Browsejobfiltergrid from './markup/Pages/Browsejobfiltergrid';
import Browsejobfilterlist from './markup/Pages/Browsejobfilterlist';
import Browsejobgrid from './markup/Pages/Browsejobgrid';
import Browsejoblist from './markup/Pages/Browsejoblist';
import Categoryalljob from './markup/Pages/Categoryalljob';
import Categorycompanyjob from './markup/Pages/Categorycompanyjob';
import Categorydesignationsjob from './markup/Pages/Categorydesignationsjob';
import Categoryjobs from './markup/Pages/Categoryjobs';
import Categorylocationjobs from './markup/Pages/Categorylocationjobs';
import Categoryskilljobs from './markup/Pages/Categoryskilljobs';
import Changepasswordpage from './markup/Pages/Changepasswordpage';
import Companymanage from './markup/Pages/Companymanage';
import Companyprofile from './markup/Pages/Companyprofile';
import Componypostjobs from './markup/Pages/Componypostjobs';
import Contact from './markup/Pages/Contact';
import Error404 from './markup/Pages/Error404';
import Homepage2 from './markup/Pages/Homepage2';
import Jobdetail from './markup/Pages/Jobdetail';
import Jobprofile from './markup/Pages/Jobprofile';
import Jobsalert from './markup/Pages/Jobsalert';
import Jobsavedjobs from './markup/Pages/Jobsavedjobs';
import Register2 from './markup/Pages/Register2';
import Loginpage2 from './markup/Pages/Loginpage2';
import PublicRoute from './HigherOrderComponents/PublicRoute';
import PrivateRoute from './HigherOrderComponents/PrivateRoute';
import LogoutPage from './markup/Layout/Logout';
import Profiladvertiser from './markup/Pages/ProfilAdvertiser';
import Aidespersonnes from './markup/Pages/Aidespersonnes';
import Restauration from './markup/Pages/Restauration';
import It from './markup/Pages/It';
import services from './markup/Pages/Services';
import RatingPage from './markup/Element/RatingPage';
import LeftBar from './markup/Layout/LeftBar';
import FAQ from './markup/Pages/FAQ';
import PrivacyPolicy from './markup/Pages/PrivacyPolicy'
	;
const App = () => {

	return (

		<>

			<Router>
				<Switch>

					<PrivateRoute path='/jobs-profile' role={["admin", "serviceProvider", "advertiser"]} component={Jobprofile} />
					<PrivateRoute path='/jobs-alerts' role={["admin", "serviceProvider", "advertiser"]} component={Jobsalert} />
					<PrivateRoute path='/jobs-saved-jobs' role={["admin", "serviceProvider", "advertiser"]} component={Jobsavedjobs} />
					<PrivateRoute path='/jobs-change-password' role={["admin", "serviceProvider", "advertiser"]} component={Changepasswordpage} />
					<PrivateRoute path='/company-profile' role={["admin", "serviceProvider", "advertiser"]} component={Companyprofile} />
					<PrivateRoute path='/profiladvertiser' role={["admin", "serviceProvider", "advertiser"]} component={Profiladvertiser} />
					<PrivateRoute path='/company-post-jobs' role={["admin", "serviceProvider", "advertiser"]} component={Componypostjobs} />
					<PrivateRoute path='/company-manage-job' role={["admin", "serviceProvider", "advertiser"]} component={Companymanage} />
					{/* <PrivateRoute path='/aboutus'role={["admin","serviceProvider","advertiser"]}  component={Aboutus} /> */}
					<PrivateRoute path='/job-detail' role={["admin", "serviceProvider", "advertiser"]} component={Jobdetail} />
					<PrivateRoute path='/browse-job-list' role={["admin", "serviceProvider", "advertiser"]} component={Browsejoblist} />
					<PrivateRoute path='/browse-job-grid' role={["admin", "serviceProvider", "advertiser"]} component={Browsejobgrid} />
					<PrivateRoute path='/browse-job-filter-list' role={["admin", "serviceProvider", "advertiser"]} component={Browsejobfilterlist} />
					<PrivateRoute path='/browse-job-filter-grid' role={["admin", "serviceProvider", "advertiser"]} component={Browsejobfiltergrid} />
					<PrivateRoute path='/category-all-jobs' role={["admin", "serviceProvider", "advertiser"]} component={Categoryalljob} />
					<PrivateRoute path='/category-company-jobs' role={["admin", "serviceProvider", "advertiser"]} component={Categorycompanyjob} />
					<PrivateRoute path='/category-designations-jobs' role={["admin", "serviceProvider", "advertiser"]} component={Categorydesignationsjob} />
					<PrivateRoute path='/category-jobs' role={["admin", "serviceProvider", "advertiser"]} component={Categoryjobs} />
					<PrivateRoute path='/category-location-jobs' role={["admin", "serviceProvider", "advertiser"]} component={Categorylocationjobs} />
					<PrivateRoute path='/category-skill-jobs' role={["admin", "serviceProvider", "advertiser"]} component={Categoryskilljobs} />
					<PublicRoute path='/login' component={Loginpage2} />
					<PublicRoute path='/Rating' component={RatingPage} />
					{/* <PrivateRoute path='/logout'role={["admin","serviceProvider","advertiser"]}  component={LogoutPage} /> */}


					{/* 
					<PrivateRoute path='/login-2'  component={Loginpage1} />
				<PrivateRoute path='/login-3'  component={Loginpage3} /> */}

					{/* <PrivateRoute path='/register-2'  component={Register1} /> */}
					<PublicRoute path='/register' component={Register2} />
					{/* <PrivateRoute path='/registerChoise'  component={RegisterChoise} />  */}
					<PublicRoute path='/error-404' component={Error404} />
					<PublicRoute path='/contact' component={Contact} />
					<PublicRoute path='/' exact component={Homepage2} />
					<PublicRoute path='/aidespersonnes' exact component={Aidespersonnes} />
					<PublicRoute path='/Services' exact component={services} />
					<PublicRoute path='/restauration' exact component={Restauration} />
					<PublicRoute path='/it' exact component={It} />
					<PublicRoute path='/privacypolicy' component={PrivacyPolicy} />
					<PublicRoute path='/FAQ' component={FAQ} />
					<PublicRoute path='/aboutus' component={Aboutus} />
				</Switch>
			</Router>
			<ScrollToTop />
		</>
	)

}

export default App;