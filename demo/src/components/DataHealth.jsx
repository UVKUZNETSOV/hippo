import React, { useState } from 'react';
import RadioButton from '../pages/RadioButton';
import CheckboxButton from '../pages/CheckboxButton';

const DataHealth = () => {
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


  return (
    <div className='p-4 pt-5 h-screen flex flex-col pt-2 pb-60 overflow-y-auto font-light'>
      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Ваша оценка качества сна:</h3>
      <div><CheckboxButton id="sleep1" label="Частые пробуждения" name="sleep_group" /></div>
      <div className='mt-[-20px]'><CheckboxButton id="sleep2" label="Долгое засыпание" name="sleep_group" /></div>

      {/* Курение */}
      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mb-2">Курение</h3>
      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">В настоящее время:</h3>
      <RadioButton id="smoking1" label="Никогда не курил" name="smoking_group" value="n" checked={smoking === 'n'} onChange={handleSmokingChange} />
      <div className='mt-[-20px]'><RadioButton id="smoking2" label="Продолжаю курить" name="smoking_group" value="continue" checked={smoking === 'continue'} onChange={handleSmokingChange} /></div>
      <div className='mt-[-20px]'><RadioButton id="smoking3" label="Бросил менее года назад" name="smoking_group" value="less_than_year" checked={smoking === 'less_than_year'} onChange={handleSmokingChange} /></div>
      <div className='mt-[-20px]'><RadioButton id="smoking4" label="Бросил более года назад" name="smoking_group" value="more_than_year" checked={smoking === 'more_than_year'} onChange={handleSmokingChange} /></div>
      <div className='mt-[-20px]'><RadioButton id="smoking5" label="Бросил 10 лет назад" name="smoking_group" value="ten_years_ago" checked={smoking === 'ten_years_ago'} onChange={handleSmokingChange} /></div>
      {/* Отображение доп вариантов курения */}
      {(smoking === 'continue' || smoking === 'less_than_year' || smoking === 'more_than_year') && (
        <div className='ml-32'>
          <div className="ml-40 mb-[-25px] mt-[-270px] z-[10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Продолжительность:</h3>
            <RadioButton id="smoking1_y" label="5 или менее лет" name="smoking_group_y" value="five" />
            <div className='mt-[-20px]'><RadioButton id="smoking2_y" label="от 6 до 10 лет" name="smoking_group_y" value="six" /></div>
            <div className='mt-[-20px] mb-[-20px]'><RadioButton id="smoking3_y" label="Более 10 лет" name="smoking_group_y" value="ten" /></div>
          </div>
          <div className="ml-96 mb-[-25px] mt-[-180px] z-[10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Количество сигарет в день:</h3>
            <RadioButton id="smoking1_с" label="Менее 5 штук" name="smoking_group_с" value="1" />
            <div className='mt-[-20px]'><RadioButton id="smoking2_с" label="от 5 до 10 штук" name="smoking_group_с" value="2" /></div>
            <div className='mt-[-20px]'><RadioButton id="smoking3_с" label="от 11 до 20 штук" name="smoking_group_с" value="3" /></div>
            <div className='mt-[-20px]'><RadioButton id="smoking4_с" label="Более 20 штук" name="smoking_group_с" value="4" /></div>
          </div>
        </div>
      )}

      {/* Алкоголь */}
      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mb-2">Злоупотребление алкоголем</h3>
      <p className="font-sans italic text-sm antialiased font-normal leading-normal text-amber-500 mt-1 mb-4">Чрезмерным употреблением спиртных напитков считается потребление в день более 45 мл. крепких 40° напитков <br />(водка, коньяк) или 150 мл. сухого (10°) вина или 500 мл. пива</p>
      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">В настоящее время:</h3>
      <RadioButton id="alc1" label="Никогда не злоупотреблял" name="alc_group" value="n" checked={alc === 'n'} onChange={handleAlcChange} />
      <div className='mt-[-20px]'><RadioButton id="alc2" label="Злоупотребляю в настоящее время" name="alc_group" value="continue" checked={alc === 'continue'} onChange={handleAlcChange} /></div>
      <div className='mt-[-20px]'><RadioButton id="alc3" label="Ранее злоупотреблял" name="alc_group" value="quit" checked={alc === 'quit'} onChange={handleAlcChange} /></div>
      {/* Отображение доп вариантов алкоголя */}
      {(alc === 'continue' || alc === 'quit') && (
        <div className='ml-32'>
          <div className="ml-64 mb-[-25px] mt-[-180px] z-[10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Продолжительность:</h3>
            <RadioButton id="alc1_y" label="5 или менее лет" name="alc_group_y" value="five" />
            <div className='mt-[-20px]'><RadioButton id="alc2_y" label="от 6 до 10 лет" name="alc_group_y" value="six" /></div>
            <div className='mt-[-20px] mb-[-20px]'><RadioButton id="alc3_y" label="Более 10 лет" name="alc_group_y" value="ten" /></div>
          </div>
        </div>
      )}

      {/* Активность */}
      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mb-2">Активность</h3>
      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Двигательная активность:</h3>
      <RadioButton id="act1" label="Очень высокая активность" paragraph="(Хожу пешком более 1.5 часа в день. Занимаюсь 5 и более раз в неделю   дополнительной физической активностью (любой)" name="act_group" value="n" checked={act === 'n'} onChange={handleActChange} />
      <div className='mt-[-10px]'><RadioButton id="act2" label="Высокая активность" paragraph="(Хожу пешком более 1 часа в день. Занимаюсь более 3-х раз в неделю     дополнительной физической активностью (любой)" name="act_group" value="high_activity" checked={act === 'high_activity'} onChange={handleActChange} /></div>
      <div className='mt-[-10px]'><RadioButton id="act3" label="Умеренная активность" paragraph="(Хожу пешком не менее 1 часа в день. Занимаюсь 2-3 раза в неделю       дополнительной физической активностью (любой)" name="act_group" value="moderate_activity" checked={act === 'moderate_activity'} onChange={handleActChange} /></div>
      <div className='mt-[-10px]'><RadioButton id="act4" label="Низкая активность" paragraph="(Хожу пешком менее 30 минут в день. Не имею другой физической нагрузки)" name="act_group" value="low_activity" checked={act === 'low_activity'} onChange={handleActChange} /></div>
      <div className='mt-[-10px]'><RadioButton id="act5" label="Очень низкая активность" paragraph="(Хожу пешком менее 15 минут в день. Не имею другой физической нагрузки)" name="act_group" value="very_low_activity" checked={act === 'very_low_activity'} onChange={handleActChange} /></div>

        <div className='ml-32'>
          <div className="ml-[480px] mb-[-25px] mt-[-372px] z-[10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Ограничение возможности<br /> передвижения, в том числе из-за<br /> травм, инвалидности и других<br /> заболеваний:</h3>
            <RadioButton id="act1_y" label="Да" name="act_group_y" value="yes" />
            <div className='mt-[-20px] mb-[-20px]'><RadioButton id="act2_y" label="Нет" name="act_group_y" value="no" /></div>
          </div>
        </div>

        <div className='mt-4'>
          <div className="">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Как давно у Вас сохраняется такой уровень двигательной активности?</h3>
            <RadioButton id="act1_z" label="Менее 5 лет" name="act_group_z" value="less_than" />
            <div className='mt-[-20px] mb-[-20px]'><RadioButton id="act2_z" label="Последние 5 лет" name="act_group_z" value="last" /></div>
          </div>
        </div>

        <div className='mt-4'>
          <div className="">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Выберите максимальный уровень активности, при выполнении которой у Вас не возникает неприятных ощущений,<br /> одышки, болей за грудиной или головокружения:</h3>
            <RadioButton id="act1_v" label="Обслуживать себя, есть, одеваться, выполнять гигиенические процедуры" name="act_group_v" value="less_than" />
            <div className='mt-[-20px]'><RadioButton id="act2_v" label="Перемещаться по квартире" name="act_group_v" value="1" /></div>
            <div className='mt-[-20px]'><RadioButton id="act3_v" label="Пройти расстояние 100 м. по ровной местности со скоростью 3-5 км/ч" name="act_group_v" value="2" /></div>
            <div className='mt-[-20px]'><RadioButton id="act4_v" label="Выполнять легкую работу по дому, например, вытирать пыль, мыть посуду" name="act_group_v" value="3" /></div>
            <div className='mt-[-20px]'><RadioButton id="act5_v" label="Подниматься на 1-2 лестничных пролета или идти в гору" name="act_group_v" value="4" /></div>
            <div className='mt-[-20px]'><RadioButton id="act6_v" label="Пробежать короткую дистанцию" name="act_group_v" value="5" /></div>
            <div className='mt-[-20px]'><RadioButton id="act7_v" label="Выполнять тяжелую работу по дому, такую как мыть полы, поднимать или передвигать мебель" name="act_group_v" value="last" /></div>
            <div className='mt-[-20px]'><RadioButton id="act8_v" label="Заниматься спортом с умеренными энергозатратами, например, играть в боулинг" name="act_group_v" value="last" /></div>
            <div className='mt-[-20px]'><RadioButton id="act9_v" label="Заниматься спортом с высокими энергозатратами, таким как плавание, теннис, футбол, баскетбол, лыжи" name="act_group_v" value="last" /></div>
          </div>
        </div>

        {/* Влияние профессиональной вредности */}
        <h3 className="text-xl leading-relaxed font-bold text-gray-700 mb-2">Влияние профессиональной вредности</h3>
        <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Работа в ночное время, суточная работа:</h3>
        <RadioButton id="nwork1" label="Нет" name="nwork_group" value="n" checked={nwork === 'n'} onChange={handleNworkChange} />
        <div className='mt-[-20px]'><RadioButton id="nwork2" label="Переодически" name="nwork_group" value="sometimes" checked={nwork === 'sometimes'} onChange={handleNworkChange} /></div>
        <div className='mt-[-20px]'><RadioButton id="nwork3" label="Постоянно" name="nwork_group" value="ever" checked={nwork === 'ever'} onChange={handleNworkChange} /></div>

        <div className=''>
          <div className="">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Шум, постоянное напряжение зрения, внимания:</h3>
            <RadioButton id="noize1_z" label="Нет" name="noize_group_z" value="1" />
            <div className='mt-[-20px]'><RadioButton id="noize2_z" label="Периодически" name="noize_group_z" value="2" /></div>
            <div className='mt-[-20px] mb-[-20px]'><RadioButton id="noize3_z" label="Постоянно" name="noize_group_z" value="3" /></div>
          </div>
        </div>

        <div className='mt-4'>
          <div className="">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Рабочие условия:</h3>
            <RadioButton id="hwork1" label="Нормальная рабочая неделя" paragraph="(40 рабочих часов в неделю)" name="hwork_group" value="1"/>
            <div className='mt-[-10px]'><RadioButton id="hwork2" label="Ненормированный рабочий день" paragraph="(от 48 до 54 рабочих часов в неделю)" name="hwork_group" value="2" /></div>
            <div className='mt-[-10px] mb-8'><RadioButton id="hwork3" label="Высокая рабочая нагрузка" paragraph="(от 55 и более рабочих часов в неделю)" name="hwork_group" value="3" /></div>
          </div>
        </div>

        <h3 className="text-xl leading-relaxed font-bold text-gray-700 mb-2">Прочее</h3>
        <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Интенсивность использования социальных сетей и мессенджеров:</h3>
        <RadioButton id="intensity1" label="Низкая" paragraph="(Захожу реже 1-2 раз в день не больше, чем на 2 часа суммарно)" name="intensity_group" value="1" />
        <div className='mt-[-10px]'><RadioButton id="intensity2" label="Средняя" paragraph="(Провожу от 2 до 4-ех часов в течение дня)" name="intensity_group" value="2"  /></div>
        <div className='mt-[-10px]'><RadioButton id="intensity3" label="Высокая" paragraph="(Провожу 5 часов в течение дня)" name="intensity_group" value="3" /></div>
        <div className='mt-[-10px]'><RadioButton id="intensity4" label="Не использую" name="intensity_group" value="4" /></div>

        <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-4">Освещение:</h3>
        <CheckboxButton id="light1" label="Пребывание при дневном свете меньше 3 часов в сутки" name="light_group" value="1" />
        <div className='mt-[-20px]'><CheckboxButton id="light2" label="Искусственное освещение ночью" name="light_group" value="2"  /></div>

        <button type="submit" className="text-lg leading-relaxed font-normal bg-amber-400 text-white mb-[-20px] py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">
            Сохранить
        </button>

    </div>
  );
};

export default DataHealth;
