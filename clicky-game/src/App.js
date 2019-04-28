import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ClickTile from "./components/ClickTile";
import tiles from "./tiles.json";

class App extends Component {
  // Setting this.state.tiles to the tiles json array
  state = {
    tiles,
    clickedTiles: [],
    score: 0,
    topScore: 0
  };

  handleEvent = id => {

    function shuffleTiles(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      return array;
    }
    
    // Call shuffle tiles here
    shuffleTiles(this.state.tiles);
    
    if (this.state.clickedTiles.indexOf(id) === -1) {
      console.log(this.state.clickedTiles.indexOf(id));
      this.setState({
        clickedTiles: [...this.state.clickedTiles, id],
        score: this.state.score +1
      })
    } else if (this.state.score > this.state.topScore) {
      this.setState({ 
        score: 0,
        topScore: this.state.score,
        clickedTiles: []
      }) 
    }  else {
        this.setState({
          score: 0,
          clickedTiles: []
        })
      }
    
  };
  
  // Map over this.state.tiles and render a ClickTile component for each tile object
  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Header />
        <Main>
          {tiles.map(tile => (
            <ClickTile
              id={tile.id}
              key={tile.id}
              name={tile.name}
              image={tile.image}
              onClick={this.handleEvent}
            />
          ))}
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
