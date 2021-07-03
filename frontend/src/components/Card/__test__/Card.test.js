import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Card from '../index';

const products = [
    {
        id: 1,
        title: "Cookies - Loja X",
        description: "Dois cookies de gotas de chocolate, muito crocantes feitos em esetilo americano. Feito com farinha de trigo integral, sem glúten.",
        price: 7.50,
        inStock: 10,
    }
]

let container = null;

let mount = function () {
    container = document.createElement("div");
    document.body.appendChild(container);
} 

let unmount = function () {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
}

//TESTS

beforeEach(() => {
    mount();
});

afterEach(() => {
    unmount();
});

it("Renders without crashing", () => {
    act(() => {
        render(<Router><Card /></Router>, container);
    });
});

it("Should fill info according to props", () => {
    act(() => {
        render(<Router><Card title={products[0].title} description={products[0].description} price={products[0].price} /></Router>, container);
    });

    let title = document.getElementsByClassName("card-title")[0];
    let description = document.getElementsByClassName("card-text")[0];
    let price = document.getElementsByClassName("card-price")[0];

    expect(title.innerHTML).toBe(products[0].title);
    expect(description.innerHTML).toBe(products[0].description);
    expect(price.innerHTML).toBe(`R$ ${products[0].price}`);
});

it("Should add to card when button is clicked", () => {
    let addItemMock = jest.fn();
    
    act(() => {
        render(<Router><Card addItemTest={addItemMock} /></Router>, container);
    });

    const button = document.getElementsByClassName("btn")[0];

    expect(addItemMock).toHaveBeenCalledTimes(0);

    act(() => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(addItemMock).toHaveBeenCalledTimes(1);
});