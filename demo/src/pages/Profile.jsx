import React, { useState } from 'react';
import CheckboxButton from './CheckboxButton';
import RadioButton from './RadioButton';

export default function Profile() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [weightError, setWeightError] = useState('');
  const [heightError, setHeightError] = useState('');
  const [gender, setGender] = useState('');
  const [menopause, setMenopause] = useState('');
  
  const handleGenderChange = (event) => {
    const value = event.target.value;
    setGender(value);
    // Сбрасываем выбранное значение менопаузы при изменении пола
    setMenopause('');
  };

  const handleWeightChange = (event) => {
    const value = event.target.value;
    setWeight(value);

    if (value && parseInt(value) < 32) {
      setWeightError('Значение поля не может быть меньше 32кг');
    } else {
      setWeightError('');
    }
  };

  const handleHeightChange = (event) => {
    const value = event.target.value;
    setHeight(value);

    if (value && (parseInt(value) < 110 || parseInt(value) > 250)) {
      setHeightError('Значение поля должно быть от 110 до 250 см');
    } else {
      setHeightError('');
    }
  };

  const handleMenopauseChange = (event) => {
    setMenopause(event.target.value);
  };

  return (
    <div className="p-4 pt-[25px] h-screen flex flex-col pt-2 pb-[180px] overflow-y-auto text-gray-700">
      {/* Настройки профиля */}
      <div className="mb-8 max-w-2xl ml-12">
        <h2 className="text-2xl font-bold mb-4">Данные профиля</h2>
        <form>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Фотография профиля:</label>
            <input type="file" className="w-3/4 p-2 border border-gray-300 rounded" />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Дата рождения:</label>
            <input type="date" className="w-3/4 p-2 border border-gray-300 rounded" />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Пол:</label>
            <div className="w-3/4">
              <label className="inline-block mr-4">
                <input type="radio" name="gender" value="male" className="mr-2" onChange={handleGenderChange} /> Мужской
              </label>
              <label className="inline-block">
                <input type="radio" name="gender" value="female" className="mr-2" onChange={handleGenderChange} /> Женский
              </label>
            </div>
          </div>
          {gender === 'female' && (
            <div className="flex items-center mb-4 relative">
              <label className="w-1/4">Менопауза:</label>
              <select
                className="w-3/4 p-2 border border-gray-300 rounded"
                value={menopause}
                onChange={handleMenopauseChange}
              >
                <option value="">Выберите состояние</option>
                <option value="not-yet">Менопауза не наступила</option>
                <option value="before-40">Менопауза наступила до 40 лет</option>
                <option value="after-40">Менопауза наступила после 40 лет</option>
              </select>
            </div>
          )}
          <div className="flex items-center mb-4 relative">
            <label className="w-1/4">Ваш вес:</label>
            <input
              type="number"
              className="w-3/4 p-2 border border-gray-300 rounded"
              min="32"
              value={weight}
              onChange={handleWeightChange}
            />
            {weightError && (
              <div className={`ml-40 mt-20 absolute z-10 visible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm tooltip transition-opacity duration-300 ease-in-out ${weightError ? 'opacity-100' : 'opacity-0'}`}>
                {weightError}
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            )}
          </div>
          <div className="flex items-center mb-4 relative">
            <label className="w-1/4">Ваш рост:</label>
            <input
              type="number"
              className="w-3/4 p-2 border border-gray-300 rounded"
              min="110"
              max="250"
              value={height}
              onChange={handleHeightChange}
            />
            {heightError && (
              <div className={`ml-40 mt-20 absolute z-10 visible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm tooltip transition-opacity duration-300 ease-in-out ${heightError ? 'opacity-100' : 'opacity-0'}`}>
                {heightError}
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            )}
          </div>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Семейное положение:</label>
            <div className="w-3/4">
              <label className="inline-block mr-4">
                <input type="checkbox" name="m-status" className="mr-2" /> Есть постоянный партнёр
              </label>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Номер телефона:</label>
            <input type="tel" className="w-3/4 p-2 border border-gray-300 rounded" />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Ваш адрес:</label>
            <input type="adress" className="w-3/4 p-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" className="bg-amber-400 text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">
            Сохранить
          </button>
        </form>
      </div>

      {/* Контакты и безопасность */}
      <div className='max-w-2xl ml-12' >
        <h2 className="text-2xl font-bold mb-4">Контакты и безопасность</h2>
        <form>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Электронная почта:</label>
            <input type="email" className="w-3/4 p-2 border border-gray-300 rounded" />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Текущий пароль:</label>
            <input type="password" className="w-3/4 p-2 border border-gray-300 rounded" />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Новый пароль:</label>
            <input type="password" className="w-3/4 p-2 border border-gray-300 rounded" />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Повторите новый пароль:</label>
            <input type="password" className="w-3/4 p-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" className="bg-amber-400 text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">
            Сохранить
          </button>

        </form>
      </div>
    </div>
  );
}
