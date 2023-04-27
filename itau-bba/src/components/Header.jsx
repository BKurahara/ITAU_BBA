import "./Header.scss";
import itauLogo from "../assets/itau-bba.svg";

const Header = () => {
  return (
    <div className="header-bar">
      <img className="logo" src={itauLogo} alt="Logo itaú" />
      <div className="header-content">
        <h2>PT</h2>
        <span className="header-ornament"></span>
        <div className="header-login-info">
          <span className="login-image"></span>
          <div className="login-text">
            <p className="login-name">João Hurt</p>
            <p className="login-job">Diretor geral</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
