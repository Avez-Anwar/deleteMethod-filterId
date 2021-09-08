import React from "react";
import "./styles.css";
import Todo from "./Todo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: " ",
      items: []
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  hanldeSubmit = (e) => {
    e.preventDefault();
    if (this.state.text !== " ") {
      this.setState({
        items: [...this.state.items, this.state.text],
        text: " "
      });
    }
  };

  handleDelete = (id) => {
    console.log("Delete", id);
    const OldItems = [...this.state.items];
    console.log("OldItems", OldItems);
    const items = OldItems.filter((element, i) => {
      return i !== id;
    });
    console.log("NewItems", items);
    this.setState({ items: items });
  };

  render() {
    console.log(this.state.text);
    console.log(this.state.items);

    return (
      <div className="App">
        <form onSubmit={this.hanldeSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add</button>
          <Todo items={this.state.items} handleDelete={this.handleDelete} />
        </form>
      </div>
    );
  }
}

export default App;
