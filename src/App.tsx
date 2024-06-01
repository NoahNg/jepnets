import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Card, Col, Container, Modal, Navbar, Row } from 'react-bootstrap';

function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Navbar
        sticky='top'
        bg='white'
        style={{ boxShadow: '0px 5px rgba(0, 0, 0, 0.02)' }}
      >
        <Container className='justify-content-between'>
          <Navbar.Brand
            style={{
              fontWeight: 'bold',
              color: '#16425B',
              fontSize: '2rem',
            }}
            href='#home'
          >
            Jepnets
          </Navbar.Brand>
          <Col xs='auto'>
            <Row style={{ fontWeight: 'bold' }}>Phone number:</Row>
            <Row style={{ fontWeight: 'bold' }}>Email:</Row>
          </Col>
        </Container>
      </Navbar>

      <div className='pb-4 my-4'>
        {' '}
        <h2>
          <b>Scientific Fishing Nets</b>
        </h2>
        <p>
          <i>Short blurb</i>
        </p>
      </div>
      {/* <h2 className='py-4'>Scientific Fishing Nets</h2> */}
      <Container
        className=''
        // style={{
        //   borderRadius: '10px',
        //   backgroundColor: '#16425B',
        // }}
      >
        <Row
          xs={1}
          md={2}
          lg={3}
          className='g-5 pb-5 px-4 mx-2'
          style={{
            borderRadius: '10px',
            backgroundColor: '#16425B',
          }}
        >
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col md={6} key={idx}>
              <Card
                onClick={() => setModalShow(true)}
                style={{
                  borderRadius: '10px',
                  border: 'none',
                  boxShadow: '5px 5px rgba(0, 0, 0, 0.5)',
                }}
              >
                <Card.Img
                  className='p-2 m-auto'
                  variant='top'
                  src='src/assets/fishnet-dummy.jpg'
                  style={{ maxWidth: '12rem' }}
                />
                <Card.Body>
                  <Card.Title>
                    <b>Name</b>
                  </Card.Title>
                  <Card.Text>Short description</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <img
                src='src/assets/fishnet-dummy.jpg'
                style={{ maxWidth: '12rem' }}
              />
            </Col>
            <Col>
              <p>Specs:</p>
              <p>Price:</p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;
