import React from 'react'
import RadioButton from '../pages/RadioButton';
import CheckboxButton from '../pages/CheckboxButton';

const DataLifeEvent = () => {
    return (
        <div className='p-4 pt-5 h-screen flex flex-col pt-2 pb-60 overflow-y-auto font-light'>
            
        <h3 class="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">
            Со мною недавно <span class="italic text-sm antialiased font-normal leading-normal text-amber-500">(в течение последнего года)</span> произошло следующее:
        </h3>
        <div><CheckboxButton id="loss1" label="Потеря близкого человека" name="loss_group" /></div>

        <h3 class="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Отметьте события, которые случились с вами в детском возрасте и оказывают<br /> сильное влияние на вашу сегодняшнюю жизнь:</h3>
        <div><CheckboxButton id="ev1" label="Физическое насилие в детском возрасте" name="ev_group" /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ev2" label="Эмоциональное насилие в детском возрасте" name="ev_group" /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ev3" label="Сексуальное насилие в детском возрасте" name="ev_group" /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ev4" label="Другое травматическое событие" name="ev_group" /></div>

        <h3 class="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Отметьте события, которые случились с вами в детском возрасте и оказывают<br /> сильное влияние на вашу сегодняшнюю жизнь:</h3>
        <div><CheckboxButton id="happened1" label="Потеря близкого человека/животного" name="happened_group" /></div>
        <div className='mt-[-20px]'><CheckboxButton id="happened2" label="Расставание с близким человеком" name="happened_group" /></div>
        <div className='mt-[-20px]'><CheckboxButton id="happened3" label="Пережитая катастрофа или ситуация угрозы для жизни" name="happened_group" /></div>
        <div className='mt-[-20px]'><CheckboxButton id="happened4" label="Физическое насилие" name="happened_group" /></div>
        <div className='mt-[-20px]'><CheckboxButton id="happened5" label="Эмоциальное насилие" name="happened_group" /></div>
        <div className='mt-[-20px] mb-[10px]'><CheckboxButton id="happened6" label="Сексуальное насилие" name="happened_group" /></div>
    
          <button type="submit" className="text-lg leading-relaxed font-normal bg-amber-400 mb-[-20px] text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">
            Сохранить
          </button>
    
        </div>
      );
    };

export default DataLifeEvent