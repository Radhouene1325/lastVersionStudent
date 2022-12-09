import React from 'react'
import { Button } from 'react-bootstrap';
// import Carousel from 'react-bootstrap/Carousel';
import bnr1 from '../../images/owlCarousel/1.png'
import bnr2 from '../../images/owlCarousel/2.png'
// import Jobfindbox from './Jobfindbox';
import { useHistory } from 'react-router-dom';
import "../Pages/index.css"
// const Carouselhome = () => {
//   const navigate = useHistory()
//   // {require('./../../images/Categories/info.png')}
//   return (
//     <>

//       <Carousel fade className="ml-3" >
//         <Carousel.Item >
//           <div className="dez-bnr-inr dez-bnr-inr-md " style={{ backgroundImage: "url(" + bnr1 + ")" }}>
//           <div className='marg'>
// 					<p>conçu et mis à disposition dans le seul but d'optimiser votre recherche, que ce soit de candidats ou de recruteurs. Divers conseils, astuces et informations utiles vous aideront à mieux gérer vos demandes conçu et mis à disposition dans le seul but d'optimiser votre recherche, que ce soit de candidats ou de recruteurs. Divers conseils, astuces et informations utiles vous aideront à mieux </p>
// 					<Button onClick={(()=>{navigate.push('/aboutus')})} variant="warning">Découvrire</Button>{' '}
// 				</div>
//           </div>

//         </Carousel.Item>
//         <Carousel.Item>
//         <div className="dez-bnr-inr dez-bnr-inr-md " style={{ backgroundImage: "url(" + bnr2 + ")" }}>
//         <div className='marg'>
// 					<p>conçu et mis à disposition dans le seul but d'optimiser votre recherche, que ce soit de candidats ou de recruteurs. Divers conseils, astuces et informations utiles vous aideront à mieux gérer vos demandes conçu et mis à disposition dans le seul but d'optimiser votre recherche, que ce soit de candidats ou de recruteurs. Divers conseils, astuces et informations utiles vous aideront à mieux </p>
// 					<Button onClick={(()=>{navigate.push('/aboutus')})} variant="warning">Découvrire</Button>{' '}
// 				</div>
//         </div>
//         </Carousel.Item>
//       </Carousel>


//     </>
//   );
// }


// export default Carouselhome 

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Carouselhome() {
  const navigate = useHistory()
  return (
    <div className="carousel-wrapper pb-3">
      <Carousel>
        <div className='gfg' >
          <img src={bnr1} />
          <figcaption className='first-txt'>
            <p style={{ color: "blue" }}>IMAGINEZ POUVOIR VIVRE DES EXPERIENCES QUI AMELIORENT VOTRE VIE ET CELLE DES AUTRES </p>
            <Button onClick={(() => { navigate.push('/aboutus') })} style={{ backgroundColor: "#0046c6"}}>Découvrire</Button>{' '}
            
          </figcaption>

        </div>
        <div className='gfg'>
          <img src={bnr2} />
          <figcaption className='first-txt'>
            <p style={{ color: "blue" }}>IMAGINEZ POUVOIR VIVRE DES EXPERIENCES QUI AMELIORENT VOTRE VIE ET CELLE DES AUTRES </p>
            <Button onClick={(() => { navigate.push('/aboutus') })} style={{ backgroundColor: "#0046c6"}}>Découvrire</Button>{' '}
          </figcaption>
        </div>

      </Carousel>
    </div>
  );
}

