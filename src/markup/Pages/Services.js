import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header2';
import Footer from '../Layout/Footer';
import { insc } from '../../features/authentification/authSlice';
import { useSelector } from 'react-redux'
//import Latestblogowl from '../Element/Owlblog2';

var bnr1 = require('./../../images/background/bg1.jpg');
var bnr2 = require('./../../images/background/bg4.jpg');

function Service() {

	const cacheButtonRegisterHome = useSelector(insc)
	console.log(cacheButtonRegisterHome)
	return (
		<div className="page-wraper">
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
					<div className="container">
						<div className="dez-bnr-inr-entry">
							<h1 className="text-white">Services </h1>
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={"#"}>Services</Link></li>
									<li>À propos de nous</li>
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
									{/* <h2 className="m-b5">Differentes services</h2> */}
									{/* <h3 className="fw4">We create unique experiences</h3> */}
									<p className="m-b60 text-center">Une forte demande sur les services dans le marche de travaille, Ce type de missions
										Est une bonne opportunité pour vous enrichirez vos expériences professionnels,</p>
									<h2 className="m-b5">WiStudent EST LA POUR VOUS AIDEZ</h2>
									{/* <p className="m-b15">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.</p> */}
									{/* <Link to={"#"} className="site-button">Read More</Link> */}
								</div>
								{/* <div className="col-md-12 col-lg-6">
									<img src={require('./../../images/our-work/pic5.jpg')} alt="" />
								</div> */}
							</div>
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/categ/14.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Téléperformance</h5>

										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/categ/13.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Vendeur </h5>

										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/categ/12.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Soutien scolaire</h5>

										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/categ/11.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Bâtiments</h5>

										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/categ/10.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Livraison</h5>

										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/categ/9.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Préparateur de commande </h5>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{cacheButtonRegisterHome && <div className="section-full content-inner-2 call-to-action overlay-black-dark text-white text-center bg-img-fix" style={{ backgroundImage: "url(" + bnr2 + ")" }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<h2 className="m-b10">Make a Difference</h2>

									<Link to={"/register"} className="site-button m-t20 outline outline-2 radius-xl">Create an Account</Link>
								</div>
							</div>
						</div>
					</div>}
					<div className="section-full content-inner-2 overlay-white-middle">
						<div className="container">
							<div className="section-head text-black text-center">


							</div>

						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	)

}
export default Service;