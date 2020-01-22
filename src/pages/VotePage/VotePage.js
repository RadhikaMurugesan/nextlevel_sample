import React, { Component } from "react";
import Button from "../../components/Button/Button";
import "./style.css";

class VotePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "Go", votes: 0 },
        { name: "Java", votes: 0 },
        { name: "React", votes: 0 },
        { name: "Javascript", votes: 0 }
      ]
    };
    this.vote = this.vote.bind(this);
  }

  vote(i, prevState) {
     
    let newLanguages = [...prevState.languages];
     newLanguages[i].votes++;
     
     return { languages:  newLanguages}
    
  }

  render() {
      
    
    return (
      <>
        <h1>Vote Your Language!</h1>
        <div className="languages">
          {this.state.languages.map((lang, i) => (
            <div key={i} className="language">
              <div className="voteCount">{lang.votes}</div>
              <div className="languageName">{lang.name}</div>
              <Button onClick={() => this.setState((prevState) => this.vote(i, prevState))} />
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default VotePage;
