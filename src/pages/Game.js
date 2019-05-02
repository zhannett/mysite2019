import React, { Component } from "react";
import styled from "@emotion/styled";

import * as Layout from "../components/shared/Layout";
// import W3C from "../components/shared/W3C";
import Header from "../components/shared/Header";
import TopNav from "../components/shared/TopNav";
// import game from "../game/com.gwtapps.tutorial.Game/";

class Game extends Component {
  render() {
    return (
      <>
        <Header />
        <TopNav />
        <div role="main" style={{ width: "100%" }}>
          <Layout.AsideLeft role="complementary">
            {/*<W3C />*/}
          </Layout.AsideLeft>

          <main>
            <Layout.H1>Game: Hangman</Layout.H1>
            <h2>Guess the Movie Name</h2>
            <div id="game" />
          </main>
          <iframe
            src="https://www.facebook.com/plugins/like.php?href=http://www.janetkulyk.com/game.php"
            scrolling="no"
            frameBorder="0"
            style={{ border: "none", width: "450px", height: "80px" }}
          />
        </div>

        <iframe
          src="../game/com.gwtapps.tutorial.Game/hm1.gif"
          scrolling="no"
          frameBorder="0"
          style={{ border: "none", width: "450px", height: "80px" }}
        />

        {/*<script src="com.gwtapps.tutorial.Game/com.gwtapps.tutorial.Game.nocache.js"></script>*/}
      </>
    );
  }
}

export default Game;
