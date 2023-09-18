import React from 'react';
import Feature from '../feature/Feature';

const PriceOption = ({ option }) => {
  const { name, price, description, features } = option;
  return (
    <div className="bg-blue-500 rounded-md p-4 text-white flex flex-col">
      <h2 className="text-center">
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-2xl font-normal">/mon</span>
      </h2>
      <h4 className="text-3xl font-semibold text-center my-3">{name}</h4>
      <div className='pl-6 flex-grow'>
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className='mt-8  bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900'>Buy Now</button>
    </div>
  );
};

export default PriceOption;