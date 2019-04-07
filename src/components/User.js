import React from 'react';

const user = (props) => (
    <div><strong>User: {props.number}</strong>
        <li><strong>Name and surname:</strong> {props.name}</li>
        <li> <strong>Email address:</strong> {props.email}</li>
        <li><strong>Address: street</strong> {props.street}, {props.city}</li>
        <br></br>
    </div>
)

export default user;