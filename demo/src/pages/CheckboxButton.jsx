import React, { useState } from 'react';

const CheckboxButton = ({ id, label, paragraph, name, onChange, checked }) => {
  const placeholderText = ''; 
  const [isChecked, setIsChecked] = useState(false); // Добавлено состояние для отслеживания выбранного состояния чекбокса

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked); // Обновление состояния чекбокса
    onChange(event); // Передача события изменения внешнему обработчику
  };  

  return (
    <div className='mb-4'>
      <div className="inline-flex items-center">
        <label className="relative flex items-center p-3 -mt-5 rounded-full cursor-pointer" htmlFor={id}>
          <input
            type="checkbox"
            id={id}
            name={name}
            checked={isChecked}
            onChange={handleCheckboxChange} // Добавлено для обработки изменений
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 text-amber-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-amber-500 checked:bg-amber-500 checked:before:bg-amber-500 hover:before:opacity-10"
          />
          <span className={`absolute text-white transition-opacity ${isChecked ? 'opacity-100' : 'opacity-0'} pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
          </span>
        </label>
        <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor={id}>
          <div>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {label}
            </p>
            {paragraph ? (
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-amber-500 italic">
                {paragraph}
              </p>
            ) : (
              <div style={{ height: '21px' }}>{placeholderText}</div>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default CheckboxButton;
