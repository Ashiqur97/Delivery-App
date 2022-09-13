import React from 'react'
import { Container,Row,Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from "../../assets/images/res-logo.png";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3' md='4' sm='6'>
        <div className='footer__logo text-start'>
              <img src={logo} alt="logo" />
                <h5 className='footer__title'>Tasty Food</h5>

                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>

              </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
          <h4>Delivery Time</h4>
          <ListGroup>
          <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg='3' md='4' sm='6'>
        <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: Dhaka, Dhanmondi sector12, Bangladesh</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 01825806917</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: ashiqurrahman081@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
        </Col>

        <Col lg='3' md='4' sm='6'>
        <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
        </Col>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by Ashiqur Rahman. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/profile.php?id=100008488038242">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>


              <span>
                {" "}
                <Link to="https://www.linkedin.com/in/ashiqur-rahman-abir-749b5a1b9/">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
              
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  </footer>
}

export default Footer
