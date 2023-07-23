import { NavLink } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-dark fixed-top navbar-expand-lg bg-dark bg-body-dark m-0 p-2">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand"
            style={{
              fontFamily: "cursive",
              padding: "0px",
              marginBottom: "0px",
              justifyContent: "center",
            }}
            to="/"
          >
            <h4>NewsWala</h4>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/General">
                  <h5>General</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Business">
                  <h5>Business</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Entertainment">
                  <h5>Entertainment</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Health">
                  <h5>Health</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Science">
                  <h5>Science</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Sports">
                  <h5>Sports</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Technology">
                  <h5>Technology</h5>
                </NavLink>
              </li>
            </ul>
            <h4>
              <i
                className={`bi-${props.theme}-fill p-2`}
                style={{ color: "white" }}
                onClick={props.handleDarkTheme}
                id="icon1"
              ></i>
            </h4>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
