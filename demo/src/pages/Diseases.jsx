import React, { useState } from 'react';
import RadioButton from './RadioButton';
import CheckboxButton from './CheckboxButton';
import TextPlace from './TextPlace';

const Diseases = () => {
  const [diabetes, setDiabetes] = useState('never');
  const [headache, setHeadache] = useState('never');
  const [other, setOther] = useState('never');
  const [otherz, setOtherz] = useState('never');
  const [hypertensiond, setHypertensiond] = useState('never');
  const [hypotension, setHypotension] = useState('never');
  const [weakness, setWeakness] = useState('never');
  const [fatigue, setFatigue] = useState('never');
  const [neoplasms, setNeoplasms] = useState('never');
  const [thyroid, setThyroid] = useState('never');
  const [lemia, setLemia] = useState('never');
  const [angina, setAngina] = useState('never');
  const [upperw, setUpperw] = useState('');
  const [lowerw, setLowerw] = useState('');


  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleAnginaChange = (event) => {
    setAngina(event.target.value); 
  };

  const handleLemiaChange = (event) => {
    setLemia(event.target.value); 
  };

  const handleHypotensionChange = (event) => {
    setHypotension(event.target.value); 
  };
  const handleHypertensiondChange = (event) => {
    setHypertensiond(event.target.value); 
  };
  const handleDiabetesChange = (event) => {
    setDiabetes(event.target.value); 
  };
  const handleHeadacheChange = (event) => {
    setHeadache(event.target.value); 
  };
  const handleOtherChange = (event) => {
    setOther(event.target.value); 
  };
  const handleOtherzChange = (event) => {
    setOtherz(event.target.value); 
  };
  const handleWeaknessChange = (event) => {
    setWeakness(event.target.value); 
  };
  const handleFatigueChange = (event) => {
    setFatigue(event.target.value); 
  };
  const handleNeoplasmsChange = (event) => {
    setNeoplasms(event.target.value); 
  };
  const handleThyroidChange = (event) => {
    setThyroid(event.target.value); 
  };

  return (

      <div className='p-4 pt-[1px] h-screen flex flex-col pt-2 pb-[180px] overflow-y-auto font-light'>

    {/* Среднее потребление овощей и фруктов в день */}
    <h3 className="text-xl leading-relaxed font-bold text-gray-700 mt-5 mb-2">Мои заболевания</h3>
    <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Гипертоническая болезнь:</h3>
    <RadioButton id="hypertensiond1" label="Нет" name="hypertensiond_group" value="1" checked={hypertensiond === '1'} onChange={handleHypertensiondChange}/>
    <div className='mt-[-20px]'><RadioButton id="hypertensiond2" label="Гипертония 1 стадии латентная" name="hypertensiond_group" value="2" checked={hypertensiond === '2'} onChange={handleHypertensiondChange}/></div>
    <div className='mt-[-20px]'><RadioButton id="hypertensiond3" label="Гипертония 1 стадии транзиторная" name="hypertensiond_group" value="3" checked={hypertensiond === '3'} onChange={handleHypertensiondChange}/></div>
    <div className='mt-[-20px]'><RadioButton id="hypertensiond4" label="Гипертония 2 стадии лабильная" name="hypertensiond_group" value="4" checked={hypertensiond === '4'} onChange={handleHypertensiondChange}/></div>
    <div className='mt-[-20px]'><RadioButton id="hypertensiond5" label="Гипертония 2 стадии стабильная" name="hypertensiond_group" value="5" checked={hypertensiond === '5'} onChange={handleHypertensiondChange}/></div>
    <div className='mt-[-20px]'><RadioButton id="hypertensiond6" label="Гипертония 3 стадии" name="hypertensiond_group" value="6" checked={hypertensiond === '6'} onChange={handleHypertensiondChange}/></div>
    <div className='mt-[-20px]'><RadioButton id="hypertensiond7" label="Не знаю" name="hypertensiond_group" value="7" checked={hypertensiond === '7'} onChange={handleHypertensiondChange}/></div>

    <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Гипотония:</h3>
    <RadioButton id="hypotension1" label="Нет" name="hypotension_group" value="1" checked={hypotension === '1'} onChange={handleHypotensionChange}/>
    <div className='mt-[-20px]'><RadioButton id="hypotension2" label="Да, ортостатическая" name="hypotension_group" value="2" checked={hypotension === '2'} onChange={handleHypotensionChange}/></div>
    <div className='mt-[-20px]'><RadioButton id="hypotension3" label="Да, постоянная" name="hypotension_group"  paragraph="(хроническая/идиопатическая)" value="3" checked={hypotension === '3'} onChange={handleHypotensionChange}/></div>
    <div className='mt-[-10px]'><RadioButton id="hypotension4" label="Не знаю" name="hypotension_group" value="4" checked={hypotension === '4'} onChange={handleHypotensionChange}/></div>
    <div className='ml-32'>
        <div className="ml-64 mb-[-25px] mt-[-235px] z-[-10]">
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Изолированная систолическая артериальная гипертензия:</h3>
          <RadioButton id="hyper1_y" label="Нет" name="hyper_group_y" value="1"/>
          <div className='mt-[-20px] mb-[-10px]'><RadioButton id="hyper2_y" label="Есть" name="hyper_group_y" value="2"/></div>
        </div>
      </div>
      {(hypotension === '2' || hypotension === '3') && (hypertensiond === '2' || hypertensiond === '3' || hypertensiond === '4' || hypertensiond === '5' || hypertensiond === '6') && (
        <div className='flex space-x-4 mt-[-20px] mb-4'>
        <div className='inline-block'>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2 w-[260px]">Верхнее рабочее давление
          <span className='font-sans italic text-sm antialiased font-normal leading-normal text-red-500'> (систолическое)</span>:</h3>
          <TextPlace
          id="upperw"
          min="0"
          value={upperw}
          onChange={(e) => handleChange(e, setUpperw)}
          additionalText="[мм. рт. с.]"
          />
        </div>

        <div className='inline-block'>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2 w-[260px]">Нижнее рабочее давление 
          <span className='font-sans italic text-sm antialiased font-normal leading-normal text-blue-500'> (диастолическое)</span>:</h3>
          <TextPlace
          id="lowerw"
          min="0"
          value={lowerw}
          onChange={(e) => handleChange(e, setLowerw)}
          additionalText="[мм. рт. с.]"
          />
        </div>
        <p className='font-sans italic text-sm antialiased font-normal leading-normal text-amber-500 w-[260px]'>Артериальное давление, измеренное в состоянии покоя, при котором человек чувствует себя хорошо, называется «нормальным». А если человек принимает препараты от давления (при наличии гипертонии) или страдает гипотонией, то «рабочим», «целевым» или «адаптированным».</p>
      </div>
      )}


    <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Диабет (наличие и тип):</h3>
    <RadioButton id="diab1" label="Нет диабета" name="diab_group" value="1" checked={diabetes === '1'} onChange={handleDiabetesChange}/>
    <div className='mt-[-20px]'><RadioButton id="diab2" label="Сахарный диабет первого типа" name="diab_group" value="2" checked={diabetes === '2'} onChange={handleDiabetesChange}/></div>
    <div className='mt-[-20px]'><RadioButton id="diab3" label="Сахарный диабет второго типа" name="diab_group" value="3" checked={diabetes === '3'} onChange={handleDiabetesChange} /></div>
    <div className='mt-[-20px]'><RadioButton id="diab4" label="Гестационный диабет" name="diab_group" value="4" checked={diabetes === '4'} onChange={handleDiabetesChange}/></div>
    <div className='mt-[-20px]'><RadioButton id="diab5" label="Гестационный диабет" name="diab_group" value="5" checked={diabetes === '5'} onChange={handleDiabetesChange}/></div>
    {(diabetes === '3') && (
      <div className='ml-32'>
        <div className="ml-64 mb-[-25px] mt-[-270px] z-[-10]">
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Форма диабета:</h3>
          <RadioButton id="diabetes1_y" label="Лёгкая форма" name="diabetes_group_y" value="1" paragraph="(регулируется диетой)"/>
          <div className='mt-[-10px]'><RadioButton id="diabetes2_y" label="Средней степени тяжести" name="diabetes_group_y" value="2" paragraph="(регулируется сахароснижающими препаратами)"/></div>
          <div className='mt-[-10px] mb-[-20px]'><RadioButton id="diabetes3_y" label="Тяжёлое течение" name="diabetes_group_y" value="3" paragraph="(регулируется инсулином)"/></div>
        </div>
      </div>
    )}

    <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Мерцательная аритмия:</h3>
    <RadioButton id="arrhythmia1" label="Нет" name="arrhythmia_group" value="1"/>
    <div className='mt-[-20px]'><RadioButton id="arrhythmia2" label="Да, периодическая форма" paragraph="(приступы несколько раз в месяц и реже)" name="arrhythmia_group" /></div>
    <div className='mt-[-10px]'><RadioButton id="arrhythmia3" label="Да, постоянная форма" paragraph="(приступы еженедельно, несколько раз в неделю)" name="arrhythmia_group" /></div>
    <div className='mt-[-10px]'><RadioButton id="arrhythmia4" label="Не знаю" name="arrhythmia_group" value="4" /></div>


    <h3 className="text-xl leading-relaxed font-bold text-gray-700 mb-2">Болевой синдром</h3>
    <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Головная боль (наличие и частота):</h3>
    <RadioButton id="headache1" label="Нет" name="headache_group" value="1" checked={headache === '1'} onChange={handleHeadacheChange}/>
    <div className='mt-[-20px]'><RadioButton id="headache2" label="Редко" name="headache_group"  value="2" checked={headache === '2'} onChange={handleHeadacheChange}/></div>
    <div className='mt-[-20px]'><RadioButton id="headache3" label="Периодически" name="headache_group" value="3" checked={headache === '3'} onChange={handleHeadacheChange} /></div>
    <div className='mt-[-20px]'><RadioButton id="headache4" label="Часто" name="headache_group" value="4" checked={headache === '4'} onChange={handleHeadacheChange}/></div>
    {(headache === '2' || headache === '3' || headache === '4') && (
      <div className='ml-32'>
        <div className="ml-40 mb-[-25px] mt-[-225px] z-[10]">
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Сила головной боли:</h3>
          <RadioButton id="headache1_y" label="Слабая" name="headache_group_y" value="1" />
          <div className='mt-[-20px]'><RadioButton id="headache2_y" label="Умеренная" name="headache_group_y" value="2" /></div>
          <div className='mt-[-20px]'><RadioButton id="headache3_y" label="Сильная" name="headache_group_y" value="3" /></div>
          <div className='mt-[-20px] mb-[-20px]'><RadioButton id="headache4_y" label="Очень сильная" name="headache_group_y" value="4" /></div>

        </div>
        <div className="ml-96 mb-[-25px] mt-[-225px] z-[10]">
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Продолжительность приступов:</h3>
          <RadioButton id="headache1_с" label="Несколько часов" name="headache_group_с" value="1" />
          <div className='mt-[-20px]'><RadioButton id="headache2_с" label="Сутки и более" name="headache_group_с" value="2" /></div>
        </div>
      </div>
    )}
    <div className="">
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Помогают ли вам от головной боли лекарственные препараты
          <span class="italic text-sm antialiased font-normal leading-normal text-amber-500"> (анальгетики)</span>:</h3>
          <RadioButton id="headache1_yes" label="Да" name="headache_group_с" value="1" />
          <div className='mt-[-20px]'><RadioButton id="headache2_yes" label="Нет" name="headache_group_с" value="2" /></div>
    </div>

    <div className="">
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Беспокоит ли вас мигрень?</h3>
          <RadioButton id="headache1_no" label="Нет, не беспокоит" name="headache_group_с1" value="1" />
          <div className='mt-[-20px]'><RadioButton id="headache2_no" label="Да" name="headache_group_с1" value="2" /></div>
          <div className='mt-[-20px]'><RadioButton id="headache3_no" label="Да, с аурой" name="headache_group_с1" value="3" /></div>
    </div>

    <div className="">
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Хроническая боль
          <span class="italic text-sm antialiased font-normal leading-normal text-amber-500"> (любой локализации)</span>:</h3>
          <RadioButton id="headache1_c_no" label="Нет, не беспокоит" name="headache_group_с2" value="1" />
          <div className='mt-[-20px]'><RadioButton id="headache2_c_yes" label="Да" name="headache_group_с2" value="2" /></div>
    </div>

    <h3 className="text-xl leading-relaxed font-bold text-gray-700 mb-2">Прочее</h3>
    <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Беспокоило ли вас беспричинное головокружение<br /> 
    <span class="italic text-sm antialiased font-normal leading-normal text-amber-500">(необъяснимое предшествующей ситуацией)</span>?</h3>
    <RadioButton id="other1" label="Нет, не беспокоило" name="other_group" value="1" checked={other === '1'} onChange={handleOtherChange}/>
    <div className='mt-[-20px]'><RadioButton id="other2" label="Беспокоило однократно" name="other_group" value="2" checked={other === '2'} onChange={handleOtherChange}/></div>
    <div className='mt-[-20px]'><RadioButton id="other3" label="Беспокоит периодически" name="other_group" value="3" checked={other === '3'} onChange={handleOtherChange} /></div>
    {(other === '2' || other === '3') && (
      <div className='ml-32'>
        <div className="ml-64 mb-[-25px] mt-[-203px] z-[-10]">
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Продолжительность приступов головокружения:</h3>
          <RadioButton id="other1_y" label="Несколько минут" name="other_group_y" value="1" />
          <div className='mt-[-20px]'><RadioButton id="other2_y" label="Несколько часов" name="other_group_y" value="2" /></div>
          <div className='mt-[-20px]'><RadioButton id="other3_y" label="Сутки и более" name="other_group_y" value="3" /></div>
        </div>
      </div>
    )}

    <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Возникала ли у Вас когда-нибудь внезапно<br /> кратковременная потеря зрения на один глаз или<br /> выпадение полей зрения?</h3>
      <RadioButton id="other1_z" label="Нет, не возникала" name="other_group_z" value="1" checked={otherz === '1'} onChange={handleOtherzChange}/>
      <div className='mt-[-20px]'><RadioButton id="other2_z" label="Возникала однократно" name="other_group_z" value="2" checked={otherz === '2'} onChange={handleOtherzChange}/></div>
      <div className='mt-[-20px]'><RadioButton id="other3_z" label="Возникает периодически" name="other_group_z" value="3" checked={otherz === '3'} onChange={handleOtherzChange} /></div>
      {(otherz === '2' || otherz === '3') && (
        <div className='ml-32'>
          <div className="ml-64 mb-[-25px] mt-[-223px] z-[-10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Продолжительность приступов нарушения зрения:</h3>
            <RadioButton id="2other1_z" label="Несколько минут" name="2other_group_z" value="1" />
            <div className='mt-[-20px]'><RadioButton id="2other2_z" label="Несколько часов" name="2other_group_z" value="2" /></div>
            <div className='mt-[-20px]'><RadioButton id="2other3_z" label="Сутки и более" name="2other_group_z" value="3" /></div>
          </div>
        </div>
      )}
    <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Вы отмечаете за последние годы заметное снижение памяти?</h3>
    <RadioButton id="other2_z1" label="Да" name="3other_group_z" value="1"/>
    <div className='mt-[-20px]'><RadioButton id="other2_z2" label="Нет" name="3other_group_z" value="2"/></div>

    <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Возникала у Вас когда-нибудь внезапно<br /> кратковременная слабость или неловкость при<br /> движении в одной руке или ноге<br /> либо руке и ноге одновременно?</h3>
      <RadioButton id="weakness1_z" label="Нет, не возникала" name="weakness_group_z" value="1" checked={weakness === '1'} onChange={handleWeaknessChange}/>
      <div className='mt-[-20px]'><RadioButton id="weakness2_z" label="Возникала однократно" name="weakness_group_z" value="2" checked={weakness === '2'} onChange={handleWeaknessChange}/></div>
      <div className='mt-[-20px]'><RadioButton id="weakness3_z" label="Возникает периодически" name="weakness_group_z" value="3" checked={weakness === '3'} onChange={handleWeaknessChange} /></div>
      {(weakness === '2' || weakness === '3') && (
        <div className='ml-32'>
          <div className="ml-64 mb-[-25px] mt-[-243px] z-[-10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Продолжительность приступов:</h3>
            <RadioButton id="2weakness1_z" label="Несколько минут" name="2weakness_group_z" value="1" />
            <div className='mt-[-20px]'><RadioButton id="2weakness2_z" label="Несколько часов" name="2weakness_group_z" value="2" /></div>
            <div className='mt-[-20px]'><RadioButton id="2weakness3_z" label="Сутки и более" name="2weakness_group_z" value="3" /></div>
          </div>
        </div>
      )}
    <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Вы отмечаете в последние годы значительное повышение<br /> утомляемости, снижение работоспособности?</h3>
    <RadioButton id="fatigue2_z1" label="Да" name="3fatigue_group_z" value="1"/>
    <div className='mt-[-20px]'><RadioButton id="fatigue2_z2" label="Нет" name="3fatigue_group_z" value="2"/></div>

    <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Гомоцистеинемия как следствие гиповитаминоза<br />
    <span class="italic text-sm antialiased font-normal leading-normal text-amber-500"> (пониженная концентрация витаминов в крови)</span>:</h3>
      <RadioButton id="homocysteinemia1_z" label="Нет" name="homocysteinemia_group_z" value="1" checked={fatigue === '1'} onChange={handleFatigueChange}/>
      <div className='mt-[-20px]'><RadioButton id="homocysteinemia2_z" label="Да" name="homocysteinemia_group_z" value="2" checked={fatigue === '2'} onChange={handleFatigueChange}/></div>
      <div className='mt-[-20px]'><RadioButton id="homocysteinemia3_z" label="Не знаю" name="homocysteinemia_group_z" value="3" checked={fatigue === '3'} onChange={handleFatigueChange} /></div>
      {(fatigue === '2') && (
        <div className='ml-32'>
          <div className="ml-64 mb-[-25px] mt-[-202px] z-[-10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Причина Гомоцистеинемии:</h3>
            <RadioButton id="2homocysteinemia1_z" label="Вследствие дефицита витамина B6" name="2homocysteinemia_group_z" value="1" />
            <div className='mt-[-20px]'><RadioButton id="2homocysteinemia2_z" label="Вследствие дефицита витамина B12" name="2homocysteinemia_group_z" value="2" /></div>
            <div className='mt-[-20px]'><RadioButton id="2homocysteinemia3_z" label="Вследствие дефицита фолиевой кислоты" name="2homocysteinemia_group_z" value="3" /></div>
          </div>
        </div>
      )}

    <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-4">Отметьте, какие из перечисленных заболеваний выявлены у Вас:</h3>
        <CheckboxButton id="ddiseases1" label="Васкулиты/васкулопатии" name="ddiseases_group" value="1" />
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases2" label="Антифосфолипидный синдром" name="ddiseases_group" value="2"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases3" label="Гепатит С" name="ddiseases_group" value="3"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases4" label="Системная красная волчанка" name="ddiseases_group" value="4"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases5" label="Системная склеродермия" name="ddiseases_group" value="5"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases6" label="Узелковый периартериит" name="ddiseases_group" value="6"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases7" label="Первичный церебральный артериит" name="ddiseases_group" value="7"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases8" label="Фиброзномышечная дисплазия сосудов" name="ddiseases_group" value="8"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases9" label="Ретинопатия" name="ddiseases_group" value="9"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases10" label="Инсульт" name="ddiseases_group" value="10"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases11" label="Инфаркт миокарда" name="ddiseases_group" value="11"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases12" label="Атеросклероз" name="ddiseases_group" value="12"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases13" label="Острый коронарный синдром" name="ddiseases_group" value="13"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases14" label="Спондилит" paragraph="(болезнь Бехтерева)" name="ddiseases_group" value="14"  /></div>
        <div className='mt-[-10px]'><CheckboxButton id="ddiseases15" label="Ревматоидный артрит" name="ddiseases_group" value="15"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases16" label="Артрит" name="ddiseases_group" value="16"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases17" label="Синдром обструктивного апноэ во сне" name="ddiseases_group" value="17"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases18" label="Болезнь Хантингтона" name="ddiseases_group" value="18"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases19" label="Болезнь Паркинсона" name="ddiseases_group" value="19"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases20" label="Болезнь Иценко-Кушинга" name="ddiseases_group" value="20"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases21" label="Болезнь Аддисона" name="ddiseases_group" value="21"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases22" label="Рассеянный склероз" name="ddiseases_group" value="22"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases23" label="Акне" name="ddiseases_group" value="23"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases24" label="Тяжелая форма псориаза" name="ddiseases_group" value="24"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="ddiseases25" label="Хронический периодонтит" name="ddiseases_group" value="25"  /></div>

    <div className="">
        <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Проводилась ли Вам коронарная реваскуляризация?</h3>
        <RadioButton id="coronary1" label="Нет" name="coronary_group" value="1" />
        <div className='mt-[-20px]'><RadioButton id="coronary2" label="Да, ангиопластика" name="coronary_group" value="2" /></div>
        <div className='mt-[-20px]'><RadioButton id="coronary3" label="Да, стентирование" name="coronary_group" value="3" /></div>
        <div className='mt-[-20px]'><RadioButton id="coronary4" label="Да, шунтирование" name="coronary_group" value="4" /></div>
    </div>

    <div className="">
        <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Новообразования:</h3>
        <RadioButton id="neoplasms1" label="Нет" name="neoplasms_group" value="1" />
        <div className='mt-[-20px]'><RadioButton id="neoplasms2" label="Да" name="neoplasms_group" value="2" /></div>
        <div className='mt-[-20px]'><RadioButton id="neoplasms3" label="Не знаю" name="neoplasms_group" value="3" /></div>
    </div>

    <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Хроническая болезнь почек:</h3>
      <RadioButton id="neoplasms1_z" label="Нет" name="neoplasms_group_z" value="1" checked={neoplasms === '1'} onChange={handleNeoplasmsChange}/>
      <div className='mt-[-20px]'><RadioButton id="neoplasms2_z" label="Да" name="neoplasms_group_z" value="2" checked={neoplasms === '2'} onChange={handleNeoplasmsChange}/></div>
      <div className='mt-[-20px]'><RadioButton id="neoplasms3_z" label="Не знаю" name="neoplasms_group_z" value="3" checked={neoplasms === '3'} onChange={handleNeoplasmsChange} /></div>
      {(neoplasms === '2') && (
        <div className='ml-32 mb-6'>
          <div className="ml-64 mb-[-25px] mt-[-180px] z-[-10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Укажите стадию болезни:</h3>
            <RadioButton id="2neoplasms1_z" label="1 стадия" name="2neoplasms_group_z" value="1" />
            <div className='mt-[-20px]'><RadioButton id="2neoplasms2_z" label="2 стадия" name="2neoplasms_group_z" value="2" /></div>
            <div className='mt-[-20px]'><RadioButton id="2neoplasms3_z" label="3а стадия" name="2neoplasms_group_z" value="3" /></div>
            <div className='mt-[-20px]'><RadioButton id="2neoplasms4_z" label="3б стадия" name="2neoplasms_group_z" value="4" /></div>
            <div className='mt-[-20px]'><RadioButton id="2neoplasms5_z" label="4 стадия" name="2neoplasms_group_z" value="5" /></div>
            <div className='mt-[-20px]'><RadioButton id="2neoplasms6_z" label="5 стадия" name="2neoplasms_group_z" value="6" /></div>
          </div>
        </div>
      )}

    <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Заболевания щитовидной железы:</h3>
      <RadioButton id="thyroid1_z" label="Нет" name="thyroid_group_z" value="1" checked={thyroid === '1'} onChange={handleThyroidChange}/>
      <div className='mt-[-20px]'><RadioButton id="thyroid2_z" label="Да" name="thyroid_group_z" value="2" checked={thyroid === '2'} onChange={handleThyroidChange}/></div>
      <div className='mt-[-20px]'><RadioButton id="thyroid3_z" label="Не знаю" name="thyroid_group_z" value="3" checked={thyroid === '3'} onChange={handleThyroidChange} /></div>
      {(thyroid === '2') && (
        <div className='ml-32'>
          <div className="ml-64 mb-[-25px] mt-[-182px] z-[-10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Вид заболевания:</h3>
            <RadioButton id="2thyroid1_z" label="Гипотиреоз" name="2thyroid_group_z" value="1" />
            <div className='mt-[-20px]'><RadioButton id="2thyroid2_z" label="Гипертиреоз" name="2thyroid_group_z" value="2" /></div>
            <div className='mt-[-20px]'><RadioButton id="2thyroid3_z" label="Другое" name="2thyroid_group_z" value="3" /></div>
          </div>
        </div>
      )}

    <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Семейная гиперхолестеринемия:</h3>
      <RadioButton id="lemia1_z" label="Нет" name="lemia_group_z" value="1" checked={lemia === '1'} onChange={handleLemiaChange}/>
      <div className='mt-[-20px]'><RadioButton id="lemia2_z" label="Да" name="lemia_group_z" value="2" checked={lemia === '2'} onChange={handleLemiaChange}/></div>
      <div className='mt-[-20px]'><RadioButton id="lemia3_z" label="Не знаю" name="lemia_group_z" value="3" checked={lemia === '3'} onChange={handleLemiaChange} /></div>
      {(lemia === '2') && (
        <div className='ml-32'>
          <div className="ml-64 mb-[-25px] mt-[-182px] z-[-10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Вид заболевания:</h3>
            <RadioButton id="lemia12_z" label="Гетерозиготная" name="lemia2_group_z" value="1" />
            <div className='mt-[-20px]'><RadioButton id="lemia22_z" label="Гомозиготная" name="lemia2_group_z" value="2" /></div>
          </div>
        </div>
      )}

    <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Стенокардия:</h3>
      <RadioButton id="angina1_z" label="Нет" name="angina_group_z" value="1" checked={angina === '1'} onChange={handleAnginaChange}/>
      <div className='mt-[-20px]'><RadioButton id="angina2_z" label="Да, атипичная" name="angina_group_z" value="2" checked={angina === '2'} onChange={handleAnginaChange}/></div>
      <div className='mt-[-20px]'><RadioButton id="angina3_z" label="Да, типичная" name="angina_group_z" value="3" checked={angina === '3'} onChange={handleAnginaChange} /></div>
      <div className='mt-[-20px]'><RadioButton id="angina4_z" label="Да, без уточнения формы" name="angina_group_z" value="4" checked={angina === '4'} onChange={handleAnginaChange} /></div>
      <div className='mt-[-20px]'><RadioButton id="angina5_z" label="Не знаю" name="angina_group_z" value="5" checked={angina === '5'} onChange={handleAnginaChange} /></div>
      {(angina === '4') && (
        <div className='w-[540px]'>
          <div className="">
          <CheckboxButton id="angina1" label="Боль в области грудины длительностью 2-5 минут без или с иррадиацией в левую руку, спину, нижнюю челюсть или эпигастральную область в отсутствие или во время физической нагрузки, либо эмоционального стресса" name="angina2_group" value="1" />
          <div className='mt-[-20px]'><CheckboxButton id="angina2" label="Одышку, ощущение «тяжести», «жжения» в области сердца" name="angina2_group" value="2"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="angina3" label="Быстроисчезающую боль в сердце после прекращения нагрузки либо после приема нитратов" name="angina2_group" value="3"  /></div>
          </div>
        </div>
      )}

    <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-4">Психические расстройства:</h3>
      <CheckboxButton id="mental1" label="Пограничное расстройство личности" name="mental_group" paragraph="(диагноз)" value="1" />
      <div className='mt-[-10px]'><CheckboxButton id="mental2" label="Посттравматическое стрессовое расстройство" name="mental_group" value="2"  /></div>
      <div className='mt-[-20px]'><CheckboxButton id="mental3" label="Тревожное расстройство" name="mental_group" value="3"  /></div>
      <div className='mt-[-20px]'><CheckboxButton id="mental4" label="Эпизоды депрессии в прошлом" name="mentalc_group" value="4"  /></div>

      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mb-2">Прием препаратов в течение долгого времени 
      <span class="font-sans text-sm antialiased font-normal leading-normal text-amber-500 italic"> (от года и более)</span></h3>
        <CheckboxButton id="medication1" label="Снотворные" name="characteristic_group" value="1" />
        <div className='mt-[-20px]'><CheckboxButton id="medication2" label="Обезболивающие" name="medication_group" value="2"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="medication3" label="Седативные" name="medication_group" value="3"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="medication4" label="Стероидные" name="medication_group" value="4"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="medication5" label="Интерферон-альфа" name="medication_group" value="5"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="medication6" label="Изотретионин" name="medication_group" value="6"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="medication7" label="Оральные контрацептивы, содержащие прогестерон" name="medication_group" value="7"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="medication8" label="Противосудорожные" name="medication_group" value="8"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="medication9" label="Антипсихотические" name="medication_group" value="9"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="medication10" label="Гормональные" name="medication_group" value="10"  /></div>
        <div className='mt-[-20px]'><CheckboxButton id="medication11" label="Сердечные" name="medication_group"  paragraph="(Бета-блокаторы, альфа-блокаторы, гипотензивные, антиаритмические, вазодилататоры и др.)" value="11"  /></div>
        <div className='mt-[-10px]'><CheckboxButton id="medication12" label="Антимигренозные" name="medication_group" value="12"  /></div>


    <div className="">
      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mb-2">Химиотерапия и лучевая терапия</h3>
        <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Проводилась ли Вам когда-либо химиотерапия в целях лечения онкологических заболеваний?</h3>
        <RadioButton id="chemot1" label="Нет" name="chemot_group" value="1" />
        <div className='mt-[-20px]'><RadioButton id="chemot2" label="Да, ранее" name="chemot_group" value="2" /></div>
        <div className='mt-[-20px]'><RadioButton id="chemot3" label="Да, в настоящее время" name="chemot_group" value="3" /></div>
    </div>
      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Проводилась ли Вам когда-либо лучевая терапия на грудную клетку, голову или шею?</h3>
        <RadioButton id="2chemot1" label="Нет" name="2chemot_group" value="1" />
        <div className='mt-[-20px]'><RadioButton id="2chemot2" label="Да, ранее" name="2chemot_group" value="2" /></div>
        <div className='mt-[-20px]'><RadioButton id="2chemot3" label="Да, в настоящее время" name="2chemot_group" value="3" /></div>

      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mb-2">Семейный анамнез</h3>
      <div className='mt-4'><CheckboxButton id="depression" label="Депрессия у близких родственников " name="depression_group"  paragraph="(родители, братья, сёстры)" value="1"  /></div>

    <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Ранние инсульты:</h3>
      <CheckboxButton id="early_strokes1" label="У родственников 1-й степени родства" name="old_strokes_group" paragraph="(родители, братья, сёстры)" value="1" />
      <div className='mt-[-10px]'><CheckboxButton id="early_strokes2" label="У родственников 2-й степени родства" name="early_strokes_group" paragraph="(бабушки/дедушки, внуки, дяти/тети, племянники)" value="2"  /></div>
        <div className='ml-32'>
          <div className="ml-[288px] mb-[-25px] mt-[-147px] z-[-10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Инсульты в пожилом возрасте:</h3>
            <CheckboxButton id="old_strokes1" label="У родственников 1-й степени родства" name="old_strokes_group" paragraph="(родители, братья, сёстры)" value="1" />
            <div className='mt-[-10px]'><CheckboxButton id="old_strokes2" label="У родственников 2-й степени родства" name="old_strokes_group" paragraph="(бабушки/дедушки, внуки, дяти/тети, племянники)" value="2"  /></div>
          </div>
        </div>


      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Ранние инфаркты миокарда:</h3>
      <CheckboxButton id="early_myocardial1" label="У родственников 1-й степени родства" name="early_myocardial_group" paragraph="(родители, братья, сёстры)" value="1" />
      <div className='mt-[-10px]'><CheckboxButton id="early_myocardial2" label="У родственников 2-й степени родства" name="early_myocardial_group" paragraph="(бабушки/дедушки, внуки, дяти/тети, племянники)" value="2"  /></div>
        <div className='ml-32'>
          <div className="ml-[288px] mb-[-25px] mt-[-146px] z-[-10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Инфаркты миокарда в пожилом возрасте:</h3>
            <CheckboxButton id="old_myocardial1" label="У родственников 1-й степени родства" name="old_myocardial_group" paragraph="(родители, братья, сёстры)" value="1" />
            <div className='mt-[-10px]'><CheckboxButton id="old_myocardial2" label="У родственников 2-й степени родства" name="old_myocardial_group" paragraph="(бабушки/дедушки, внуки, дяти/тети, племянники)" value="2"  /></div>
          </div>
        </div>


      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Ранние смерти от сердечных заболеваний:</h3>
      <CheckboxButton id="early_heartdisease1" label="У родственников 1-й степени родства" name="early_heartdisease_group" paragraph="(родители, братья, сёстры)" value="1" />
      <div className='mt-[-10px]'><CheckboxButton id="early_heartdisease2" label="У родственников 2-й степени родства" name="early_heartdisease_group" paragraph="(бабушки/дедушки, внуки, дяти/тети, племянники)" value="2"  /></div>
        <div className='ml-32 mb-6'>
          <div className="ml-[288px] mb-[-25px] mt-[-147px] z-[-10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Смерти от сердечных заболеваний в пожилом возрасте:</h3>
            <CheckboxButton id="old_heartdisease1" label="У родственников 1-й степени родства" name="old_heartdisease_group" paragraph="(родители, братья, сёстры)" value="1" />
            <div className='mt-[-10px]'><CheckboxButton id="old_heartdisease2" label="У родственников 2-й степени родства" name="old_heartdisease_group" paragraph="(бабушки/дедушки, внуки, дяти/тети, племянники)" value="2"  /></div>
          </div>
        </div>

      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2 mt-[-20px]">Ранняя артериальная гипертензия:</h3>
      <div className='mb-4'><CheckboxButton id="early_arterial1" label="У родственников 1-й степени родства" name="early_arterial_group" paragraph="(родители, братья, сёстры)" value="1" /></div>

      <button type="submit" className="text-lg leading-relaxed font-normal bg-amber-400 mb-[-20px] text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">
        Сохранить
      </button>

    </div>

      );
    };

export default Diseases;
