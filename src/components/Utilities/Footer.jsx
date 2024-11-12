import { useMemo } from "react";
import SectionSubscribe from "./SectionSubscribe";
import SocialMediaIcons from "./SocialMediaIcons";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="padding-i-1 padding-b-1half">
      <div className="wrapper grid gap-1half">
        <p className="subtitle lg bold">
          Real life. Real situations. Real learning.
        </p>

        <nav className="section-footer_menu row jc-sb gap-1">
          <section aria-label="Internal Links">
            <h3>The Meticulous Manicurist</h3>
            <ul className="margin-bs-quarter">
              <li>
                <Link to="/">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/training/academy">Nail Academy</Link>
              </li>
              <li>
                <Link to="/appointments">Appointments</Link>
              </li>
              <li>
                <Link to="/network-map">Network Map</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </section>
          <section aria-label="Find More Info">
            <h3>Info</h3>
            <ul className="margin-bs-quarter">
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
              <li>
                <Link to="/nail-school">Nail School Partner Program</Link>
              </li>
              <li>
                <Link to="/shipping">Shipping & Returns</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </section>
          <section aria-label="Resources">
            <h3>Associated Websites</h3>
            <ul className="margin-bs-quarter">
              <li>
                <a
                  href="https://academy.themeticulousmanicurist.com/"
                  target="_blank"
                >
                  Online Meticulous Manicurist Nail Academy
                </a>
              </li>
              <li>
                <a
                  href="http://pedicuretraining.com/athometraining"
                  target="_blank"
                >
                  Pedicure Training for Caretakers
                </a>
              </li>
              <li>
                <a
                  href="https://pro.themeticulousmanicurist.com/"
                  target="_blank"
                >
                  Professional Wholesale Beauty Supplies
                </a>
              </li>
            </ul>
          </section>
        </nav>
        <SectionSubscribe />
        <div>
          <div className="row jc-cen">
            <SocialMediaIcons />
          </div>
          <section className="small ta-cen margin-bs-1">
            <p>&copy;{currentYear} The Meticulous Manicurist</p>
            <address className="margin-bs-quarter">
              <span className="bold">Meticulous Manicurist LLC</span> 28028 N
              151st Ave Surprise, AZ 85387
              <br />
              <a className="margin-is-quarter" href="tel:+17349449363">
                (734) 944-9363
              </a>
              <a
                className="margin-is-quarter"
                href="mailto:meticulousmanicurist@gmail.com"
              >
                meticulousmanicurist@gmail.com
              </a>
            </address>
          </section>
        </div>
      </div>
    </footer>
  );
}
