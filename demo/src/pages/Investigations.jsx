import React, { useState } from 'react';
import TextPlace from './TextPlace';
import CheckboxButton from './CheckboxButton';
import RadioButton from './RadioButton';

const Investigations = () => {
    const [totalСholesterol, setTotalСholesterol] = useState('');
    const [LDLCholesterol, setLDLCholesterol] = useState('');
    const [HDLcholesterol, setHDLcholesterol] = useState('');
    const [triglycerides, setTriglycerides] = useState('');
    const [coagulability, setCoagulability] = useState('');
    const [glomerularf, setGlomerularf] = useState('');
    const [creatininein, setCreatininein] = useState('');
    const [albuminin, setAlbuminin] = useState('');
    const [asindex, setAsindex] = useState('');
    const [vascularexam, setVascularexam] = useState('never');

    const handleVascularexamChange = (event) => {
      setVascularexam(event.target.value); 
    };

    const handleChange = (e, setter) => {
      setter(e.target.value);
    };

  return (
    <div className='p-4 pt-[1px] h-screen flex flex-col pt-2 pb-[180px] overflow-y-auto font-light'>
      <div className='w-[820px]'>
      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mt-5 mb-2">Иммунологический анализ крови</h3>
      <div className="mt-2"><CheckboxButton id="immuno" label="Повышенный уровень цитокинов" name="immuno_group" value="1" /></div>

      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mb-2">Биохимический анализ крови</h3>
      <p className="font-sans italic text-sm antialiased font-normal leading-normal text-amber-500 mt-1 mb-4">Обратите внимание, что данные результатов биохимического анализа крови можно вводить только используя размерность [ммоль/л]. Если результаты анализов были получены в размерности [мг/дл], Вы можете вручную перевести значения параметров по формуле:</p>
      <div className=''><p className="font-sans italic text-sm antialiased font-normal leading-normal text-green-500 mt-1 mb-4 text-center">ЗНАЧЕНИЕ [ММОЛЬ/Л] = ЗНАЧЕНИЕ [МГ/ДЛ] / 38,7</p></div>
      <div className='flex space-x-4'>
        <div className='inline-block'>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mt-2 mb-2 w-[260px]">Общий холестерин:</h3>
          <TextPlace
          id="totalСholesterol"
          min="0"
          value={totalСholesterol}
          onChange={(e) => handleChange(e, setTotalСholesterol)}
          additionalText="[ммоль/л]"
          />
        </div>
      
        <div className='inline-block'>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mt-2 mb-2 w-[260px]">Холестерин ЛПНП:</h3>
          <TextPlace
          id="LDLCholesterol"
          min="0"
          value={LDLCholesterol}
          onChange={(e) => handleChange(e, setLDLCholesterol)}
          additionalText="[ммоль/л]"
          />
        </div>

        <div className='inline-block'>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mt-2 mb-2 w-[260px]">Холестерин ЛПВП:</h3>
          <TextPlace
          id="HDLcholesterol"
          min="0"
          value={HDLcholesterol}
          onChange={(e) => handleChange(e, setHDLcholesterol)}
          additionalText="[ммоль/л]"
          />
        </div>

      </div>
      <div className=''>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mt-2 mb-2 w-[260px]">Триглицериды:</h3>
          <TextPlace
          id="triglycerides"
          min="0"
          value={triglycerides}
          onChange={(e) => handleChange(e, setTriglycerides)}
          additionalText="[ммоль/л]"
          />
        </div>
      <div className=''>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mt-2 mb-2 w-[260px]">Свёртываемость крови (МНО):</h3>
          <TextPlace
          id="coagulability"
          min="0"
          value={coagulability}
          onChange={(e) => handleChange(e, setCoagulability)}
          additionalText="[ммоль/л]"
          />
      </div>

      <div className="mt-4"><CheckboxButton id="affect_b" label="Принимаю препараты, влияющие на свертываемость крови" name="affect_b_group" value="1" /></div>

      <div className=''>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2 w-[260px]">Скорость клубочковой фильтрации:</h3>
          <TextPlace
          id="glomerularf"
          min="0"
          value={glomerularf}
          onChange={(e) => handleChange(e, setGlomerularf)}
          additionalText="[мл/мин/1,73м²]"
          />
      </div>

      <div className=''>
      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mt-6 mb-4">Выберите все выявленные у Вас генетические полиморфизмы:</h3>
          <CheckboxButton id="geneticpoly1" label="Повышенный уровень липопротеина-а и протеина Апо-Е" name="geneticpoly_group" value="1" />
          <div className='mt-[-20px]'><CheckboxButton id="geneticpoly2" label="Снижение уровня активных антитромботических протеинов" name="geneticpoly_group" value="2"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="geneticpoly3" label="Гомоцистеинемия" name="geneticpoly_group" value="3"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="geneticpoly4" label="Синдром CADASIL" name="geneticpoly_group" value="4"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="geneticpoly5" label="SCNN1B (1b субъединица эпителиального Na канала)" name="geneticpoly_group" value="5"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="geneticpoly6" label="SCNN1G (1g субъединица эпителиального Na канала)" name="geneticpoly_group" value="6"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="geneticpoly7" label="АРNН (Na+/H+антипортер)" name="geneticpoly_group" value="7"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="geneticpoly8" label="REN (ренин)" name="geneticpoly_group" value="8"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="geneticpoly9" label="AGT(ангиотензинI)" name="geneticpoly_group" value="9"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="geneticpoly10" label="ACE (ангиотензинI конвертирующий фермент)" name="geneticpoly_group" value="10"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="geneticpoly11" label="PLA2 (панкреатическая фосфолипаза А2)" name="geneticpoly_group" value="11"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="geneticpoly12" label="SAN (гипертензия, обусловленная геном, экспрессирующимся в почке)" name="geneticpoly_group" value="12"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="geneticpoly13" label="NOS3 (эндотелиальная синтаза окиси азота)" name="geneticpoly_group" value="13"  /></div>
      </div>

      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mb-2">Анализ мочи на альбумин и креатинин</h3>
      <div className='flex space-x-4'>
        <div className='inline-block'>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mt-2 mb-2 w-[260px]">Креатинин в порции мочи, концентрация:</h3>
          <TextPlace
          id="creatininein"
          min="0"
          value={creatininein}
          onChange={(e) => handleChange(e, setCreatininein)}
          additionalText="[ммоль/л]"
          />
        </div>
      
        <div className='inline-block'>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mt-2 mb-2 w-[260px]">Альбумин в порции мочи, концентрация:</h3>
          <TextPlace
          id="albuminin"
          min="0"
          value={albuminin}
          onChange={(e) => handleChange(e, setAlbuminin)}
          additionalText="[мг/л]"
          />
        </div>
      </div>

      <div className=''>
      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mt-4 mb-2">Функциональные исследования</h3>
      <p className="font-sans italic text-sm antialiased font-normal leading-normal text-amber-500 mt-1 mb-2">Данные для данного раздела необходимо заполнить из заключения.</p>
      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-4">Данные электрокардиографии (ЭКГ):</h3>
          <CheckboxButton id="electrocardiography1" label="Гипертрофия левого желудочка" name="electrocardiography_group" value="1" />
          <div className='mt-[-20px]'><CheckboxButton id="electrocardiography2" label="Патологический зубец Q или интервал QS" name="electrocardiography_group" value="2"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="electrocardiography3" label="Блокада левой ножки пучка Гиса" name="electrocardiography_group" value="3"  /></div>
      </div>

      <div className='mt-[-10px]'>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2 w-[260px]">Лодыжечно-плечевой индекс:</h3>
          <TextPlace
          id="asindex"
          min="0"
          value={asindex}
          onChange={(e) => handleChange(e, setAsindex)}
          additionalText="[ед]"
          />
      </div>

      <div className='flex space-x-4'>
        <div className='inline-block'> 
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mt-4 mb-2 w-[400px]">Проводилось ли Вам исследование сосудов головы и шеи?</h3>
          <RadioButton id="vascularexam1" label="Нет" name="vascularexam_group" value="1" checked={vascularexam === '1'} onChange={handleVascularexamChange}/>
          <div className='mt-[-20px]'><RadioButton id="vascularexam2" label="Да, отклонений не выявлено" name="vascularexam_group" value="2" checked={vascularexam === '2'} onChange={handleVascularexamChange}/></div>
          <div className='mt-[-20px]'><RadioButton id="vascularexam3" label="Да, выявлены отклонения" name="vascularexam_group" value="3" checked={vascularexam === '3'} onChange={handleVascularexamChange}/></div>
        </div>
        {(vascularexam === '3') && (
        <div>
          <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mt-4 mb-2 w-[400px]">Отклонения, выявленные при исследовании:</h3>
          <CheckboxButton id="devvascularexam1" label="Гипертрофия левого желудочка" name="devvascularexam_group" value="1" />
          <div className='mt-[-20px]'><CheckboxButton id="devvascularexam2" label="Патологический зубец Q или интервал QS" name="devvascularexam_group" value="2"  /></div>
          <div className='mt-[-20px]'><CheckboxButton id="devvascularexam3" label="Блокада левой ножки пучка Гиса" name="devvascularexam_group" value="3"  /></div>
        </div>
        )}
      </div>

    </div>
    <button type="submit" className="text-lg leading-relaxed font-normal bg-amber-400 mb-[-20px] text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">
        Сохранить
      </button>
    </div>
  );
};

export default Investigations;
