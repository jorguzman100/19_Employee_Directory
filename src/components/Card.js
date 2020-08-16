import React from 'react';

const Card = (props) => {
    return (
        <div className="card mt-4">
            <div className="card-header py-1 px-3">
                {props.title}
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}

export default Card;