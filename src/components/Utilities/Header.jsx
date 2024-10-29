import { NavLink } from "react-router-dom";
import BtnIcon from "./BtnIcon";

export default function Header() {
  return (
    <header className="padding-1">
      <div className="wrapper">
        <div className="icons-wrapper row jc-end gap-half ai-cen">
          {/* <div class="search-bar-wrapper">
            <input
              type="text"
              aria-label="search"
              placeholder="Search"
              className="search-bar-input"
            />
            <button aria-label="Search" title="Search" className="btn-search">
              <i
                className="fas fa-sm fa-magnifying-glass"
                aria-hidden="true"
              ></i>
            </button>
          </div> */}

          <BtnIcon label="Search" iconClass="fa-magnifying-glass" />
          <BtnIcon label="Checkout" iconClass="fa-cart-shopping" />
          <BtnIcon label="Login" iconClass="fa-user" />
        </div>
        <NavLink to="/" className="margin-i-auto ta-cen logo-wrapper">
          <img
            src="images/meticulous_logo.png"
            alt="Meticulous Manicurist Logo"
            width="200px"
          />
        </NavLink>
        <nav className="margin-bs-1 primary-nav">
          <ul className="row gap-1 jc-cen fw-wrap">
            <li>
              <NavLink to="/">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/training">Training</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Appointments</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
