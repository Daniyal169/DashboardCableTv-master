import React from "react";
import "../styles/AllPages.css";
import { Link } from "react-router-dom";
const AllPages = () => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="col-8">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Home
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  <span>Main Section</span>
                  <Link to="main_section">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
                <li>
                  <span>Hero Section</span>
                  <Link to="hero_section">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
                <li>
                  <span>Blogs</span>
                  <Link to="blog_section">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
                <li>
                  <span>Services</span>
                  <Link to="service_section">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
                <li>
                  <span>About Shop Satellite TV</span>
                  <Link to="aboutshopsatellite_section">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
                <li>
                  <span>Check Service Providers</span>
                  <Link to="checkserviceprovider_section">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
                <li>
                  <span>Footer</span>
                  <Link to="footer_section">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
                <li>
                  <span>Service Slider Cable TV</span>
                  <Link to="slider_cabletv">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>{" "}
                <li>
                  <span>Service Slider Cable Internet</span>
                  <Link to="slider_cableinternet">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
                <li>
                  <span>Service Slider Satellite Tv</span>
                  <Link to="slider_satellitetv">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
                <li>
                  <span>Service Slider Satellite Int</span>
                  <Link to="slider_satelliteinternet">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>{" "}
                <li>
                  <span>Blog Card 1</span>
                  <Link to="blog_card1">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
                <li>
                  <span>Blog Card 2</span>
                  <Link to="blog_card2">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
                <li>
                  <span>Blog Card 3</span>
                  <Link to="blog_card3">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Service Providers
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {" "}
              <ul>
                <li>
                  <span>Hero Common</span>
                  <Link to="serviceproivder/hero_common">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              About Us
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  <span>Hero Common</span>
                  <Link to="aboutus/hero_common">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Contact Us
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  <span>Hero Common</span>
                  <Link to="contactus/hero_common">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
                <li>
                  <span>Contact-Content</span>
                  <Link to="contactus/contact_content">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Services
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {" "}
              <ul>
                <li>
                  <span>Hero Common</span>
                  <Link to="services/hero_common">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-8">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Privacy Policy
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {" "}
              <ul>
                <li>
                  <span>Hero Common</span>
                  <Link to="privacy_policy/hero_common">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
                <li>
                  <span>Content-PrivacyPolicy</span>
                  <Link to="privacy_policy/content">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              Cable TV
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  <span>Hero Common</span>
                  <Link to="cabletv/hero_common">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
                <li>
                  <span>Cable TV</span>
                  <Link to="cabletv/content">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              Cable Internet
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  <span>Hero Common</span>
                  <Link to="cableinternet/hero_common">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
                <li>
                  <span>Cable Internet</span>
                  <Link to="cableinternet/content">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              Satellite Internet
            </button>
          </h2>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  <span>Hero Common</span>
                  <Link to="satellite_internet/hero_common">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
                <li>
                  <span>Satellite Internet</span>
                  <Link to="satellite_internet/content">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              Satellite TV
            </button>
          </h2>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  <span>Hero Common</span>
                  <Link to="satellite_tv/hero_common">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
                <li>
                  <span>Satellite TV</span>
                  <Link to="satellite_tv/content">
                    <button className="btn btn-secondary btn-sm ms-2">
                      Edit
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPages;
