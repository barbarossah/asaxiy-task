/* eslint-disable react/prop-types */

import Button from "../ui/Button";

function SiteHeader(props) {
  return (
    <header
      className={`site-header ${props.isSticky ? "site-header--sticky" : ""}`}
    >
      <div className="container">
        <div className="site-header__wrapper">
          <nav className="site-header__nav">
            <ul className="site-header__list">
              <li className="site-header__list-item">
                <a className="site-header__nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="site-header__list-item">
                <a className="site-header__nav-link" href="#">
                  About
                </a>
              </li>
              <li className="site-header__list-item">
                <a className="site-header__nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <a href="#" className="site-header__logo-link">
            Landing
          </a>
          <Button>Buy Now</Button>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
