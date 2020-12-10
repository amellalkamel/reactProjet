import React from "react";

class Forum1 extends React.Component {
  constructor(props) {
    super(props);
    console.log("propppppps in forum1", props);
    // this.state = {
    //   nom: this.props.nom,
    //   age: this.props.age,
    //   email: this.props.email,
    //   password: this.props.password,
    //   showForm: this.props.showForm,
    //   showForm2: false,
    // };
  }

  render() {
    return (
      <div>
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
              value={this.props.nom}
              onChange={this.props.handleChange}
            />
            <br></br>
          </label>
          <label>
            Age :<br></br>
            <input
              type="number"
              name="age"
              value={this.props.age}
              onChange={this.props.handleChange}
            />
            <br></br>
          </label>
          <label>
            Email :<br></br>
            <input
              type="email"
              name="email"
              value={this.props.email}
              onChange={this.props.handleChange}
            />
            <br></br>
          </label>
          <label>
            Password :<br></br>
            <input
              type="password"
              name="password"
              value={this.props.password}
              onChange={this.props.handleChange}
            />
            <br></br>
          </label>
          <button onClick={this.props.handleClickNext}> next </button>
        </form>
      </div>
    );
  }
}

export default Forum1;
