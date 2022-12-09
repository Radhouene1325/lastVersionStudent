import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header2';
import Footer from '../Layout/Footer';
import { insc } from '../../features/authentification/authSlice';
import { useSelector } from 'react-redux'
//import Latestblogowl from '../Element/Owlblog2';

var bnr1 = require('./../../images/our-work/rest.jpg');
var bnr2 = require('./../../images/background/bg4.jpg');

function Restauration() {
	const cacheButtonRegisterHome = useSelector(insc)
	console.log(cacheButtonRegisterHome)
	return (
		<div className="page-wraper">
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bnr1 + ")" }}>
					<div className="container">
						<div className="dez-bnr-inr-entry">
							<h1 className="text-white">Restauration/Hôtellerie  </h1>
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={"#"}>Restauration/Hôtellerie</Link></li>
									<li>Restauration/Hôtellerie</li>
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
									
									{/* <h3 className="fw4">We create unique experiences</h3> */}
									<p className="m-b60 text-center">Hôtellerie et Restauration sont deux domaines particulièrement intéressant car ils sont formateur, est accessible à tout le monde et toujours ouvert au recrutement de travail a temps partiel. Les patrons sont
										toujours en maque de personnel et d’y trouver n'est pas évident?.
										Etudiants, êtes vous a la recherche de mi-temps dans cet domaine?</p>
									<h3 className="fw4">On vous propose Ici une liste indéterminable de mission disponible.</h3>
									{/* <Link to={"#"} className="site-button">Read More</Link> */}
								</div>
								{/* <div className="col-md-12 col-lg-6">
									<img src={require('./../../images/our-work/rest.jpg')} alt="" />
								</div> */}
							</div>
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/categ/8.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Plongeur</h5>

										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/categ/7.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Agent de salle </h5>

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
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/categ/651.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Réception</h5>

										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/categ/5.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Nettoyage</h5>

										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12 m-b30">
									<div className="icon-bx-wraper p-a30 center bg-gray radius-sm">
										<div className="icon-md text-primary m-b20"> <Link to={"#"} className="icon-cell text-primary"><img src={require('./../../images/Categories/categ/4.jpeg')}></img></Link> </div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">Aide-cuisinier</h5>

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
									{/* <h2 className="m-b10">Coursier</h2>
									<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
									{cacheButtonRegisterHome && <Link to={"/register"} className="site-button m-t20 outline outline-2 radius-xl">
										Créer un compte</Link>}
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
export default Restauration;