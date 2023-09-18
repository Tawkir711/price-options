import React from 'react';
import PriceOption from '../priceOption/PriceOption';

const PriceOptions = () => {
  
  const priceOptions = [
    {
      "id": 1,
      "name": "Basic Membership",
      "description": "Access to basic gym facilities",
      "price": 29.99,
      "features": [
        "Unlimited access to gym equipment",
        "Locker room access",
        "24/7 gym access",
        "Fitness assessment"
      ]
    },
    {
      "id": 2,
      "name": "Premium Membership",
      "description": "Access to premium gym facilities",
      "price": 49.99,
      "features": [
        "Unlimited access to gym equipment",
        "Locker room access",
        "24/7 gym access",
        "Fitness assessment",
        "Group fitness classes",
        "Personal trainer consultation"
      ]
    },
    {
      "id": 3,
      "name": "Family Membership",
      "description": "Access for the whole family",
      "price": 89.99,
      "features": [
        "Unlimited access to gym equipment",
        "Locker room access",
        "24/7 gym access",
        "Fitness assessment",
        "Group fitness classes",
        "Childcare services",
        "Discounts on additional family members"
      ]
    },
    {
      "id": 4,
      "name": "Student Membership",
      "description": "Discounted membership for students",
      "price": 19.99,
      "features": [
        "Unlimited access to gym equipment",
        "Locker room access",
        "24/7 gym access",
        "Fitness assessment",
        "Valid student ID required"
      ]
    },
    {
      "id": 5,
      "name": "Senior Membership",
      "description": "Discounted membership for seniors",
      "price": 24.99,
      "features": [
        "Unlimited access to gym equipment",
        "Locker room access",
        "24/7 gym access",
        "Fitness assessment",
        "Age 65 or older required"
      ]
    }
  ]


  return (
    <div className='m-8'>
      <h2 className="text-5xl font-semibold mb-4">Best Prices in the town</h2>
      <div className='grid md:grid-cols-3 gap-6'>
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;