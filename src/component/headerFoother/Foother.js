import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-light text-dark p-5 pb-3">
      <Row>
        <Col md={3}>
          <h5 className="fw-bold">McDonald's</h5>
          <div className="flex-column">
            <h7 href="#">Hubungi Kami</h7>
            <h7 href="#">Tentang Kami</h7>
            <h7 href="#">Newsroom</h7>
            <h7 href="#">Karier</h7>
          </div>
        </Col>
        <Col md={3}>
          <h5 className="invisible">.</h5>
          <div className="flex-column">
            <h7 href="#">Layanan</h7>
            <h7 href="#">Sertifikasi & Jaminan Kualitas</h7>
            <h7 href="#">CSR</h7>
            <h7 href="#">Aplikasi McDonald’s</h7>
          </div>
        </Col>
        <Col md={6}>
          <h5 className="fw-bold">Hubungi Kami</h5>
          <div className="mb-3 d-flex gap-3">
            <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaWhatsapp /></a>
          </div>
          <div className="d-flex gap-2">
            <img
              src="https://www.mcdonalds.co.id/assets/img/common/button_appstore.png"
              alt="App Store"
              width="100"
            />
            <img
              src="https://www.mcdonalds.co.id/assets/img/common/button_playstore.png"
              alt="Google Play"
              width="110"
            />
          </div>
        </Col>
      </Row>
      <hr />
      <Row className="pt-2">
        <Col md={6}>
          <small>© 2025 McDonald's Indonesia</small>
        </Col>
        <Col md={6} className="text-md-end">
          <div className="justify-content-end">
            <h7 href="#">Syarat & Ketentuan</h7>
            <h7 href="#">Kebijakan Privasi</h7>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
