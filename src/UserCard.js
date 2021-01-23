import React from 'react';

const UserCard=(props)=>(
    <div class="card text-center">
        <div class="card-header">
            Featured
        </div>
        <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.comment}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        {props.children}
    </div>
)

export default UserCard;