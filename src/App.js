import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nom: "", age: 0, email: "", password: "", showForm: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    this.setState({
      showForm: true,
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom :<br></br>
          <input
            type="text"
            name="nom"
            value={this.state.nom}
            onChange={this.handleChange}
          />
          <br></br>
        </label>
        <label>
          Age :<br></br>
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br></br>
        </label>
        <label>
          Email :<br></br>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br></br>
        </label>
        <label>
          Password :<br></br>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br></br>
        </label>
        <button type="submit"> Enregistrer</button>
        {this.state.showForm && (
          <p>
            le nom est :{this.state.nom}
            <br></br> l'age est :{this.state.age} <br></br> email est :{" "}
            {this.state.email} <br></br> password est : {this.state.password}{" "}
          </p>
        )}
      </form>
    );
  }
}

export default App;
