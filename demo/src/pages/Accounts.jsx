import React from 'react';

export default function Accounts() {
  return (
    <div className="mt-1 w-[640px]">
      <div className=" p-5">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 mb-2">Учетная запись VK</h2>
          <p className="text-gray-700 mb-2">
            Подключив вашу учетную запись VK вы позволите системе собирать данные связанные с Вашим социальным окружением, Ваш психологичесий портрет и прочие данные.
          </p>
          <p className="text-gray-700 mb-2">
            Нажмите кнопку «Подключить» ниже, чтобы подключить Вашу учетную запись.
          </p>
          <button className="bg-amber-400 text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">Подключить</button>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-700 mb-2">Учетная запись GoogleFit</h2>
          <p className="text-gray-700 mb-2">
            Подключив Вашу учетную запись GoogleFit вы позволите системе автоматически собирать данные о вашей активности и состоянии здоровья с различных источников, таких как: телефоны, сенсоры, умные часы, фитнес-браслеты, умные весы и прочие гаджеты.
          </p>
          <button className="bg-amber-400 text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">Подключить</button>
        </div>
      </div>
    </div>
  );
}
