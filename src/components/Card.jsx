import React from 'react';

const Card = ({ meal, onClick }) => {
  // Generate random rating between 3.5 and 4.9
  const randomRating = (Math.random() * (5 - 4) + 3.5).toFixed(1);
  // Generate random delivery time between 25 and 30 minutes
  const randomDeliveryTime = Math.floor(Math.random() * 6) + 25;  

  return (
      // Card container with a width of 273px and cursor-pointer for interactivity
      <div className='w-[273px] relative cursor-pointer' onClick={onClick}>
          {/* Image container with a height of 182px and rounded corners */}
          <div className='h-[182px] rounded-[15px]'>
              {/* Image of the meal */}
              <img
                  className='object-cover w-full h-full rounded-[15px]'
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
              />
          </div>
          {/* Title of the meal */}
          <div className='mt-2 px-3'>
              <p className='text-[17px] font-bold' style={{ color: 'rgba(2, 6, 12, 0.75)' }}>{meal.strMeal}</p>
          </div>
          {/* Container for star rating, random rating, and delivery time */}
          <div className='flex items-center ml-2 text-[15px]'>
              {/* Star icon */}
              <Star />
              {/* Randomly generated rating */}
              <span className='text-[15px] font-bold ml-1' style={{ color: 'rgba(2, 6, 12, 0.75)' }}>{randomRating} •</span>
              {/* Randomly generated delivery time */}
              <span className='text-[15px] font-bold ml-1' style={{ color: 'rgba(2, 6, 12, 0.75)' }}>{randomDeliveryTime}-{randomDeliveryTime + 5} mins</span>
          </div>
      </div>
  );
}

// Star icon component
const Star = () => {
    return (
      <div className='ml-1 '> 
        {/* SVG for the star icon */}
        <svg
          width={25}
          height={25}
          viewBox="0 0 20 20"
          fill="none"
          role="img"
          aria-hidden="true"
          strokeColor="rgba(2, 6, 12, 0.92)"
          fillColor="rgba(2, 6, 12, 0.92)"
        >
          {/* Circle background for the star */}
          <circle
            cx={10}
            cy={10}
            r={9}
            fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
          />
          {/* Path for the star shape */}
          <path
            d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
            fill="white"
          />
          {/* Linear gradient for the star color */}
          <defs>
            <linearGradient
              id="StoreRating20_svg__paint0_linear_32982_71567"
              x1={10}
              y1={1}
              x2={10}
              y2={19}
              gradientUnits="userSpaceOnUse"
            >
              {/* Gradient stops for the star color */}
              <stop stopColor="#21973B" />
              <stop offset={1} stopColor="#128540" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
}

export default Card;