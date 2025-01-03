import { NavLink } from "react-router-dom";
import ExpandedBtnIcon from "./ExpandedBtnIcon";
import Dropdown from "./Dropdown";

export default function Header() {
  return (
    <header className="padding-1 bg-accent">
      <div className="wrapper">
        <div className="icons-wrapper row jc-end gap-half ai-cen">
          <ExpandedBtnIcon label="Search" iconClass="fa-magnifying-glass">
            <label className="small">
              <p className="visually-hidden">Search Meticulous Manicurist</p>
              <input
                type="search"
                placeholder="Search"
                className="search-bar-input"
              />
            </label>
          </ExpandedBtnIcon>
          <ExpandedBtnIcon label="Cart" iconClass="fa-cart-shopping">
            <a href="/" className="small">
              Cart
            </a>
          </ExpandedBtnIcon>
          <ExpandedBtnIcon label="Login" iconClass="fa-user">
            <a href="/" className="small">
              Login
            </a>
          </ExpandedBtnIcon>
        </div>
        <NavLink
          to="/"
          className="margin-i-auto margin-bs-2 ta-cen logo-wrapper"
        >
          <img
            className="header-logo"
            src="/images/meticulous_logo.png"
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
              <Dropdown title="Training">
                <NavLink to="/training/academy">Nail Academy</NavLink>
                <NavLink to="/training/classes">Classes</NavLink>
                <NavLink to="/training/caregiver-training">
                  Caregiver + Nurses training
                </NavLink>
              </Dropdown>
            </li>
            <li>
              <NavLink to="tutorials">Tutorials</NavLink>
            </li>
            <li>
              <Dropdown title="Appointments">
                <NavLink to="/appointments">Meticulous Appointments</NavLink>
                <NavLink to="/network-map">Network Map</NavLink>
              </Dropdown>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
