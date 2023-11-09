//HOOKS
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header" id="header">
      <nav className="header__menu">
        <Link className="menu-link active" to="./">
          Home
        </Link>
        <Link className="menu-link" to="./projects">
          Proyectos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
