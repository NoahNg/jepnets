import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Card, Col, Container, Modal, Row } from 'react-bootstrap';
import { netDataType, netsData } from './data';
import styled from 'styled-components';

// const NavbarStyled = styled(Navbar)`
//   box-shadow: 0px 5px rgba(0, 0, 0, 0.02);
// `;

// const NavbarName = styled(Navbar.Brand)`
//   font-weight: bold;
//   color: #16425b;
//   font-size: 2rem;
// `;

const NetsContainer = styled(Row)`
  border-radius: 10px;
  background-color: #16425b;
`;

const Net = styled(Card)`
  border-radius: 10px;
  border: none;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.5);
`;

const ModalPhoto = styled.img`
  width: 100%;
  max-width: 25rem;
  height: auto;
`;

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedNet, setSelectedNet] = useState<netDataType | null>(null);

  const handleCardClick = (net: netDataType) => {
    setSelectedNet(net); // Set the selected net's data to the state
    setModalShow(true); // Show the modal
  };

  return (
    <Container>
      {/* <NavbarStyled sticky='top' bg='white'>
        <Container>
          <NavbarName>Jepnets</NavbarName>
        </Container>
      </NavbarStyled> */}

      <div className='my-4 mx-4'>
        {' '}
        <img alt='' src='./assets/logo.png' className='mt-4' />{' '}
        <h2 className='my-5'>
          <b>Research Nets Made for You</b>
        </h2>
        <p>
          <i>We make a variety of research nets to suit your requirements.</i>
        </p>
        <p>
          <i>
            Get in touch and we will see how we can help you out:
            <a href='mailto:jepnets@gmail.com'> jepnets@gmail.com</a>
          </i>
        </p>
        <p className='pb-4 mb-0'>
          <i>Click on images to get details.</i>
        </p>
      </div>

      <Container>
        <NetsContainer xs={1} md={2} lg={3} className='g-5 pb-5 px-4 mx-2 my-0'>
          {netsData.map((net, index) => (
            <Col md={6} key={index}>
              <Net onClick={() => handleCardClick(net)}>
                <Card.Img
                  className='p-2 m-auto'
                  variant='top'
                  src={net.photoURL}
                />
                <Card.Body>
                  <Card.Title>
                    <b>{net.name}</b>
                  </Card.Title>
                </Card.Body>
              </Net>
            </Col>
          ))}
        </NetsContainer>
      </Container>

      <footer className='mt-5'>
        {' '}
        <hr className='mx-5' />
        <Row xs={1} md={3} className='mx-5'>
          <Col className='my-auto pb-3'>
            <b>Based in Hamilton, Waikato, NZ</b>
          </Col>
          <Col className='pb-3'>
            <Col>
              <b>Phone number</b>
            </Col>
            <Col>
              {' '}
              <a href='tel:+6421368967'>021368967</a>
            </Col>
          </Col>
          <Col className='pb-3'>
            <Col>
              <b>Email</b>
            </Col>
            <Col>
              <a href='mailto:jepnets@gmail.com'>jepnets@gmail.com</a>
            </Col>
          </Col>
        </Row>
      </footer>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby='contained-modal-title-vcenter'
        centered
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            {selectedNet?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <ModalPhoto src={selectedNet?.photoURL} />
            </Col>
            <Col>
              <b>Standard specifications:</b>
              <ul>
                {selectedNet?.specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default App;
