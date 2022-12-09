import React from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header2';
import Footer from './../Layout/Footer';
import Latestblogowl from './../Element/Owlblog2';
import'../Pages/index.css'
var bnr1 = require('./../../images/banner/bnr1.jpg');
var bnr2 = require('./../../images/background/bg4.jpg');

function Aboutus(){
	return(
		
		<div className="page-wraper">		
			<Header />	
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + bnr1 + ")"}}>
					<div className="container">
						<div className="dez-bnr-inr-entry">
							<h1 className="text-white">A propos</h1>
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={"#"}>Accueil</Link></li>
									<li>A propos</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				<div className="content-block">
					<div className="section-full content-inner overlay-white-middle">
						<div className="container">
							<div className="row align-items-center m-b50">
								<div className="col-md-12 col-lg-12 m-b20">
									<h2 className="m-b5" style={{textAlign:"center" , fontFamily: "poppins" ,fontWeight : "700",color : "MediumBlue"}}>A  propos</h2>
								
									
								
									
								</div>
								<div className="col-md-12 col-lg-12 m-b20">
								        
										
										 <p className="m-b15"><strong>WiStudent </strong>peut également être utilisé par un large éventail d'entreprises, des entreprises traditionnelles (gastronomie, hôtels, bâtiments, transports, etc.) aux grandes entreprises informatiques (développement, logiciels, télécommunications, marketing, etc.). Notre plateforme vous permet de trouver des profils d'étudiants qualifiés ayant une expertise et des compétences en le domaine cible.</p>
								</div>
							
							</div>
							<div className="row align-items-center m-b50">
								<div className="col-md-12 col-lg-12 m-b20">
								     <h2 className="m-b5">Pourquoi WiStudent </h2>
									 <p className="m-b15">Aujourd'hui, les étudiants sont confrontés à plusieurs reprises à des défis financiers qui affectent directement leurs résultats scolaires et le travail à temps partiel est difficile à trouver sur le marché du travail tunisien.</p>
									 <p className="m-b15">Et de bonnes opportunités d'emploi pour eux doivent être flexibles et s'adapter à leurs plans d'études et à leurs engagements académiques.</p>
									 <p className="m-b15">Alors, après avoir profondément réfléchi à la résolution de cette contrainte sur les opportunités étudiantes, nous sommes arrivés à la conclusion qu'il nous fallait créer un espace numérique dédié aux étudiants où les offres d'emploi sont compatibles avec les engagements scolaires. Ainsi, nous avons cherché à trouver des besoins parmi les différents acteurs sociaux et économiques qui pourraient se traduire par des types de travail dont les étudiants pourraient bénéficier.</p>
									 <p className="m-b15">Les particuliers et les entreprises peuvent également bénéficier de cette plateforme ou ils vont publier des annonces précisant la nature, la durée et les caractéristiques des postes à pourvoir et trouver des étudiants travailleurs qui correspondent parfaitement à leurs besoins </p>
									 <p className="m-b15">Et pour assurer de meilleures transactions entre les différents acteurs WiStudent protège intégralement toutes vos données personnelles, et vos coordonnées et s'engage à respecter votre vie privée. Nous nous efforçons de fournir à nos utilisateurs une expérience sécuritaire. Cette déclaration de confidentialité aborde le sujet de la collecte de données en ligne et des politiques et pratiques d'utilisation applicables au site Web WiStudent.</p>

								</div>
							</div>
							<div className="row align-items-center m-b50">
								<div className="col-md-12 col-lg-12 m-b20">
								       <h2 className="m-b5"  style={{textAlign:"center" , fontFamily: "poppins" ,fontWeight : "700",color : "MediumBlue"}}> Espace étudiant </h2>
                                       <h4 className="m-b5"  style={{textAlign:"center" }}> Devenez un acteur dans la vie professionnels ! </h4>
								</div>
								<div className="col-md-12 col-lg-12 m-b20">
								<p className="m-b15"><strong>Si vous êtes un étudiant à la recherche d'un emploi à temps partiel qui correspond à votre emploi du temps, cette section est pour vous !</strong></p>
								</div>
								<div className="col-md-12 col-lg-12 m-b20">
								<p className="m-b15">Ainsi, lorsqu'ils recherchent des opportunités, ils disent : "Là où il y a une volonté, il y a un moyen". </p>
								<p className="m-b15">Ce chemin commence par la création d'un profil complet et différencié. Ce profil est le premier pas vers l'emploi. </p>
								<p className="m-b15">Dans l'espace étudiant, vous pouvez parcourir toutes les annonces disponibles</p>
								<p className="m-b15">D’autre part, WiStudent dispose également d'un moteur de recherche efficace, structuré de manière que les recherches soient très spécifiques et adaptables à tous les préférences et les exigences</p>
								<p className="m-b15">Sur <strong>WiStudent</strong> vous avez un accès direct au contact des annonceurs et vous pouvez communiquer avec eux directement via la plateforme pour conclure un accord. Vous trouverez également des outils de planification et de gestion de vos missions.</p>
								<p className="m-b15">La confiance entre vous en tant qu'étudiant et les annonceurs est notre objectif numéro un. Pour construire cette confiance, vous devez créer de la crédibilité. C'est pourquoi nous avons introduit un système de points. D'une part, après chaque mission, les 
								performances des étudiants sont évaluées par les annonceurs. Les étudiants, quant à eux, se concentrent sur l'annonceur et commentent l'avancement de sa mission.</p>
								</div>
							</div>
							<div className="row align-items-center m-b50">
							            <div className="col-md-12 col-lg-12 m-b20">
							                    <h2 className="m-b5"  style={{textAlign:"center" , fontFamily: "poppins" ,fontWeight : "700",color : "MediumBlue"}}> Espace Annonceur (demandeur de service) </h2>
							
						                      <h4 className="m-b5"  style={{textAlign:"center" }}>Annoncez en ligne et recrutez les profils souhaités.</h4>
							                 
							</div>
							</div>
							<div className="row align-items-center m-b50">
							       <div className="col-md-12 col-lg-12 m-b20">
									     <p className="m-b15">Vous êtes un particulier à la recherche d’une personne pour une mission précise ou vous êtes une entreprise à la recherche des employées avec des qualifications spécifiques : WiStudent met à votre disposition un espace pour commencer votre recherche.</p>
								   </div>
							</div>
							<div className="row  m-b50" >
							    <div className="col-md-12 col-lg-6 m-b20">
									 
									  <div className="card" >
									         <p style={{textAlign:"center" , color : "CornflowerBlue"}}><strong>Persone physique</strong></p> 
											 <p style={{textAlign:"center" , color : "CornflowerBlue"}}><strong>(Particulier)</strong></p>
											 <p className="m-b15">Vous travaillez tous les jours et vous n'avez pas assez de temps. Job4 vous propose des accompagnateurs professionnels de confiance pour effectuer vos courses à votre place. Les aides à domicile chez Job4 accompagnent aussi les personnes âgées dans toutes les activités nécessaires à leur bien-être.  Autant de services que nous proposons afin que votre proche puisse continuer à vivre ces moments précieux</p>
								                <p className="m-b15">Dans cet espace, vous pouvez décrire les critères de votre candidature ou le service que vous recherchez. La liste des catégories d'emploi de WiStudent vous aide à faire une annonce de manière plus ciblée.</p>
												<p className="m-b15">Grâce à l'accès à une grande variété de profils des candidats et d'outils de recherche, vous pouvez choisir efficacement le profil qui correspond le mieux à vos besoins.</p>
												<p className="m-b15">Tous les taches doivent être remboursés et il vous sera demandé de citer des frais raisonnables en fonction des tâches demandées.</p>
									  </div>
						        </div>
							     <div className="col-md-12 col-lg-6"  style={{textAlign:"center" }}>
								        <div className="card">
                                               <p style={{textAlign:"center" , color : "CornflowerBlue"}}><strong>Entreprise</strong></p>
											   <p className="m-b15 " style={{textAlign:"center"}}>
									   WiStudent offre aux entreprises un moyen simple et efficace de recruter du personnel. Publiez des offres d'emploi gratuitement et accédez à des candidats qualifiés.
								       </p>
									   <p className="m-b15">
									            Nous accompagne les entreprises à chaque étape du recrutement grâce à nos outils de sourcing et de qualifications. Notre mission est d'aider les entreprises à trouver les meilleurs talents en offrant une expérience de recrutement supérieure.
									   </p>
									   <p className="m-b15">
									          A travers WiStudent vous assure : 
									   </p>
									   <p className="m-b15">
									   •	La Recherche et présélection des meilleurs profils correspondants à vos critères : Publication d´offres d´emploi, recherche sur bases de données CV et chasse de tête.
									   </p>
									   <p className="m-b15">
									   •	Le Suivi jusqu’à la confirmation de l’embauche.
									   </p>
									   <p className="m-b15">
									   •	Une assurance d´un service efficace tout au long du processus de recrutement.
									   </p>
                                         </div>
									 
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
export default Aboutus;