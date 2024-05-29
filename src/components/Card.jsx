// src/components/Card.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ image, title, description, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-4 m-4 w-[300px] cursor-pointer"
      onClick={handleClick}
    >
      <img src={image} alt={title} className="rounded-t-lg w-full h-40 object-cover" />
      <h2 className="mt-2 text-xl font-semibold">{title}</h2>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
