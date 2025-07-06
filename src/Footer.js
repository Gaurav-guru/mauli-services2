import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="text-black py-5"
      style={{
        backgroundColor: "#E0DCC8",
        boxShadow: 'rgba(10, 10, 20, 0.5)',
        overflowX: "hidden"
      }}
    >
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Mauli Services</h5>
            <p className="small">
              “Mauli Services – Your Trusted Partner for Quality Repairs and Exceptional Service.”
            </p>
            <div className="d-flex gap-3">
  <a
    href="https://www.instagram.com/maul.iservice/?igsh=YmNvanA4dmw4eXZt#"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram className="fs-4" />
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <div className="d-flex flex-column">
              <a onClick={() => scrollToSection("home-section")} style={{ cursor: "pointer" }}>Home</a>
              <a onClick={() => scrollToSection("about-section")} style={{ cursor: "pointer" }}>About Us</a>
              <a onClick={() => scrollToSection("services-section")} style={{ cursor: "pointer" }}>Services</a>
              <a onClick={() => scrollToSection("contact-section")} style={{ cursor: "pointer" }}>Contact Us</a>
            </div>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Our Services</h5>
            <ul className="list-unstyled small">
              <li>LED TV Repair Services</li>
              <li>LCD TV Repair Services</li>
              <li>TV Installation Service</li>
            </ul>
          </div>

          {/* Address */}
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Address</h5>
            <p className="small">
              📍 CHARHOLI ROAD, TANISH PEARLS, OPP.BANK OF MAHARASHTRA, PIMPRI-CHINCHWAD, PUNE-412105
            </p>
            <p className="small">📞 8007113950</p>
            <p className="small">📧 dineshhake975@gmail.com</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="row border-top pt-4 mt-4">
          <div className="col-md-6 text-center text-md-start small">
            © Mauli Services, All Right Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end small">
            Designed & Developed By{" "}
            <a
              href="https://Techgurusolutions##.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-info text-decoration-none"
            >
              Techguru Solutions Pvt. Ltd.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
