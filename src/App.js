import React from "react";

export default class App extends React.Component {
  state = { people: [] };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((json) => this.setState({ people: json.people }));
  }

  peopleCards = (people) => {
    return people.map((person, index) => {
      return (
        <li key={index}>
          <h2>{person.name}</h2>
          <i>{person.craft}</i>
        </li>
      );
    });
  };

  render() {
    return <ul>{this.peopleCards(this.state.people)}</ul>;
  }
}
