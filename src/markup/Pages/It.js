import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header2';
import Footer from '../Layout/Footer';
import { insc } from '../../features/authentification/authSlice';
import { useSelector } from 'react-redux'
//import Latestblogowl from '../Element/Owlblog2';

var bnr1 = require('./../../images/our-work/it.jpg');
var bnr2 = require('./../../images/background/bg4.jpg');

function It() {
	const cacheButtonRegisterHome = useSelector(insc)
	console.log(cacheButtonRegisterHome)
	return (
		<div className="page-wraper">
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
					<div className="container">
						<div className="dez-bnr-inr-entry">
							<h1 className="text-white"> Technologie de l'information </h1>
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={"#"}>Technologie de l'information</Link></li>
									<li>Technologie de l'information</li>
								</ul>
							</div>

						</div>
					</div>
				</div>
				<div className="content-block">
					<div className="section-full content-inner overlay-white-middle">
						<div className="container">
							<div className="row align-items-center ">
								<div className="col-md-12 col-lg-12 m-b20">
									{/* <h2 className="m-b5">Technologie de l'information</h2> */}
									{/* <h3 className="fw4">We create unique experiences</h3> */}
									<p className="m-b60 text-center">Le freelance est devenu important dans le marche de travaille.
										Vous cherchez une mission on freelance</p>
									<h2 className="m-b5">WiStudent EST LA POUR VOUS AIDEZ</h2>
								</div>
								{/* <div className="col-md-12 col-lg-6">
									<img src={require('./../../images/our-work/it.jpg')} alt="" />
								</div> */}
							</div>
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/categ/3.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Graphique désigne</h5>

										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/categ/2.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Developpeur </h5>

										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/categ/1.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Marketing Digital </h5>

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
									<h2 className="m-b10">Coursier</h2>

									{cacheButtonRegisterHome&&<Link to={"/register"} className="site-button m-t20 outline outline-2 radius-xl">Créer un compte</Link>}
								</div>
							</div>
						</div>
					</div>
					<div className="section-full content-inner-2 overlay-white-middle">
						<div className="container">
							<div className="section-head text-black text-center">
								{/* <h2 className="text-uppercase m-b0">Our Latest Blog</h2> */}

							</div>

						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)

}
export default It;