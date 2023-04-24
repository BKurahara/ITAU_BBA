import "./Header.scss";

const Header = () => {
  return (
    <div className="header-bar">
      <h1>Itau BBa</h1>
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
