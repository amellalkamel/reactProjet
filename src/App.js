import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      age: 0,
      email: "",
      password: "",
      hobbies: "sport",
      showForm1: true,
      showForm2: false,
      showForm3: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    // this.forum1 = this.forum1.bind(this);
  }
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }
  handleClick() {
    this.setState({
      showForm1: false,
      showForm2: true,
    });
  }
  handleClick2() {
    this.setState({
      showForm1: true,
      showForm2: false,
      showForm3: false,
    });
  }
  handleClick3() {
    this.setState({
      showForm1: false,
      showForm2: false,
      showForm3: true,
    });
  }

  render() {
    return (
      <div>
        {this.state.showForm1 && (
          <form>
            <label>
              {" "}
              Form1 <br></br>
            </label>

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
            <button type="submit" onClick={this.handleClick}>
              {" "}
              next{" "}
            </button>
          </form>
        )}
        {this.state.showForm2 && (
          <form>
            <label>
              {" "}
              Hobbies <br></br>
            </label>
            <select
              name="hobbies"
              value={this.state.hobbies}
              onChange={this.handleChange}
            >
              <option value="sport">Sport</option>
              <option value="domino">Domino </option>
              <option value="jeuxechec">Jeux d'echec</option>
              <option value="lecture">Lecture</option>
            </select>
            <br></br>
            <button type="submit" onClick={this.handleClick2}>
              {" "}
              prev{" "}
            </button>
            <button type="submit" onClick={this.handleClick3}>
              {" "}
              next{" "}
            </button>
          </form>
        )}
        {this.state.showForm3 && (
          <p>
            le nom est :{this.state.nom}
            <br></br> l'age est :{this.state.age} <br></br> email est :{" "}
            {this.state.email} <br></br> password est : {this.state.password}{" "}
            <br></br> hobbies est : {this.state.hobbies}
          </p>
        )}
      </div>
    );
  }
}

export default App;
