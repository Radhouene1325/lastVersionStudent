import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
	return(
		<footer className="site-footer"   >
			<div className="footer-top" style={{padding :"45px 0px 0px 0px"}}>
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<div className="widget">
								<img src={require("./../../images/logoFooter.png")} width="180" className="m-b15" alt=""/>
								<p> WiStudent est une marketplace dédié aux étudients ainsi les professionnels, les personnes agées et les entreprises pour se connecter, s'intéragir et s'entretenir leurs partenariats dans un environnement sécurisé et convivial.</p>
								
								<ul className="list-inline m-a0">
									<li><Link to={''} className="site-button white facebook circle "><i className="fa fa-facebook"></i></Link></li>
									<li><Link to={''} className="site-button white google-plus circle "><i className="fa fa-google-plus"></i></Link></li>
									<li><Link to={''} className="site-button white linkedin circle "><i className="fa fa-linkedin"></i></Link></li>
									<li><Link to={''} className="site-button white instagram circle "><i className="fa fa-instagram"></i></Link></li>
									<li><Link to={''} className="site-button white twitter circle "><i className="fa fa-twitter"></i></Link></li>
								</ul>
							</div>
						</div>
						<div  className="col-xl-2 col-lg-2 col-md-12 col-sm-12"></div>
						
						<div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
							<div className="widget border-0">
								<h5 className="m-b30 text-white">Menu</h5>
								<ul className="list-2 w10 list-line">
									<li><Link to={'/privacypolicy'}>Politique de confidentialité</Link></li>
									{/* <li><Link to={''}>Condition générale</Link></li>
									<li><Link to={''}>Condition d'utilisation</Link></li> */}
									<li><Link to={'/aboutus'}>A propos</Link></li>
									{/* <li><Link to={'/contact'}>Contact</Link></li> */}
									<li><Link to={'/FAQ'}>FAQ</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="footer-bottom">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<span> © Copyright by <i className="fa fa-heart m-lr5 text-red heart"></i>
							<Link to={''}>PetraTech </Link> All rights reserved.</span> 
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer;

































