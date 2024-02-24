import React, { useState } from 'react';
import RadioButton from '../pages/RadioButton';
import CheckboxButton from '../pages/CheckboxButton';
import TextPlace from '../pages/TextPlace';

const DataPhysiology = () => {

  const [isChecked, setIsChecked] = useState(false);
  const [upperw2, setUpperw2] = useState('');
  const [lowerw2, setLowerw2] = useState('');
  const [upperw3, setUpperw3] = useState('');
  const [lowerw3, setLowerw3] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');


  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  

  return (
    <div className='p-4 pt-5 h-screen flex flex-col pt-2 pb-60 overflow-y-auto font-light'>

      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mt-5 mb-2">Пульс</h3>

      
      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mt-5 mb-2">Рабочее артериальное давление</h3>
      <div className='w-[540px]'>
      <p className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-1">
      Физиологические показатели человека, такие как пульс и артериальное давление индивидуальны и зависят от многих факторов. По умолчанию нормой для артериального давления считается среднепопуляционная величина в зависимости от возраста. Однако, на давление влияют анатомические особенности (рост, вес), физическая тренированность, уровень стресса, место проживания, сфера деятельности, заболевания и другие факторы, под влиянием которых индивидуальное нормальное давление может быть выше или ниже популяционного. Артериальное давление, измеренное в состоянии покоя, при котором человек чувствует себя хорошо, называется «нормальным». А если человек принимает препараты от давления (при наличии соответствующего диагноза), то «рабочим», «целевым» или «адаптированным».
      В зависимости от возраста нормальными считаются следующие показатели артериального давления:
        </p>
        <h3 className="font-sans text-sm antialiased font-semibold leading-normal text-gray-700">18-44 лет:
        <span class="font-sans text-sm antialiased font-normal leading-normal text-gray-700"> 120/80 мм рт. ст.</span></h3>
        <h3 className="font-sans text-sm antialiased font-semibold leading-normal text-gray-700">45-59 лет:
        <span class="font-sans text-sm antialiased font-normal leading-normal text-gray-700"> 130/85 мм рт. ст.</span></h3>
        <h3 className="font-sans text-sm antialiased font-semibold leading-normal text-gray-700">60 лет и старше:
        <span class="font-sans text-sm antialiased font-normal leading-normal text-gray-700"> 140/85 мм рт. ст.</span></h3>
      </div>

      <div className='w-[540px] mt-6'>
        <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">
        Если комфортное значение Вашего артериального давления, которое часто называют рабочим, отличается от данной величины (в большую или в меньшую сторону) более чем на 10 единиц, то поставьте галочку около слова «Отличается», а затем введите значение Вашего рабочего давления:
        </h3>
      </div>
      <div className='mb-[-20px]'><CheckboxButton id="cbpv" label="Отличается" name="cbpv_group" onChange={(e) => setIsChecked(e.target.checked)} /></div>
      {isChecked && (
      <div className='flex space-x-4 mb-2'>
        <div className='inline-block'>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2 w-[260px]">Верхнее рабочее давление
          <span className='font-sans italic text-sm antialiased font-normal leading-normal text-red-500'> (систолическое)</span>:</h3>
          <TextPlace
          id="upperw3"
          min="0"
          value={upperw3}
          onChange={(e) => handleChange(e, setUpperw3)}
          additionalText="[мм. рт. с.]"
          />
        </div>
        <div className='inline-block'>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2 w-[260px]">Нижнее рабочее давление 
          <span className='font-sans italic text-sm antialiased font-normal leading-normal text-blue-500'> (диастолическое)</span>:</h3>
          <TextPlace
          id="lowerw3"
          min="0"
          value={lowerw3}
          onChange={(e) => handleChange(e, setLowerw3)}
          additionalText="[мм. рт. с.]"
          />
        </div>
        <p className='font-sans italic text-sm antialiased font-normal leading-normal text-amber-500 w-[260px]'>Рабочее давление — давление, при котором вы чувствуете себя нормально.</p>
      </div>
      )}

      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mt-5 mb-10">Текущее артериальное давление</h3>
      <div className='flex space-x-4 mb-2'>
        <div className='inline-block'>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2 w-[260px]">Верхнее рабочее давление
          <span className='font-sans italic text-sm antialiased font-normal leading-normal text-red-500'> (систолическое)</span>:</h3>
          <TextPlace
          id="upperw2"
          min="0"
          value={upperw2}
          onChange={(e) => handleChange(e, setUpperw2)}
          additionalText="[мм. рт. с.]"
          />
        </div>

        <div className='inline-block'>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2 w-[260px]">Нижнее рабочее давление 
          <span className='font-sans italic text-sm antialiased font-normal leading-normal text-blue-500'> (диастолическое)</span>:</h3>
          <TextPlace
          id="lowerw2"
          min="0"
          value={lowerw2}
          onChange={(e) => handleChange(e, setLowerw2)}
          additionalText="[мм. рт. с.]"
          />
        </div>
        <p className='font-sans italic text-sm antialiased font-normal leading-normal text-amber-500 w-[260px]'>Измерение давления автоматическим измерителем (тонометром) нужно производить трижды и выводить среднее или использовать последнее значение.</p>
      </div>

      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mb-2">Антропометрические параметры тела</h3>
      <div className=''>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mt-2 mb-2 w-[260px]">Ваш рост:</h3>
          <TextPlace
          id="height"
          min="0"
          value={height}
          onChange={(e) => handleChange(e, setHeight)}
          additionalText="[см]"
          />
      </div>
      <div className=''>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mt-2 mb-2 w-[260px]">Текущая масса тела:</h3>
          <TextPlace
          id="weight"
          min="0"
          value={weight}
          onChange={(e) => handleChange(e, setWeight)}
          additionalText="[кг]"
          />
      </div>

      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mt-4 mb-32">Изменение отношения окружности талии к окружности бёдер:</h3>

      <div className='flex space-x-4 mt-[-20px] mb-12'>
        <div className='inline-block'>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2 w-[260px]">Текущая окружность талии:</h3>
          <TextPlace
          id="waist"
          min="0"
          value={waist}
          onChange={(e) => handleChange(e, setWaist)}
          additionalText="[см]"
          />
        </div>
        <p className='font-sans italic text-sm antialiased font-normal leading-normal text-amber-500 w-[540px]'>Измеряют обхват бедер с помощью сантиметровой ленты по самой выступающей точке ягодиц. Встаньте перед зеркалом в профиль, оберните ленту вокруг бедер, заметьте самую выступающую точку ягодиц, переместите ленту так, чтобы она пересекалась с этой точкой, произведите замер.</p>
      </div>

      <div className='flex space-x-4 mt-[-20px] mb-12'>
        <div className='inline-block'>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2 w-[260px]">Текущий обхват бедер:</h3>
          <TextPlace
          id="hip"
          min="0"
          value={hip}
          onChange={(e) => handleChange(e, setHip)}
          additionalText="[см]"
          />
        </div>
        <div className='font-sans italic text-sm antialiased font-normal leading-normal text-amber-500 w-[540px]'>
          <p className='mb-2'>Важно, чтобы лента была обернута плотно, без провисаний, но при этом не была внатяжку.</p>
          <p className=''>Для правильного замера обхвата бедер должны быть выполнены все вышеописанные условия.</p>
        </div>
      </div>

      <button type="submit" className="text-lg leading-relaxed font-normal bg-amber-400 mb-[-20px] text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">
        Сохранить
      </button>

    </div>
  );
};

export default DataPhysiology;
