import React from "react";
import SideMenu from "./sideMenu/sideMenu.jsx";
import WordsTraining from "./wordsTraining/wordsTraining.jsx";
import WordsList from "./wordsList/wordsList.jsx";

function Main() {
  return (
    <React.Fragment>
      <main>
        <SideMenu />
        <WordsList />
        <WordsTraining />
      </main>
    </React.Fragment>
  );
}
export default Main;
