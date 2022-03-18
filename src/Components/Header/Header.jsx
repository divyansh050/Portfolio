import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home">
            {/* Divyansh */}
            <img
              className="logo"
              // width="200px"
              src="https://i.ibb.co/tKgk96M/logo.png"
              alt=""
            />
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
