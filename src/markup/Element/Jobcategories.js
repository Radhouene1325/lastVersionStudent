import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Jobcategories() {
	
	const navigate = useHistory()
	return (
		<div className="row sp20">
			<div className="col-lg-3 col-md-6 col-sm-6" onClick={(() => { navigate.push('/aidespersonnes') })} >
					<div className="icon-bx-wraper" style={{ width: "100%", height: "100%" }}>
						<div className="icon-content">
							<div className="icon-md text-primary m-b20">< img src={require('./../../images/Categories/1.jpeg')}></img></div>
							<label to={"/aidespersonnes"} className="dez-tilte">Aides aux personnes âgées</label>
							<p className="m-a0"></p>
							{/* <div className="rotate-icon"><img src={require('./../../images/Categories/C1.png')}></img> </div>  */}
						</div>
					</div>
				
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6" onClick={(() => { navigate.push('/services') })}>
				

					<div className="icon-bx-wraper" style={{ width: "100%", height: "100%" }}>
						<div className="icon-content">

							<div className="icon-md text-primary m-b20">< img src={require('./../../images/Categories/6.jpeg')}></img></div>
							<label className="dez-tilte">Differentes Services </label>
							<div className="rotate-icon"><i className="ti-wand"></i></div>
						</div>
					</div>
				
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6" onClick={(() => { navigate.push('/restauration') })}> 

				
					<div className="icon-bx-wraper" style={{ width: "100%", height: "100%" }}>
						<div className="icon-content">
							<div className="icon-md text-primary m-b20">< img src={require('./../../images/Categories/2.jpeg')}></img></div>
							<label className="dez-tilte">Restauration / Hôtellerie </label>
							{/* <p className="m-a0">198 Open Positions</p> */}
							{/* <div className="rotate-icon">< img src={require('./../../images/Categories/C2.png')}></img></div>  */}
						</div>

					</div>
				

			</div>


			<div className="col-lg-3 col-md-6 col-sm-6" onClick={(() => { navigate.push('/it') })}>

				
					<div className="icon-bx-wraper" style={{ width: "100%", height: "100%" }}>


						<div className="icon-content">
							<div className="icon-md text-primary m-b20">< img src={require('./../../images/Categories/3.jpeg')}></img>
							</div>
							<label className="dez-tilte">Technologie de l'information</label>
							{/* <p className="m-a0">198 Open Positions</p> */}
							<div className="rotate-icon">
							</div>
						</div>


					</div>
			


			</div>

			{/* <div className="col-lg-12 text-center m-t30">
				<button className="site-button radius-xl">All Categories</button>
			</div> */}
		</div>
	)
}

export default Jobcategories;