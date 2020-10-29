import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      item: "item",
      items: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitItem = this.submitItem.bind(this);
  }

  handleInputChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  }

  submitItem() {
    let items = this.state.items;
    let item = this.state.item;

    items.push(item);

    this.setState({ items: items });
  }

  render() {
    return (
      <div className="App">
        <h1>To do list</h1>
        <input
          type="text"
          name="item"
          onChange={this.handleInputChange}
        ></input>
        <br></br>
        <br />
        <button type="submit" onClick={this.submitItem}>
          Submit
        </button>

        <h2> List are: </h2>

        {this.state.items.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    );
  }
}

export default App;
