import "./Footer.scss";
import productos from "../../assets/Images/products.png";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <h1>Con el Patrocinio de</h1>
        <img src={productos} alt="productos" className="productos" />
      </div>
    </footer>
  );
};

export default Footer;
