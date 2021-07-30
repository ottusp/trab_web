import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import api from '../../services/api';

//modal that allows including a comment
export default function ModalComment (props) {
    const [content, setContent] = useState("");
    const [rating, setRating] = useState("");
    let history = useHistory();
    const userId = localStorage.getItem('userId');

    //update changes on server
     async function handleSubmit() {
        try {
            var response = await api.post("/comment/", {
                user: userId,
                product: props.product_id,
                rating: rating,
                content: content
            }, {
                withCredentials: true,
            });
        } catch (err) {
            alert('Erro ao criar comentário');
            console.log(err);
            return;
        }

        if (response.status != 200) {
            alert('Erro ao criar comentário');
            return;
        }

        alert('Comentário adicionado!');
        
        history.go(0);
    }

    return (

        <div className="container comment-item-modal-container">   
               <h1>Novo Comentário</h1>      
            <div className="cmt-modal-item-inputs">
                <div className="form-floating cmt-modal-item-form-input">
                    <input type="text" className="form-control" id="comment-item-modal-floating-content" placeholder="Comentario" value={content} onChange={e => setContent(e.target.value)} />
                    <label for="comment-item-modal-floating-content">Comentário</label>
                </div>
                <div className="form-floating cmt-modal-item-form-input">
                    <input type="text" className="form-control" id="comment-item-modal-floating-rating" placeholder="Nota" value={rating} onChange={e => setRating(e.target.value)} />
                    <label for="comment-item-modal-floating-rating">Nota (0-5)</label>
                </div>
            </div>
            <button className="btn comment-modal-btn" onClick={handleSubmit}>Enviar</button>
        </div>
    );
}