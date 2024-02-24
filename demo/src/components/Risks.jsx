import React, { useState } from 'react';
import DataHealth from './DataHealth';
import DataNutrition from './DataNutrition';
import DataPhysiology from './DataPhysiology';
import DataSocialEnv from './DataSocialEnv';
import DataLifeEvent from './DataLifeEvent';

export default function Sidetest() {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    { label: 'Образ жизни' },
    { label: 'Питание' },
    { label: 'Физиология' },
    { label: 'Среда и социальный статус' },
    { label: 'События жизни' },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-col mt-4">
      <div className="flex">
        {tabsData.map((tab, index) => (
          <BoxWrapper
            key={index}
            isActive={index === activeTab}
            onClick={() => handleTabClick(index)}
          >
            <div className="">
              <span className={`text-base font-light ${index === activeTab ? 'text-black' : 'text-gray-500'}`}>
                {tab.label}
              </span>
            </div>
          </BoxWrapper>
        ))}
      </div>

      {activeTab === 0 && <DataHealth />}
      {activeTab === 1 && <DataNutrition />}
      {activeTab === 2 && <DataPhysiology />}
      {activeTab === 3 && <DataSocialEnv />}
      {activeTab === 4 && <DataLifeEvent />}
    </div>
  );
}

function BoxWrapper({ children, onClick, isActive }) {
  const baseClasses = 'p-2 pl-4 pr-4 flex-2 border-b-2 border-gray-300 flex items-center cursor-pointer';
  const activeClasses = 'bg-white text-gray-700 border-b-2 border-amber-300 rounded-t-lg';

  return (
    <div
      className={`${baseClasses} ${isActive ? activeClasses : ''}`}
      onClick={onClick}
      role="button"
    >
      {children}
    </div>
  );
}
