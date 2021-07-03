import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

import Product from '../index';
import CartModal from '../../../components/CartModal/CartModal';


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

it('renders without crashing', () => {
    act(() => {
        render(
            <Router>
                <Product></Product>
            </Router>
            , container
        );
    });
});