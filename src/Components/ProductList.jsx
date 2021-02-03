import { Component } from "react";
import Sale from "./Sale.jsx";

export default class ProductList extends Component {
  render() {
    console.log(this.props.item);
    const { name, price, discountPercentage } = this.props.item;
    return (
      <>
        <h3>{name}</h3>
        <b>{price}</b>
        <Sale>{discountPercentage}</Sale>
      </>
    );
  }
}
