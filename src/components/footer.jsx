import React from "react";
import gitLogo from "../images/footer_git.svg";

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <div className="footer__title">
          <img src={gitLogo} alt="Git" />
          <h3>DariaSch167</h3>
        </div>
      </footer>
    </React.Fragment>
  );
}
export default Footer;
