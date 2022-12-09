
import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { uploadavatar } from '../../features/users/userSlice';
import AuthService from '../../services/AuthService';

function Profilesidebar() {

	const { user } = useContext(AuthContext)
	const dispatch = useDispatch()

	const handlePicChanged = (e) => {

		let fdata = new FormData()
		fdata.append('avatar', e.target.files[0])
		let data = {
			id: user._id,
			data: fdata
		}

		dispatch(uploadavatar(data))
	}
	const { setUser, setIsAuth } = useContext(AuthContext);
	const history = useHistory()
	function LogoutHanlder() {



		AuthService.logout().then((jsonData) => {

			if (jsonData.success) {
				setUser(jsonData.user);
				setIsAuth(false);
				localStorage.clear("userdetails");
			}
			window.location.replace('/login')
		});
	}

	return (

		<div className="col-xl-3 col-lg-4 m-b30">
			<div className="sticky-top">
				<div className="candidate-info">
					<div className="candidate-detail text-center">
						<div className="canditate-des">
							<img style={{ width: "100%", height: "100%" }} alt="photo profil" src={'http://localhost:4000/file/' + user.avatar} />

							<div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
								<input type="file" className="update-flie" onChange={(e) => handlePicChanged(e)} />
								<i className="fa fa-camera"></i>
							</div>
						</div>


						<div className="candidate-title">
							<div className="">
								{user.role === "serviceProvider" ?
									<>
										<h4 className="m-b5"><Link to={"#"}>{user.name}</Link></h4>
										<p className="m-b0"><Link to={"#"}>{user.lastName}</Link></p>
									</>
									:

									<h4 className="m-b5">{user.name}</h4>
								}</div>
						</div>
					</div>
					<ul>
						{user.role === "advertiser" ?
							<>
								<li><Link to={"/profiladvertiser"} className="active">
									<i className="fa fa-user-o" aria-hidden="true"></i>
									<span> Mon Profil</span></Link></li>

								<li><Link to={"/company-profile"}>
									<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
									<span>modifier Profil</span></Link></li>
								<li><Link to={"/company-post-jobs"}>
									<i className="fa fa-file-text-o" aria-hidden="true"></i>
									<span>publier une mission</span></Link></li>

								<li><Link to={"/company-manage-job"} className="active">
									<i className="fa fa-briefcase" aria-hidden="true"></i>
									<span>gérer les missions</span></Link>
								</li>
							</>
							:
							<>

								<li><Link to={"/profiladvertiser"}>
									<i className="fa fa-home" aria-hidden="true"></i>
									<span> Fournisseur de services de profil</span></Link></li>
								<li><Link to={"/company-profile"}>
									<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
									<span>modifier le profil</span></Link></li>
								<li><Link to={"/jobs-saved-jobs"}>
									<i className="fa fa-heart-o" aria-hidden="true"></i>
									<span>Emplois enregistrés</span></Link></li>
								<li><Link to={"/jobs-applied-job"}>
									<i className="fa fa-briefcase" aria-hidden="true"></i>
									<span>Emplois appliqués</span></Link></li>
								<li><Link to={"/jobs-alerts"}>
									<i className="fa fa-bell-o" aria-hidden="true"></i>
									<span>Alertes emploi</span></Link></li>
							</>

						}



						<li><Link to={"/jobs-change-password"}>
							<i className="fa fa-key" aria-hidden="true"></i>
							<span>Changer mot de passe</span></Link></li>
						<li onClick={LogoutHanlder}>
							{/* <Link to={"/"}> */}
							<i className="fa fa-sign-out" aria-hidden="true"></i>
							<span >déconnecter</span>
							{/* </Link> */}
						</li>


					</ul>
				</div>
			</div>

		</div>
	)
}
export default Profilesidebar;