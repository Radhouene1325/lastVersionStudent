import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header2';
import Footer from './../Layout/Footer';
import Jobcategories from './../Element/Jobcategories';
import Jobsection from './../Element/Jobsection';
import Owltestimonial from './../Element/Owlblog1';
import Latestblogowl from './../Element/Owlblog2';
import Jobfindbox from '../Element/Jobfindbox';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Carouselhome from "../Element/carouselHomePage2"
import "./index.css"
var bnr1 = require('./../../images/main-slider/slide1.jpg');
var bnr2 = require('./../../images/background/bg4.jpg');
var bnr3 = require('./../../images/background/bg3.jpg');

function Homepage2() {
	const navigate = useHistory()
	return (
		<>
			<Header />
			<div className="page-content ">
				<Carouselhome />

				<Jobfindbox />
				<div className="section-full job-categories  bg-white ">


					<div className="container">
						<div className="row">
							<div className="col-md-12 col-lg-12 m-b20">
								<h2 className="m-b5" style={{ textAlign: "center", fontfamily: "poppins", fontWeight: "700", color: "MediumBlue" }}>QUI SOMMES-NOUS !  </h2>
							</div>
							<div className="col-md-12 col-lg-12 m-b20" >
								<p style={{ fontSize: "15px", color: "black" }}  >Quoi que cela signifie pour vous, il n'y a rien de plus personnel que la route du succès. C'est pourquoi nous avons créé une plateforme pour vous aider à trouver votre chemin. À l'aide d'une technologie axée sur les données et d'outils personnalisés, les employeurs peuvent associer d'excellents candidats. Parce que notre objectif est d'aider chacun à trouver sa propre version du succès </p>
								<p style={{ fontSize: "15px", color: "black" }}>Nous croyons que tout le monde devrait pouvoir bâtir une carrière enrichissante.
									C'est pourquoi la mission de WiStudent est de permettre à chacun de réussir. Nous nous efforçons de fournir les outils et les opportunités permettant à chacun de trouver un sens et de la valeur à son travail, quels que soient ses capacités, ses antécédents ou sa position
								</p>
								<p style={{ fontSize: "15px", color: "black" }}>WiStudent est le première et unique plateforme dans la Tunisie qui rassemble des étudiants, des entreprises de toutes tailles et des particuliers (seniors) pour réseauter, interagir et nouer des partenariats dans un environnement sécuritaire et convivial.</p>
								<p style={{ fontSize: "15px", color: "black" }}>Cette plateforme multicritère est pensée, conçu et mis à disposition dans le seul but d'optimiser votre recherche, que ce soit de candidats ou de recruteurs. Divers conseils, astuces et informations utiles vous aideront à mieux gérer vos demandes.</p>
							</div>
						</div>
						<div className="row align-items-center m-b50">
							<div className="col-md-12 col-lg-12 m-b20">
								<h2 className="m-b5" style={{ textAlign: "center", fontFamily: "poppins", fontWeight: "700", color: "MediumBlue" }}> NOS VALEURS</h2>
							</div>



						</div>


						<div className="row " >

							<div className="row sp20">
								<div className="col-lg-4 col-md-6 col-sm-6"  >
									<div className="card mt-2" style={{ width: "18rem", height: "18rem" }}>
										<img src={require("./../../images/confiance.png")} className="card-img-top" style={{ width: "5rem" }} />
										<div className="card-body">
											<h5 className="card-title">Confiance</h5>
											<p className="card-text">Agissant avec intégrité, rigueur et transparence, notre équipe s'engage à offrir un service hors pair et à mériter votre confiance</p>

										</div>
									</div>

								</div>
								<div className="col-lg-4 col-md-6 col-sm-6" >

									<div className="card mt-2" style={{ width: "18rem", height: "18rem" }}>
										<img src={require("./../../images/responsabilte.png")} className="card-img-top" style={{ width: "5rem" }} />
										<div className="card-body">
											<h5 className="card-title">Responsabilité</h5>
											<p className="card-text">Nous construisons avec vous des partenariats à long terme. Nous avons à cœur votre problème et la réussite de votre projet</p>

										</div>
									</div>


								</div>
								<div className="col-lg-4 col-md-6 col-sm-6" >


									<div className="card mt-2" style={{ width: "18rem", height: "18rem" }}>
										<img src={require("./../../images/support.png")} className="card-img-top" style={{ width: "5rem" }} />
										<div className="card-body">
											<h5 className="card-title">Support</h5>
											<p className="card-text">7/7 et 24/24, L’écoute active des besoins de nos employés et de nos clients construit la confiance, qui se reflète dans la qualité de notre service</p>

										</div>
									</div>


								</div>


								<div className="col-lg-4 col-md-6 col-sm-6" >


									<div className="card mt-4" style={{ width: "18rem", height: "18rem" }}>
										<img src={require("./../../images/support.png")} className="card-img-top" style={{ width: "5rem" }} />
										<div className="card-body">
											<h5 className="card-title">Support</h5>
											<p className="card-text">7/7 et 24/24, L’écoute active des besoins de nos employés et de nos clients construit la confiance, qui se reflète dans la qualité de notre service</p>

										</div>
									</div>



								</div>

								<div className="col-lg-4 col-md-6 col-sm-6">

									<div className="card mt-4" style={{ width: "18rem", height: "18rem" }}>
										<img src={require("./../../images/securite.png")} className="card-img-top" style={{ width: "5rem" }} />
										<div className="card-body">
											<h5 className="card-title">Sécurité</h5>
											<p className="card-text">WiStudent garantit la sécurité des paiements et la confidentialité absolue des données personnelles</p>

										</div>
									</div>



								</div>

							</div>
						</div>







						<div className="section-head text-center"style={{margin:"10%"}}>
							<h2 className="" style={{ textAlign: "center", fontFamily: "poppins", fontWeight: "700", color: "MediumBlue" }}>LES CATEGORIES</h2>

						</div>

						<Jobcategories />
					</div>
				</div>

				<Jobsection />

			</div>
			<Footer />
		</>
	)
}

export default Homepage2;