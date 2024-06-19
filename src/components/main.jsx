import React from "react";
import SideMenu from "./sideMenu/sideMenu.jsx";
import WordsTraining from "./wordsTraining/wordsTraining.jsx";

function Main() {
  return (
    <React.Fragment>
      <main>
        <SideMenu />
        <WordsTraining />
      </main>
    </React.Fragment>
  );
}
export default Main;
