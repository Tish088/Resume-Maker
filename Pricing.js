import React from 'react';
import './Pricing.css';


const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: "$0",
      duration: "Free",
      features: [
        'Access to limited content',
        'Basic analytics',
        'Limited customization options',
      ],
      showButton: true, 
      buttonText: 'Get Started', 
    },
    {
      title: "Monthly",
      price: "$5",
      duration: "Per Month",
      features: [
        'Access to all content',
        'Priority support',
        'Monthly updates',
        
      ],
      showButton: true,
      buttonText: 'Choose Plan',
    },
    {
      title: "Annual",
      price: "$50",
      duration: "Per Year",
      features: [
        'Access to all content',
        'Priority support',
        'Full customization options',
      ],
      showButton: true,
      buttonText: 'Choose Plan',
    },
  ];

  return (
    <div className="pricing">
      {plans.map((plan, index) => (
        <div className="card" key={index}>
          <h2>{plan.title}</h2>
          <p className="price">{plan.price}</p>
          <p className="duration">{plan.duration}</p>
          <ul>
            {plan.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          {plan.showButton && <button>{plan.buttonText}</button>}
        </div>
        
      ))}
    
    </div>
    
  );
};

export default Pricing;
