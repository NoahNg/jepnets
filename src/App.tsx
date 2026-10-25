import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Card, Col, Container, Modal, Row } from 'react-bootstrap';
import { netDataType, netsData } from './data';
import styled from 'styled-components';

const Page = styled.main`
  background: #f8faf7;
  text-align: left;
`;

const Banner = styled.div`
  padding: 0.75rem 1rem;
  background: #f1e8d7;
  color: #594525;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
`;

const Hero = styled.section`
  padding: clamp(2rem, 8vw, 4rem) 0;
  background: radial-gradient(ellipse at 85% 20%, #c1d7c061, transparent 42%),
    linear-gradient(135deg, #f4f7f1, #eaf1e8);
`;

const LogoContainer = styled.div`
  display: inline-block;
  margin-bottom: 2rem;
  padding: 0.75rem 1rem;
  border: 1px solid #e4eae5;
  border-radius: 0.75rem;
  background: white;
`;

const Logo = styled.img`
  max-height: 5rem;
`;

const Title = styled.h1`
  color: #203b2a;
  font-size: clamp(2.6rem, 7vw, 5rem);
  font-weight: 750;
  letter-spacing: -0.065em;
  line-height: 1.05;

  span {
    color: #315d40;
  }
`;

const Eyebrow = styled.p`
  margin-bottom: 0.875rem;
  color: #315d40;
  font-weight: 750;
  letter-spacing: 0.14em;
`;

const Description = styled.p`
  margin: 1.5rem 0;
  color: #596a5e;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 0.875rem 1.375rem;
  border-radius: 0.5rem;
  background: #315d40;
  color: white !important;
  font-weight: 650;
  text-decoration: none !important;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #244630;
  }
`;

const SectionTitle = styled.h2`
  color: #23352a;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 750;
  letter-spacing: -0.045em;
`;

const Count = styled.span`
  padding: 0.5rem 0.8rem;
  border: 1px solid #e4eae5;
  border-radius: 99rem;
  background: white;
  color: #68776c;
  font-size: 0.85rem;
`;

const Net = styled(Card)`
  border: 1px solid #e4eae5;
  border-radius: 1rem;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: translateY(-0.3125rem);
    border-color: #b6cbb9;
    box-shadow: 0 1rem 2.1875rem #1b39271f;
  }
`;

const ProductImage = styled(Card.Img)`
  height: clamp(13rem, 25vw, 18rem);
  padding: 1rem;
  object-fit: contain;
`;

const ProductLink = styled.span`
  color: #315d40;
  font-size: 0.9rem;
  font-weight: 650;
`;

const Footer = styled.footer`
  padding: 2.75rem 0;
  background: #eef3ed;
  border-top: 1px solid #e4eae5;

  h3 {
    margin-bottom: 0.875rem;
    font-size: 0.95rem;
    font-weight: 750;
  }

  p {
    color: #68776c;
  }

  a {
    display: block;
    margin-bottom: 0.625rem;
    color: #315d40 !important;
  }
`;

const ModalPhoto = styled.img`
  width: 100%;
`;

function App() {
  const [selectedNet, setSelectedNet] = useState<netDataType | null>(null);

  return (
    <Page>
      <Banner>We are closed until January 2027</Banner>

      <Hero>
        <Container>
          <Row>
            <Col xs={12} lg={9} xl={8}>
              <LogoContainer>
                <Logo src='./assets/logo.png' />
              </LogoContainer>

              <Title>
                Research nets
                <br />
                <span>made for you.</span>
              </Title>

              <Description>
                We make a variety of research nets to suit your requirements.
                <br />
                Get in touch and we will see how we can help.
              </Description>

              <ContactButton href='mailto:jepnets@gmail.com'>
                Get in touch
              </ContactButton>

              <p className='mt-4 mb-0 text-secondary'>
                Click on images to view specifications and enquire about a net.
              </p>
            </Col>
          </Row>
        </Container>
      </Hero>

      <section className='py-5'>
        <Container>
          <Row className='align-items-end g-3 mb-4'>
            <Col>
              <Eyebrow className='mb-2'>OUR COLLECTION</Eyebrow>
              <SectionTitle className='mb-2'>Explore our nets</SectionTitle>
              <p className='mb-0 text-secondary'>
                Find a net to suit your research needs.
              </p>
            </Col>

            <Col xs='auto'>
              <Count>
                {netsData.length}{' '}
                {netsData.length === 1 ? 'product' : 'products'}
              </Count>
            </Col>
          </Row>

          <Row className='g-4'>
            {netsData.map((net) => (
              <Col xs={12} sm={6} lg={4} key={net.name}>
                <Net onClick={() => setSelectedNet(net)}>
                  <ProductImage src={net.photoURL} loading='lazy' />

                  <Card.Body className='d-flex flex-column gap-3'>
                    <Card.Title className='fw-bold'>{net.name}</Card.Title>
                    <ProductLink>View specifications</ProductLink>
                  </Card.Body>
                </Net>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Footer>
        <Container>
          <Row className='g-4'>
            <Col xs={12} md={6}>
              <h3>Location</h3>
              <p>Hamilton, Waikato, New Zealand</p>
            </Col>

            <Col xs={12} md={6}>
              <h3>Contact</h3>
              <a href='tel:+6421368967'>021 368 967</a>
              <a href='mailto:jepnets@gmail.com'>jepnets@gmail.com</a>
            </Col>
          </Row>
        </Container>
      </Footer>

      <Modal
        show={!!selectedNet}
        onHide={() => setSelectedNet(null)}
        centered
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title id='product-modal-title'>
            {selectedNet?.name}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedNet && (
            <Row className='g-4'>
              <Col xs={12} md={6}>
                <ModalPhoto src={selectedNet.photoURL} />
              </Col>

              <Col xs={12} md={6}>
                <Eyebrow>Standard Specifications</Eyebrow>

                <ul className='lh-lg'>
                  {selectedNet.specs.map((spec, index) => (
                    <li key={`${spec}-${index}`}>{spec}</li>
                  ))}
                </ul>

                <a
                  href={`mailto:jepnets@gmail.com?subject=${encodeURIComponent(
                    `Enquiry about ${selectedNet.name}`
                  )}`}
                >
                  Enquire about this net →
                </a>
              </Col>
            </Row>
          )}
        </Modal.Body>
      </Modal>
    </Page>
  );
}

export default App;
