import React, { Component } from "react";
import TechItem from "../TechItem/";

import "./style.css";

class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.js", "Javascript", "PHP"]
  };

  handlleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ techs: [...this.state.techs, this.state.newTech] });
    this.setState({ newTech: "" });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{this.state.newTech}</h2>
        <ul className="tech-list">
          {this.state.techs.map((tech, i) => (
            <TechItem
              key={i}
              item={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          className="text-add-tech"
          type="text"
          onChange={this.handlleInputChange}
          value={this.state.newTech}
        />
        <input className="button-add-tech" type="submit" value="Add Tech" />
      </form>
    );
  }
}

export default TechList;
