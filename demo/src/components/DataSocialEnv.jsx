import React, { useState } from 'react';
import RadioButton from '../pages/RadioButton';
import CheckboxButton from '../pages/CheckboxButton';

const DataSocialEnv = () => {
  const [showCharacteristics, setShowCharacteristics] = useState(false);
  const [educationDate, setEducationDate] = useState('');
  const [smoking, setSmoking] = useState('never');
  const [alc, setAlc] = useState('never');
  const [act, setAct] = useState('never');
  const [nwork, setNwork] = useState('never');
  const [stressLevel, setStressLevel] = useState(1); // Начальное значение на ползунке

  const handleStressChange = (event) => {
    setStressLevel(parseInt(event.target.value));
  };
  

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

  const handleDateChange = (event) => {
    setEducationDate(event.target.value);
  };

  return (
    <div className='p-4 pt-5 h-screen flex flex-col pt-2 pb-60 overflow-y-auto font-light z-[101]'>

      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Как вы оцениваете общее состояние своего здоровья?</h3>
      <RadioButton id="hstatus1" label="Очень хорошее" name="hstatus_group" value="1"/>
      <div className='mt-[-20px]'><RadioButton id="hstatus2" label="Достаточно хорошее" name="hstatus_group" value="2" /></div>
      <div className='mt-[-20px]'><RadioButton id="hstatus3" label="Среднее" name="hstatus_group" value="3" /></div>
      <div className='mt-[-20px]'><RadioButton id="hstatus4" label="Достаточно плохое" name="hstatus_group" value="4" /></div>
      <div className='mt-[-20px]'><RadioButton id="hstatus5" label="Очень плохое" name="hstatus_group" value="5" /></div>

      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Как бы вы оценили общее состояние своего здоровья по сравнению<br /> с другими людьми своего возраста?</h3>
      <RadioButton id="hsubjective1" label="Гораздо лучше" name="hsubjective_group" value="1"/>
      <div className='mt-[-20px]'><RadioButton id="hsubjective2" label="Немного лучше" name="hsubjective_group" value="2" /></div>
      <div className='mt-[-20px]'><RadioButton id="hsubjective3" label="Ни лучше, ни хуже" name="hsubjective_group" value="3" /></div>
      <div className='mt-[-20px]'><RadioButton id="hsubjective4" label="Немного хуже" name="hsubjective_group" value="4" /></div>
      <div className='mt-[-20px]'><RadioButton id="hsubjective5" label="Гораздо хуже" name="hsubjective_group" value="5" /></div>
      

      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Как бы вы оценили общее состояние своего здоровья по сравнению<br /> с другими людьми своего возраста?</h3>
      <RadioButton id="education1" label="Неоконченные 9 классов" name="education_group" value="1"/>
      <div className='mt-[-20px]'><RadioButton id="education2" label="Оконченные 9 классов" name="education_group" value="2" /></div>
      <div className='mt-[-20px]'><RadioButton id="education3" label="Среднее" paragraph="(оконченные 11 классов)" name="education_group" value="3" /></div>
      <div className='mt-[-10px]'><RadioButton id="education4" label="Не оконченное среднее профессиональное" paragraph="(не окончил ПТУ/колледж/техникум)" name="education_group" value="4" /></div>
      <div className='mt-[-10px]'><RadioButton id="education5" label="Оконченное среднее профессиональное" paragraph="(окончил ПТУ/колледж/техникум)" name="education_group" value="5" /></div>
      <div className='mt-[-10px]'><RadioButton id="education6" label="Имею или получаю высшее образование" name="education_group" value="6" /></div>

      <div className='ml-32'>
          <div className="ml-[380px] mb-[-25px] mt-[-364px] z-[10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Дата получения образования:</h3>
            <p className="font-sans italic text-sm antialiased font-normal leading-normal text-amber-500 mt-1 mb-4 ">(дата получения последнего образования с точностью до месяца)</p>
            <div className="">
            <label htmlFor="educationDate" className="block text-sm font-medium text-gray-700">
            </label>
            <input
                type="month"
                id="educationDate"
                name="educationDate"
                value={educationDate}
                onChange={handleDateChange}
                className="mt-1 p-2 block border border-gray-300 rounded-md"
            />
        </div>
          </div>
        </div>

        <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Уровень материального благополучия:</h3>
      <RadioButton id="materiall1" label="Не хватает денег даже на еду" name="materiall_group" value="1"/>
      <div className='mt-[-20px]'><RadioButton id="materiall2" label="Хватает на еду, но не хватает на покупку одежды и обуви" name="materiall_group" value="2" /></div>
      <div className='mt-[-20px]'><RadioButton id="materiall3" label="Хватает на одежду и обувь, но не хватает на покупку мелкой бытовой техники" name="materiall_group" value="3" /></div>
      <div className='mt-[-10px]'><RadioButton id="materiall4" label="Хватает денег на различные покупки, но покупка дорогих вещей требует кредита" paragraph="(компьютера, стиральной машины, холодильника)" name="materiall_group" value="4" /></div>
      <div className='mt-[-10px]'><RadioButton id="materiall5" label="Хватает денег на все, а на покупку квартиры, машины, дачи необходимо накапливать денежные средства" name="materiall_group" value="5" /></div>
      <div className='mt-[-10px]'><RadioButton id="materiall6" label="Могу позволить себе все" name="materiall_group" value="6" /></div>
    

 {/*  
        <div className="mb-8 z-[100]">
        <div className="mb-8">
        <p className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-6">
            Оцените, пожалуйста, уровень стресса в вашей жизни на протяжении последнего месяца:
        </p>
        <label htmlFor="stressLevel" className="sr-only"></label>
        <input
            id="stressLevel"
            type="range"
            min="1"
            max="5"
            value={stressLevel}
            onChange={handleStressChange}
            className="ml-32 w-[320px] h-2 bg-gray-200 rounded-lg appearance-none bg-transparent"
            style={{
                    '--thumb-color': '#f59e0b', // Установка цвета кружка
                    }}
                />
                <style jsx>{`
                    input[type='range']::-webkit-slider-thumb {
                    appearance: none;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background-color: var(--thumb-color);
                    cursor: pointer;
                    }
                    input[type='range']::-webkit-slider-runnable-track {
                    background: var(--track-color);
                    border-radius: 9999px;
                    }
            `}</style>
                    </div>
        </div>
        <div className='z-[10] mt-[-86px]'><p className="font-sans italic text-sm antialiased font-normal leading-normal text-amber-500 ml-4">Очень низкий</p></div>
        <div className='z-[10] mt-[-20px]'><p className="font-sans italic text-sm antialiased font-normal leading-normal text-amber-500 ml-[470px]">Очень высокий</p></div>
        <div className='w-[320px] border-4 border-gray-200 z-[9] mt-[-12px] ml-32'></div>
*/}



      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2 mt-16">Ваши условия проживания:</h3>
      <RadioButton id="living1" label="Проживаю с семьёй" name="living_group" value="1"/>
      <div className='mt-[-20px]'><RadioButton id="living2" label="Проживание без семьи" name="living_group" value="2" /></div>


      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Степень религиозности:</h3>
      <RadioButton id="religion1" label="Не религиозен" name="religion_group" value="1"/>
      <div className='mt-[-20px]'><RadioButton id="religion2" label="Низкая" paragraph="(считаю себя религиозным человеком, но не соблюдаю все традиции)" name="religion_group" value="2" /></div>
      <div className='mt-[-10px]'><RadioButton id="religion3" label="Средняя" paragraph="(соблюдаю основные традиции религии, но не все и не всегда)" name="religion_group" value="3" /></div>
      <div className='mt-[-10px] mb-[10px]'><RadioButton id="religion4" label="Высокая" paragraph="(стараюсь соблюдать все традиции регулярно и/или состою в религиозной общине)" name="religion_group" value="4" /></div>

      <button type="submit" className="text-lg leading-relaxed font-normal bg-amber-400 mb-[-20px] text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">
        Сохранить
      </button>

    </div>
  );
};

export default DataSocialEnv;
