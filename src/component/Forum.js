import React from "react";
import Forum1 from "./Forum1";
import Forum2 from "./Forum2";
import Forum3 from "./Forum3";

class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      age: 0,
      email: "",
      password: "",
      hobbies: "sport",
      step: 1,
    };
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleClickNext = () => {
    this.setState({
      step: this.state.step + 1,
    });
  };
  handleClickPrev = () => {
    this.setState({
      step: this.state.step - 1,
    });
  };
  render() {
    console.log("step", this.state.step);
    if (this.state.step === 1) {
      return (
        <Forum1
          {...this.state}
          handleChange={this.handleChange}
          handleClickNext={this.handleClickNext}
        />
      );
    } else if (this.state.step === 2) {
      return (
        <Forum2
          {...this.state}
          handleChange={this.handleChange}
          handleClickNext={this.handleClickNext}
          handleClickPrev={this.handleClickPrev}
        />
      );
    } else {
      return <Forum3 {...this.state} handleClickPrev={this.handleClickPrev} />;
    }
  }
}

export default Forum;
