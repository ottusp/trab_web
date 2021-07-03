import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

export default function CommentCard(props) {

    const comment = {
        userName: props.userName,
        rating: props.rating,
        content: props.content,
    }

    const ratingMax = "5.0"

    return (
        <div className="comment-card">
            <div className="card">
                <div className="card-body">

                    <div className="card-first-line d-flex justify-content-md-between">
                        <div className="card-username">
                            {comment.userName}
                        </div>

                        <div className="card-rating">
                            Avaliação: {comment.rating}/{ratingMax}
                        </div>
                    </div>

                    <p className="card-text">
                        {comment.content}
                    </p>
                </div>
            </div>
        </div>
    );
}