import React from "react";

class Forum3 extends React.Component {
  constructor(props) {
    super(props);
    console.log("props forum 3------->", props);
  }
  render() {
    return (
      <form>
        <p>
          le nom est :{this.props.nom}
          <br></br> l'age est :{this.props.age} <br></br> email est :{" "}
          {this.props.email} <br></br> password est : {this.props.password}{" "}
          <br></br> hobbies est : {this.props.hobbies}
        </p>
        <button onClick={this.props.handleClickPrev}> prev </button>
      </form>
    );
  }
}

export default Forum3;
