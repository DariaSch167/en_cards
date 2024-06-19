import React from "react";
import MenuElement from "./menuElement.jsx";
import list from "../../images/sidemenu_list.svg";
import training from "../../images/sidemenu_training.svg";

function SideMenu() {
  return (
    <React.Fragment>
      <div className="side-menu__wrapper">
        <MenuElement img={list} name="words_list" />
        <MenuElement img={training} name="words_training" />
      </div>
    </React.Fragment>
  );
}
export default SideMenu;
