import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';

var labels = {
  1: 'Useless',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};

function getLabelText(value) {
  return "".concat(value, " Star").concat(value !== 1 ? 's' : '', ", ").concat(labels[value]);
}



function RatingPage() {
  const [text, setText] = useState('');
//From the other component
  const [toUser, setToUser] = useState('');
  //User connectée normalement
  const [user, setUser] = useState('62c17af0af20cc4a62fd8360');
  const [etoile, setEtoile] = useState('');

  //AlertConfirm
  const [show, setShow] = useState(false);
  const [path, setPath] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const submitFeedBack = (e) => {
    e.preventDefault();
    console.log("Etoile"+ etoile)

    //console.log(categorie, titre,type, duree, salaire, maxCandidature, positionDisponible)

    axios.post(`http://localhost:4000/feedback/create/${user}/${etoile}`, {


      toUser: "62c17af0af20cc4a62fd8360",
      text,
    }).then(res => console.log('post', res))

      .then(() => {
        alert("Ajoutée avec succés");
      }).catch(err => console.log(err));
  };


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        FeedBack
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="primary" closeButton>
          <Modal.Title >Evaluer le travail de cette personne </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div class="rating">
              <a  onClick={() => setEtoile(5)} title="Donner 5 étoiles" >★</a>
              <a onClick={() => setEtoile(4)} title="Donner 4 étoiles">★</a>
              <a onClick={() => setEtoile(3)} title="Donner 3 étoiles">★</a>
              <a onClick={() => setEtoile(2)} title="Donner 2 étoiles">★</a>
              <a onClick={() => setEtoile(1)} title="Donner 1 étoiles">★</a>
            </div>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Faites nous un retour sur cette personne</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) =>
                setText(e.target.value)
              } />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button type="submit" variant="primary" onClick={submitFeedBack}>
            Valider
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
};

export default RatingPage;