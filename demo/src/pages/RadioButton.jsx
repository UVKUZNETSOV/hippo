import React, { useState } from 'react';

const RadioButton = ({ id, label, paragraph, name, value, checked, onChange, disabled }) => {
  const placeholderText = '';
  const maxCharsBeforeWrap = 71; // Максимальное количество символов до переноса текста на новую строку

  return (
    <div className='mb-4'>
      <div className="inline-flex items-center">
        <label className="relative flex items-center p-3 -mt-5 rounded-full cursor-pointer" htmlFor={id}>
          <input
            type="radio"
            id={id}
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 text-amber-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-amber-500 checked:before:bg-amber-500 hover:before:opacity-10"
          />
          <span className="absolute transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-amber-500 peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
              <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
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
                {paragraph.length > maxCharsBeforeWrap ? (
                  <>
                    {paragraph.substring(0, maxCharsBeforeWrap)}
                    <br />
                    {paragraph.substring(maxCharsBeforeWrap)}
                  </>
                ) : (
                  paragraph
                )}
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

export default RadioButton;
