import React from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header2';
import Footer from './../Layout/Footer';
import Latestblogowl from './../Element/Owlblog2';

var bnr1 = require('./../../images/banner/bnr1.jpg');
var bnr2 = require('./../../images/background/bg4.jpg');

function FAQ(){
	return(
		<div className="page-wraper">		
			<Header />	
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + bnr1 + ")"}}>
					<div className="container">
						<div className="dez-bnr-inr-entry">
							<h1 className="text-white"> FAQ</h1>
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={"#"}>Accueil</Link></li>
									<li>FAQ</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				<div className="content-block">
					<div className="section-full content-inner overlay-white-middle">
						<div className="container">
							<div className="row align-items-center m-b50">
                                {/* <div  className="col-md-4 col-lg-4 m-b20"></div>
                                <div  className="col-md-4 col-lg-4 m-b20">
                                <h2 className="m-b5"> Questions fréquemment posées </h2>
									<h3 className="fw4">FAQ</h3>
                                </div>
                                <div  className="col-md-4 col-lg-4 m-b20"></div> */}
								<div className="col-md-12 col-lg-12 m-b20">
                                <h2 className="m-b5"   style={{textAlign:"center" , fontFamily: "poppins" ,fontWeight : "700",color : "MediumBlue"}}> Questions fréquemment posées </h2>
									<h3 className="fw4" style={{textAlign:"center" , fontFamily: "poppins" ,fontWeight : "700",color : "MediumBlue"}}>FAQ</h3>
									<p className="m-b15">1-	L'inscription au WiStudent est-elle gratuite ?</p>
									<p className="m-b15">Oui. L'inscription est gratuite pour les demandeurs d'emploi et les annonceurs d'emploi.</p>
									<p className="m-b15">2-	Je suis nouveau sur WiStudent. Comment puis-je m'inscrire gratuitement ?</p>
									<p className="m-b15">-	Pour s'inscrire gratuitement en tant que demandeur ou annonceur d'emploi <Link  to={'/register'}>cliquer ici</Link></p>
									
									
									<p className="m-b15"> 	=> Complétez toutes les informations requises (indiquées par *) puis cliquez sur le bouton "Créer un nouveau compte".</p>
								    <p className="m-b15">3-	Votre service a-t-il un coût ?</p>
									<p className="m-b15">Les frais de WiStudent sont payés par nos clients employeurs dans le cas où vous êtes embauché</p>
									<p className="m-b15">4-	Comment postuler à un poste ?</p>
									<p className="m-b15">Visitez notre page d'opportunités de carrière et consultez nos postes actuellement ouverts. Après avoir examiné les exigences, si vos compétences correspondent aux exigences spécifiques d'un ou plusieurs postes, veuillez cliquer sur "Postuler ".</p>
									<p className="m-b15">5-	Comment rechercher des offres d'emploi sur WiStudent ?</p>
									<p className="m-b15">Utilisez notre filtre de recherche d'emploi sur le côté droit de la page. Cette option vous permet de filtrer les annonces d'emploi par lieu, secteur et/ou type de poste. Après avoir sélectionné vos préférences, cliquez sur le bouton "Rechercher".</p>
									<p className="m-b15">6-	J'ai oublié mon mot de passe, comment puis-je le réinitialiser ?</p>
									<p className="m-b15">7-	Qui dois-je contacter si j'ai d'autres questions sur les candidatures ou sur un poste ouvert particulier ?</p>
									<p className="m-b15">Visitez notre page contact, vous trouverez sur cette page toutes nos coordonnées</p>
								
								</div>
								
							</div>
							
						</div>
					</div>						
					
					
				</div>
			</div>
			<Footer />
		</div>	
	)
	
}
export default FAQ;