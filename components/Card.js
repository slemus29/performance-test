/* eslint-disable jsx-a11y/anchor-is-valid, react/prop-types */
import React from 'react';

const Card = ({
  title,
  image,
}) => (
  <div
    className="card"
    style={{
      margin: '1rem auto',
      width: '10rem',
    }}
  >
    <img className="card-img-top" src={image} alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
    </div>
  </div>
);

export default Card;
