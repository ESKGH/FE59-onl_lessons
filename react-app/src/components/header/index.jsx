import { Button } from "../button";
import { ModeButton } from "../mode-button";
import icon from "./images/icon.svg";
import  "./styles.scss";

export const Header = ({
  setIsShowModal,
  setPage,
  isBlackTheme,
  handleChangeTheme,
}) => {
  return (
    <header className={`header ${isBlackTheme ? "header_black" : ""}`}>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__log">
            <img src={icon} alt="" />
          </div>
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <button
                  className="header__link"
                  onClick={() => setPage("home")}
                >
                  Home
                </button>
              </li>
              <li className="header__item">
                <button
                  href="#"
                  className="header__link"
                  onClick={() => setPage("blog")}
                >
                  Blog
                </button>
              </li>
              <li className="header__item">
                <button
                  href="#"
                  className="header__link"
                  onClick={() => setPage("todos")}
                >
                  ToDos
                </button>
              </li>
              <li className="header__item">
                <button
                  href="#"
                  className="header__link"
                  onClick={() => setPage("Signin")}
                >
                  Sign In
                </button>
              </li>
              <li className="header__item">
                <button
                  href="#"
                  className="header__link"
                  onClick={() => setPage("SignUp")}
                >
                  Sign Up
                </button>
              </li>
              <li className="header__item">
                <Button
                  title="Contact us!"
                  isPinkBackgroud={true}
                  setIsShowModal={setIsShowModal}
                />
              </li>
              <li className="header__item">
                <ModeButton
                  isBlackTheme={isBlackTheme}
                  handleChangeTheme={handleChangeTheme}
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
