import React from "react";
import "../styles/main.css";
import SideMenu from "./sideMenu/sideMenu.jsx";
// import WordsTraining from "./wordsTraining/wordsTraining.jsx";
import WordsList from "./wordsList/wordsList.jsx";

function Main() {
  return (
    <React.Fragment>
      <main>
        <SideMenu />
        <WordsList mode="edit-mode" />
      </main>
    </React.Fragment>
  );
}
export default Main;
