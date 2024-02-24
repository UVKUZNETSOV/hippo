import React, { useState } from 'react';

const TextPlace = ({ id, label, placeholder, min, additionalText }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="mb-4">    
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <div className="relative w-[250px]">
        <input
          id={id}
          type="number"
          min={min}
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          className="appearance-none rounded-t-lg border-b-2 border-amber-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {additionalText && (
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center font-sans italic text-sm antialiased font-normal leading-normal text-amber-500">
            {additionalText}
          </span>
        )}
      </div>
    </div>
  );
};

export default TextPlace;
