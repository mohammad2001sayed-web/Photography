import React from "react";
import foto from "../../assets/imgi_1_logo-GdqARQRt.png";
import { Link, NavLink } from "react-router";
import styles from "./navebar.module.css";

function NavBar() {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.customNavbar}`}
    >
      <div className="container">
        <Link
          className={`navbar-brand d-flex align-items-center gap-2 ${styles.logoArea}`}
          to="/home"
        >
          <img className={styles.logo} src={foto} alt="" />
          <div className="d-flex flex-column align-items-start">
            <span className={`fw-bold text-light ${styles.logoTitle}`}>
              عدسة
            </span>
            <span className={` ${styles.logoSubtitle}`}>
              عالم التصوير الفوتوغرافي
            </span>
          </div>
        </Link>

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
          <ul className={`navbar-nav mx-auto ${styles.navLinksPill}`}>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${styles.customNavLink}`}
                to="/home"
              >
                الرئيسية
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${styles.customNavLink}`}
                to="/Forkify"
              >
                المدونة
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${styles.customNavLink}`}
                to="/about"
              >
                من نحن
              </NavLink>
            </li>
          </ul>

          <div
            className={`d-flex align-items-center gap-3 ${styles.leftSideItems}`}
          >
            <Link
              to="/blogs"
              className={`text-light fs-5 ${styles.searchIcon}`}
              title="بحث"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>

            <Link
              to="/blogs"
              className={`btn btn-primary rounded-pill ${styles.startReadingBtn}`}
            >
              ابدأ القراءة
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
