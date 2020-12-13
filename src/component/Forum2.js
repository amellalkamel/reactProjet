import React from "react";

class Forum2 extends React.Component {
  constructor(props) {
    console.log("props de forum2", props);
    super(props);
  }

  render() {
    return (
      <form>
        <label>
          {" "}
          Hobbies <br></br>
        </label>
        <select
          name="hobbies"
          value={this.props.hobbies}
          onChange={this.props.handleChange}
        >
          <option value="sport">Sport</option>
          <option value="domino">Domino </option>
          <option value="jeuxechec">Jeux d'echec</option>
          <option value="lecture">Lecture</option>
        </select>
        <br></br>
        <button onClick={this.props.handleClickPrev}> prev </button>
        <button onClick={this.props.handleClickNext}> next </button>
      </form>
    );
  }
}

export default Forum2;
