import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

export default function CommentCard() {

    let userName = "Lucas Romero";
    let commentContent = "Eu amo esse sushi, acho ele muito tope. Uma vez, eu pedi ele 10 vezes na minha casa no mesmo mês, e não me arrependo. Nota 10!";
    let rating = "0.3";
    const ratingMax = "5.0"

    return (
        <div className="comment-card">
            <div className="card">
                <div className="card-body">

                    <div className="card-first-line d-flex justify-content-md-between">
                        <div className="card-username">
                            {userName}
                        </div>

                        <div className="card-rating">
                            Avalidação: {rating}/{ratingMax}
                        </div>
                    </div>

                    <p className="card-text">
                        {commentContent}
                    </p>
                </div>
            </div>
        </div>
    );
}