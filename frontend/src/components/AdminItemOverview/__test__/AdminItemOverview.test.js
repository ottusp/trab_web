import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import AdminItemOverview from '../index';

const products = [
    {
        id: 1,
        name: "Cookies - Loja X",
        description: "Dois cookies de gotas de chocolate, muito crocantes feitos em esetilo americano. Feito com farinha de trigo integral, sem glúten.",
        price: 7.50,
        inStock: 10,
    },
    {
        id: 2,
        name: "Sushi - Loja Y",
        description: "4 skin maki + 4 kani maki + 4 tortinha cheese + 4 shake garlic + 4 niguiri salmão + 4 niguiri kani + 6 hot filadélfia.",
        price: 15.90,
        inStock: 20,
    },
    {
        id: 3,
        name: "Caldo - Loja Z",
        description: "Deliciosa e saborosa sopa de abóbora , feita com abobora em creme batida linguiça calabresa defumada e carne de sol desfiada.",
        price: 9,
        inStock: 30,
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
        render(<AdminItemOverview />, container);
    });
});

it("Fills its fields with info passed", () => {
    act(() => {
        render(<AdminItemOverview info={products[0]} />, container);
    });

    expect(document.getElementById("admin-item-overview-name").innerHTML).toBe(products[0].name);
    expect(document.getElementById("admin-item-overview-price").innerHTML).toBe(`R$ ${parseFloat(products[0].price).toFixed(2)}`);
    expect(document.getElementById("admin-item-overview-in-stock").innerHTML).toBe(products[0].inStock.toString());
})

it("Deletes when button delete is clicked", () => {
    const handleDelete = jest.fn();
    window.alert = jest.fn();

    act(() => {
        render(<AdminItemOverview info={products[0]} handleDeleteMock={handleDelete} />, container);
    });

    const button = document.getElementById("admin-item-overview-delete-btn");

    expect(handleDelete).toHaveBeenCalledTimes(0);

    act(() => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(handleDelete).toHaveBeenCalledTimes(1);
});