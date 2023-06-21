// ** Icons Import
import { Heart } from "react-feather";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <p className="clearfix mb-0">
      <span className="float-md-start d-block d-md-inline-block mt-25">
        COPYRIGHT © {new Date().getFullYear()}{" "}
        <a
          href="https://1.envato.market/pixinvent_portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pixinvent
        </a>
        <span className="d-none d-sm-inline-block">, All rights Reserved</span>
      </span>
      <span className="float-md-end d-none d-md-block">
        Developed by <Link to="https://www.linkedin.com/in/imrul-afnan" target="_blank">Imrul Afnan</Link>
        <Heart size={14} />
      </span>
    </p>
  );
};

export default Footer;
