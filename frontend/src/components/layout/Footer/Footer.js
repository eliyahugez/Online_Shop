import "./Footer.css";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import { Facebook, Twitter, WhatsApp, Instagram } from "@mui/icons-material";

const Footer = () => {
  const phoneNumber = "+972524501974";
  const message = encodeURIComponent(
    "Hi, I saw a product on your website that I'm interested in. Can you provide more information?"
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <img src={playStore} alt="playStore" />
        <img src={appStore} alt="appStore" />
      </div>
      <div className="midFooter">
        <h1>JewishShop</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights 2022 &copy; Eliyahu Gez</p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <div className="footer-icons">
          <a href="#" target="_blank">
            <Facebook fontSize="large" />
          </a>
          <a href="#" target="_blank">
            <Twitter fontSize="large" />
          </a>
          <a href={whatsappLink} target="_blank">
            <WhatsApp fontSize="large" />
          </a>
          <a href="#" target="_blank">
            <Instagram fontSize="large" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
