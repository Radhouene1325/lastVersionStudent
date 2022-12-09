import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer from './../Layout/Footer';
import { Modal } from 'react-bootstrap';
import RatingPage from '../Element/RatingPage';
import LeftBar from '../Layout/LeftBar';
import axios from 'axios';
import UserDetails from './UserDetail';

//state = { candidates: [] }



function ConfirmApplication(props) {

const  [userId,setUserId] = useState('');
    const [confirm, confirmCandidature] = useState(false)
    //const jobName = useLocation().state.jobName;
    //console.log("JobName = " + job)
    const [candidature, setCandidature] = useState(false);
    const [Appliant, setName] = useState("");
    //AlertConfirm
    const [show, setShow] = useState(false);

    const [index, setAppliantId] = useState(0);
    //const [chosen, setChosen] = useState(0);

    // get by Id 
    const [candidat, setCandidat] = useState(null);
    
    const [data, setdata] = useState(null);
    useEffect(() => {
        const fetchdata = async () => {
            const result = await axios(
                'http://localhost:4000/users/topUser',
            );
            setdata(result.data)
            console.log("resultat +" + result);
        };
        fetchdata();

    })

    return (
        <>
            <Header2 />
            <LeftBar />
            <div className="page-content bg-white">
                <div className="content-block">
                    <div className="section-full bg-white p-t50 p-b20">
                        <div className="container">
                            <div className="row">

                                <div className="col-xl-9 col-lg-8 m-b30">
                                    <div className="job-bx browse-job clearfix">
                                        <div className="job-bx-title  clearfix">
                                            <h5 className="font-weight-700 pull-left text-uppercase">La liste des candidatures pour xxxxxxx
                                            </h5>

                                        </div>
                                        <RatingPage></RatingPage>
                                        <table className="table-job-bx cv-manager company-manage-job">
                                            <thead>
                                                <tr>
                                                    <th>Candidat</th>
                                                    <th>Rating</th>
                                                    <th>Date de postule</th>
                                                    <th>Confirmer/Annuler</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data?.map(item => (
                                                    <tr>

                                                        <td key={item._id} >
                                                            <Link to={"#"} onClick={() => {setUserId(item._id); console.log("User ", userId); setCandidature(true)} }>

                                                                <i className="fa fa-eye"> {item.name} {item.lastName}</i></Link>

                                                        </td>

                                                        <td key={item.ratting}>{item.ratting}</td>
                                                        <td>Date</td>
                                                        <td className="job-links">

                                                            <button type="button" className="fa fa-check" onClick={() => setShow(true)}>

                                                            </button>

                                                            <button type="button" className="fa fa-times" onClick={() => setShow(false)}>

                                                            </button>

                                                        </td>

                                                    </tr>

                                                ))}


                                            </tbody>
                                        </table>
                                        <div className="pagination-bx m-t30 float-right">
                                            <ul className="pagination">
                                                <li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
                                                <li className="active"><Link to={"#"}>1</Link></li>
                                                <li><Link to={"#"}>2</Link></li>
                                                <li><Link to={"#"}>3</Link></li>
                                                <li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
                                            </ul>
                                        </div>


                                        <Modal show={show} onHide={setShow} className="modal fade modal-bx-info">

                                            <div className="modal-dialog my-0" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">

                                                        <h5 className="modal-title"> Êtes-vous sûr de confirmer ce candidat  pour cette poste ?<br /> </h5>
                                                        <button type="button" className="close" onClick={() => setShow(false)}>
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <div className="modal-body">
                                                            <div className="job-links">
                                                                <button type="button" className="ti-check" onClick={() => setShow(false)}>
                                                                    Confirmer
                                                                </button>

                                                                <button type="button" className="ti-close" onClick={() => setShow(false)}>
                                                                    Annuler
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </Modal>

                                        <UserDetails show={candidature} hide={setCandidature} />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )

}
export default ConfirmApplication;