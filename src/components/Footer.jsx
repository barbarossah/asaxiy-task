import Button from "../ui/Button";
import meta from "../assets/images/meta.svg";
import linkedin from "../assets/images/linkedin.svg";
import twitter from "../assets/images/twitter.svg";
import utube from "../assets/images/utube.svg";
import instagram from "../assets/images/instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <p>&copy;2023 Yourcompany</p>
          <a href="#">Landing</a>
          <Button>Purchase now</Button>
        </div>
        <div className="footer-bottom">
          <nav>
            <ul className="footer-bottom__list">
              <li>
                <a className="footer-bottom__link" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="footer-bottom__link" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="footer-bottom__link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <ul className="footer-bottom-end__list">
            <li className="footer-bottom-end__item">
              <a className="footer-bottom-end__link" href="">
                <img src={meta} alt="" />
              </a>
            </li>
            <li className="footer-bottom-end__item">
              <a className="footer-bottom-end__link" href="">
                <img src={linkedin} alt="" />
              </a>
            </li>
            <li className="footer-bottom-end__item">
              <a className="footer-bottom-end__link" href="">
                <img src={twitter} alt="" />
              </a>
            </li>
            <li className="footer-bottom-end__item">
              <a className="footer-bottom-end__link" href="">
                <img src={utube} alt="" />
              </a>
            </li>
            <li className="footer-bottom-end__item">
              <a className="footer-bottom-end__link" href="">
                <img src={instagram} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
