import { Component } from "react";

export default class Sale extends Component {
  render() {
    return this.props.children ? (
      <div style={{ color: "red" }}>{this.props.children} %</div>
    ) : null;
  }
}
