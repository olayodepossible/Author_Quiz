import React, {Component} from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import QuizContinue from "./components/QuizContinue";
import QuizTurn from "./components/QuizTurn";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <QuizTurn />
        <QuizContinue />
        <Footer/>
      </div>
    );
  }
  
}

export default App;
