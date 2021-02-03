import "./App.css";
import { Component } from "react";
import ProductList from "./Components/ProductList";

export default class App extends Component {
  state = {
    productList: [
      {
        name: "Doce de abóbora",
        price: 0.5,
        discountPercentage: null,
      },
      {
        name: "Salgadinho",
        price: 2.5,
        discountPercentage: 10,
      },
      {
        name: "Refrigerante",
        price: 8.5,
        discountPercentage: 5,
      },
      {
        name: "Maçã",
        price: 0.7,
        discountPercentage: null,
      },
      {
        name: "Feijão",
        price: 2.7,
        discountPercentage: 15,
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.productList.map((produto, index) => (
          <ProductList item={produto} key={index}></ProductList>
        ))}
      </div>
    );
  }
}
