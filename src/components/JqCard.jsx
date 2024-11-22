// components/JqCard.jsx
import React from'react';

const JqCard = ({ item, onDelete }) => {
  return (
    <div className="jq-card w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.string1}</h5>
        <p className="text-l font-bold">{item.string2}</p>
        <ul>
          <li>Max H: {item.maxH}, Min H: {item.minH}</li>
          <li>Max W: {item.maxW}, Min W: {item.minW}</li>
          <li>X: {item.x}, Y: {item.y}, W: {item.w}, H: {item.h}</li>
          <li>Confidence: {item.confidence}</li>
        </ul>
        <button
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JqCard;