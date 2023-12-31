import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="https://www.zenithacademy.com/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.zenithacademy.com/exam-main-page.php?content_id=czoyOiIzNCI7"
              >
                MBA
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.zenithacademy.com/exam-main-page.php?content_id=czoyOiIzNSI7"
              >
                Law
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.zenithacademy.com/exam-main-page.php?content_id=czoyOiIzNiI7"
              >
                IPM
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.zenithacademy.com/slider-content.php?content_id=czoxOiI0Ijs="
              >
                Courses
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="https://www.zenithacademy.com/content.php?content_id=czoyOiI0MiI7"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Mocks
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a
                  className="dropdown-item"
                  href="https://www.zenithacademy.com/online-test/www/"
                >
                  CAT
                </a>
                <a
                  className="dropdown-item"
                  href="https://www.zenithacademy.com/online-test/www/"
                >
                  XAT
                </a>
                <a
                  className="dropdown-item"
                  href="https://www.zenithacademy.com/online-test/www/"
                >
                  SNAP
                </a>
                <a
                  className="dropdown-item"
                  href="https://www.zenithacademy.com/online-test/www/"
                >
                  NMAT
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
