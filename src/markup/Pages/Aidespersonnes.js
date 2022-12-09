import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header2';
import Footer from '../Layout/Footer';
import { insc } from '../../features/authentification/authSlice';
import { useSelector } from 'react-redux'
//import Latestblogowl from '../Element/Owlblog2';

var bnr1 = require('./../../images/our-work/pic5.jpg');
var bnr2 = require('./../../images/background/bg4.jpg');

function Aidespersonnes() {
	const cacheButtonRegisterHome = useSelector(insc)
	console.log(cacheButtonRegisterHome)
	return (
		<div className="page-wraper">
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
					<div className="container">
						<div className="dez-bnr-inr-entry">
							<h1 className="text-white">Aides aux personnes agées </h1>
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={"#"}>Aides aux personnes agées</Link></li>
									<li>À propos de nous</li>
								</ul>
							</div>

						</div>
					</div>
				</div>
				<div className="content-block">
					<div className="section-full content-inner overlay-white-middle">
						<div className="container">
							<div className="row align-items-center m-b2">
								<div className="col-md-12 col-lg-12 m-b20">


									<p className="m-b80" style={{ textAlign: "center" }}>Avoir une aide pours s'occuper des personne âgées, handicape et enfant, est devenu un besoin MAJEUR. Avec l'énorme charge de la vie quotidien avoir le temps est devenu très limite,</p>
									<h2 className="m-b-20">WiStudent EST LA POUR VOUS AIDEZ</h2>

								</div>
								<div className="col-md-12 col-lg-6">
									{/* <img src={require('./../../images/our-work/pic5.jpg')} alt="" /> */}
								</div>
							</div>
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-12 m-b60">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/4.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Accompagnement</h5>

										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/7.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Aide soignante </h5>

										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/5.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Aménagement</h5>

										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/10.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Coursier</h5>

										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/9.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Jardinage</h5>
											{/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p> */}
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/8.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Nettoyage</h5>
											{/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.</p> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="section-full content-inner-2 call-to-action overlay-black-dark text-white text-center bg-img-fix" style={{ backgroundImage: "url(" + bnr2 + ")" }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<h2 className="m-b10">Faites une différence</h2>

									{cacheButtonRegisterHome && <Link to={"/register"} className="site-button m-t20 outline outline-2 radius-xl">Créer un compte
									</Link>}
								</div>

							</div>
						</div>
					</div>
					<div className="section-full content-inner-2 overlay-white-middle">
						<div className="container">


						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)

}
export default Aidespersonnes;