import React, { useState } from 'react';
import RadioButton from '../pages/RadioButton';
import CheckboxButton from '../pages/CheckboxButton';

const DataNutrition = () => {
  const [showCharacteristics, setShowCharacteristics] = useState(false);
  const [smoking, setSmoking] = useState('never');
  const [alc, setAlc] = useState('never');
  const [act, setAct] = useState('never');
  const [nwork, setNwork] = useState('never');
  

  const handleSmokingChange = (event) => {
    setSmoking(event.target.value); 
  };
  const handleAlcChange = (event) => {
    setAlc(event.target.value); 
  };
  const handleActChange = (event) => {
    setAct(event.target.value);
  };
  const handleNworkChange = (event) => {
    setNwork(event.target.value);
  };

  const toggleCharacteristics = () => {
    setShowCharacteristics(!showCharacteristics);
  };

  return (
    <div className='p-4 pt-5 h-screen flex flex-col pt-2 pb-60 overflow-y-auto font-light'>

      {/* Среднее потребление овощей и фруктов в день */}
      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mt-5 mb-2">Среднее потребление овощей и фруктов в день</h3>
      <p className="font-sans italic text-sm antialiased font-normal leading-normal text-amber-500 mt-1 mb-4">(всех, кроме консервированных)</p>
      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Фрукты:</h3>
      <RadioButton id="fruit1" label="Менее 200 грамм" name="fruit_group" value="1"/>
      <div className='mt-[-20px]'><RadioButton id="fruit2" label="Более 200 грамм" name="fruit_group" value="2" /></div>
      
      <div className='ml-32'>
          <div className="ml-[150px] mb-[-25px] mt-[-136px] z-[10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Овощи:</h3>
            <RadioButton id="vegetable_y" label="Менее 200 грамм" name="vegetable_group_y" value="1" />
            <div className='mt-[-20px] mb-[-20px]'><RadioButton id="vegetable2_y" label="Более 200 грамм" name="vegetable_group_y" value="2" /></div>
          </div>
        </div>

      {/* Отображение Оцените Ваше питание */}
      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Оцените Ваше питание:</h3>
      <RadioButton id="prefer1" label="Придерживаюсь сбалансированного питания" name="prefer_group" value="1"/>
      <div className='mt-[-20px]'><RadioButton id="prefer2" label="Предпочитаю жирную пищу" name="prefer_group" value="2" /></div>
      <div className='mt-[-20px]'><RadioButton id="prefer3" label="Предпочитаю высокоуглеводную пищу" name="prefer_group" value="3" /></div>

      {/* Как регулярно Вы принимаете пищу */}
      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Как регулярно Вы принимаете пищу?</h3>
      <RadioButton id="regular1" label="1-2 раза в день" name="regular_group" value="1"/>
      <div className='mt-[-20px]'><RadioButton id="regular2" label="3 раза в день и чаще" name="regular_group" value="2" /></div>

      {/* Как много соли Вы потребляете в день? */}
      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Как много соли Вы потребляете в день?</h3>
      <RadioButton id="salt1" label="Менее 5 грамм" name="salt_group" value="1"/>
      <div className='mt-[-20px]'><RadioButton id="salt2" label="5 грамм и более" name="salt_group" value="2" /></div>

      <div className=''>
      <p className="font-sans italic text-sm antialiased font-normal leading-normal text-amber-500 mt-1 mb-4 ">Более подробные данные о характере потребляемой пищи вы<br /> можете внести, ответив на дополнительные вопросы</p>
      </div>
      <div className='mt-2 mb-10'>
      <button onClick={toggleCharacteristics} className="bg-amber-400 text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">
        Дополнительные вопросы
      </button>
      </div>



      {showCharacteristics && (
        <>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-4">Выберите утверждения, которые характеризуют принимаемую Вами пищу:</h3>
          <CheckboxButton id="characteristic1" label="Пища с низким содержанием (или отсутствием) витамина D" name="characteristic_group" value="1" />
          <div className='mt-[-20px]'><CheckboxButton id="characteristic2" label="Пища с низким содержанием (или отсутствием) витамина B6" name="characteristic_group" value="2"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="characteristic3" label="Пища с низким содержанием (или отсутствием) витамина B12" name="characteristic_group" value="3"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="characteristic4" label="Пища с низким содержанием (или отсутствием) фолиевой кислоты" name="characteristic_group" value="4"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="characteristic5" label="Пища с низким содержанием (или отсутствием) селена" name="characteristic_group" value="5"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="characteristic6" label="Пища с низким содержанием (или отсутствием) железа" name="characteristic_group" value="6"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="characteristic7" label="Пища с низким содержанием (или отсутствием) кальция" name="characteristic_group" value="7"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="characteristic8" label="Пища с низким содержанием (или отсутствием) магния" name="characteristic_group" value="8"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="characteristic9" label="Пища с низким содержанием (или отсутствием) цинка" name="characteristic_group" value="9"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="characteristic10" label="Пища с низким содержанием (или отсутствием) триптофана" name="characteristic_group" value="10"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="characteristic11" label="Пища с низким содержанием (или отсутствием) сложных углеводов" name="characteristic_group" value="11"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="characteristic12" label="Пища с высоким содержанием (избытком) простых углеводов" name="characteristic_group" value="12"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="characteristic13" label="Пища с высоким содержанием (избытком) жирных кислот Омега-6" name="characteristic_group" value="13"  /></div>
        </>
      )}

      <button type="submit" className="text-lg leading-relaxed font-normal bg-amber-400 mb-[-20px] text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">
        Сохранить
      </button>

    </div>
  );
};

export default DataNutrition;
