import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import CommentCard from '../CommentCard'

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

beforeEach(mount);

afterEach(unmount);

it('renders without crashing', () => {
    act(() => {
        render(<CommentCard />, container);
    });
});

it('renders userName', () => {
    const userName = "Otto Fernandes"
    act(() => {
        render(<CommentCard 
            userName={userName}
        />, container);
    });
    let userNameDiv = document.getElementsByClassName("card-username")[0];

    expect(userNameDiv.innerHTML).toBe(userName);
});

it('renders rating', () => {
    const rating = "3.5";
    const maxRating = "5.0";

    act(() => {
        render(<CommentCard
            rating={rating}
        />, container);
    });
    let userNameDiv = document.getElementsByClassName("card-rating")[0];

    expect(userNameDiv.innerHTML).toBe(`Avaliação: ${rating}/${maxRating}`);
});

it('renders text', () => {
    const content = "Hoje eh um belo dia para fazer testes usando jest!";

    act(() => {
        render(<CommentCard
            content={content}
        />, container);
    });
    let userNameDiv = document.getElementsByClassName("card-text")[0];

    expect(userNameDiv.innerHTML).toBe(content);
});