import React from 'react';
import { Link } from 'react-router-dom';
import Header2 from './Header2';
import Footer from './Footer';
import { Form } from 'react-bootstrap';

function LeftBar() {
    return (


        <div className="lefbarcont">
            <div className="sticky-top">
                <div className="candidate-info company-info">
                    <div className="candidate-detail text-center">
                        <div className="canditate-des">
                            <Link to={"#"}>
                                <img alt="" src={require("./../../images/logo/icon3.jpg")} />
                            </Link>
                            <div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
                                <input type="file" className="update-flie" />
                                <i className="fa fa-pencil"></i>
                            </div>
                        </div>
                        <div className="candidate-title">
                            <h4 className="m-b5"><Link to={"#"}>Nom de l'entreprise</Link></h4>
                        </div>
                    </div>
                    <ul>
                        <li><Link to={"/company-profile"}>
                            <i className="fa fa-user-o" aria-hidden="true"></i>
                            <span> Profile</span></Link></li>
                        <li><Link to={"/create-Annonce"} className="active">
                            <i className="fa fa-file-text-o" aria-hidden="true"></i>
                            <span>Créer une annonce</span></Link></li>
                        <li><Link to={"/company-transactions"}>
                            <i className="fa fa-random" aria-hidden="true"></i>
                            <span>Transactions</span></Link></li>
                        <li><Link to={"/company-manage-job"}>
                            <i className="fa fa-briefcase" aria-hidden="true"></i>
                            <span>Historique d'annonces</span></Link></li>
                        <li><Link to={"/company-resume"}>
                            <i className="fa fa-id-card-o" aria-hidden="true"></i>
                            <span>Resume</span></Link></li>
                        <li><Link to={"/jobs-change-password"}>
                            <i className="fa fa-key" aria-hidden="true"></i>
                            <span>Change Password</span></Link></li>
                        <li><Link to={"./"}>
                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                            <span>Log Out</span></Link></li>
                    </ul>
                </div>
            </div>
        </div>

    )

}
export default LeftBar;