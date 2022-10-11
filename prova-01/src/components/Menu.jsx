import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Link } from "react-router-dom";

const Menu = ({ theme = "dark" }) => {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      } pr-5 shadow`}
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          CRUD
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Estudantes
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/student/list">
                      List
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/student/create">
                      Create
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/student/edit">
                      Editar
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Professor
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/student/list">
                      List
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/student/create">
                      Create
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/student/edit">
                      Editar
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
