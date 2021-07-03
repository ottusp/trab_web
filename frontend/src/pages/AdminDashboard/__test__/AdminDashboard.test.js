import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from 'react-router-dom';

import AdminDashboard from '../index';

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
        render(<Router><AdminDashboard /></Router>, container);
    });
});

it ("Renders 3 mocked items", () => {
    act(() => {
        render(<Router><AdminDashboard /></Router>, container);
    });

    let overviewItems = document.getElementsByClassName("overview-item");
    expect(overviewItems.length).toBe(3);
});

it("Should work when Add Product button is clicked", () => {
    let handleAddProductButton = jest.fn();
    act(() => {
        render(<Router><AdminDashboard addProductMock={handleAddProductButton}/></Router>, container);
    });

    const button = document.getElementsByClassName("admin-page-new-product-btn")[0];

    expect(handleAddProductButton).toHaveBeenCalledTimes(0);

    act(() => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(handleAddProductButton).toHaveBeenCalledTimes(1);
});

it("Should render modals successfully", () => {
    act(() => {
        render(<Router><AdminDashboard /></Router>, container);
    });

    const modals = document.getElementsByClassName("modal");
    
    expect(modals.length).toBe(4); //4 modals. 1 modal pra adicionar produto e 3 modais de edicao pros 3 produtos mockados
});