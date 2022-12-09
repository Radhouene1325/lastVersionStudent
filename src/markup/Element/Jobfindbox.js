import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
class Jobfindbox extends Component {
	componentDidMount() {

		var i = 0;

		// Placeholder Animation Start
		var inputSelector = document.querySelectorAll('input, textarea');

		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('focus', function (event) {
				return this.parentElement.parentElement.classList.add("focused");
			});
		}


		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('blur', function (event) {
				var inputValue = this.value;
				if (inputValue === '') {
					this.parentElement.parentElement.classList.remove('filled');
					this.parentElement.parentElement.classList.remove('focused');
				} else {
					this.parentElement.parentElement.classList.add('filled');
				}
			});
		}

		// Placeholder Animation End
	}
	render() {
		return (
			<div className="section-full browse-job-find ">
				<div className="container">
					<div className="find-job-bx">
						<form className="dezPlaceAni" onSubmit={((e) => { e.preventDefault() })}>
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="form-group">
										<label>
											d'emploi, Mots clés, ou Phrase</label>
										<div className="input-group">
											<input type="text" className="form-control" placeholder="" />
											<div className="input-group-append">
												<span className="input-group-text"><i className="fa fa-search"></i></span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<label>Ville,
											 code postal</label>
										<div className="input-group">
											<input type="text" className="form-control" placeholder="" />
											<div className="input-group-append">
												<span className="input-group-text"><i className="fa fa-map-marker"></i></span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<Form.Control as="select" custom className="select-btn">
											<option>Select Sector</option>
											<option>Construction</option>
											<option>Coordinateur,Coordinatrice</option>
											<option>Employeur</option>
											<option>Carrière financière</option>
											<option>Informatique</option>
											<option>Commercialisation</option>
											<option>Contrôle qualité</option>
											<option>Immobilier</option>
											<option>Ventes</option>
											<option>Justificatif</option>
											<option>Enseignement</option>
										</Form.Control>
									</div>
								</div>
								<div className="col-lg-2 col-md-6">
									<button type="submit" className="site-button btn-block" style={{ backgroundColor: "#0046c6"}}>trouver un emploi</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
export default Jobfindbox;