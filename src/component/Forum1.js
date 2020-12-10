import React from "react";

class Forum1 extends React.Component {
  constructor(props) {
    super(props);
    console.log("propppppps in forum1", props);
  }

  render() {
    const {
      nom,
      age,
      email,
      password,
      handleChange,
      handleClickNext,
    } = this.props;
    return (
      <div>
        <form>
          <label>
            {" "}
            Form1 <br></br>
          </label>

          <label>
            Nom :<br></br>
            <input type="text" name="nom" value={nom} onChange={handleChange} />
            <br></br>
          </label>
          <label>
            Age :<br></br>
            <input
              type="number"
              name="age"
              value={age}
              onChange={handleChange}
            />
            <br></br>
          </label>
          <label>
            Email :<br></br>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <br></br>
          </label>
          <label>
            Password :<br></br>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <br></br>
          </label>
          <button onClick={handleClickNext}> next </button>
        </form>
      </div>
    );
  }
}

export default Forum1;
