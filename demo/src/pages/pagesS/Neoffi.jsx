import React from 'react'
import RadioButton from '../RadioButton'

const Neoffi = () => {
  return (
    <div className='h-screen flex flex-col pb-[180px] overflow-y-auto '>
      <div className='w-[820px] pl-[16px] mt-6'>
      <p className="font-sans italic text-sm antialiased font-normal leading-normal text-amber-500 mb-12">
      Ответьте, пожалуйста, на несколько вопросов о себе. Выбирайте тот ответ, который наилучшим образом отражает Ваше мнение. Здесь нет правильных или неправильных ответов, так как важно только Ваше мнение. Просьба работать в темпе, подолгу не задумываясь над ответами. Работайте последовательно, не пропуская вопросов.
      </p>
      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mt-5 mb-2">Опросник личностных черт (методика NEO-FFI)</h3>

      <div className='flex font-sans text-sm antialiased font-normal leading-normal text-gray-700 mt-2 mb-2 text-center justify-end mt-8 pb-6 border-b border-gray-300'>

      <div className='flex justify-center items-center'>
        <div className='inline-block mr-[-2px]'><p className='font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900'>1.</p></div>
        <div className='inline-block mt-8'><RadioButton id="dis1" name="group" value="1" disabled={true} /></div>
      </div>
      <div className='inline-block w-28 h-20 mr-4  flex justify-center items-center text-center bg-white shadow-lg rounded-lg text-gray-700'>
        <p className="">Абсолютно не согласен</p>
      </div>

      <div className='flex justify-center items-center'>
        <div className='inline-block mr-[-2px]'><p className='font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900'>2.</p></div>
        <div className='inline-block mt-8'><RadioButton id="dis2" name="group" value="2" disabled={true} /></div>
      </div>
      <div className='inline-block w-28 h-20 mr-4  flex justify-center items-center text-center bg-white shadow-md rounded-lg text-gray-700'>
        <p className="">Не согласен</p>
      </div>

      <div className='flex justify-center items-center'>
        <div className='inline-block mr-[-2px]'><p className='font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900'>3.</p></div>
        <div className='inline-block mt-8'><RadioButton id="dis3" name="group" value="3" disabled={true} /></div>
      </div>
      <div className='inline-block w-28 h-20 mr-4  flex justify-center items-center text-center bg-white shadow-md rounded-lg text-gray-700'>
        <p className="">Нейтрально отношусь</p>
      </div>

      <div className='flex justify-center items-center'>
        <div className='inline-block mr-[-2px]'><p className='font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900'>4.</p></div>
        <div className='inline-block mt-8'><RadioButton id="dis4" name="group" value="4" disabled={true} /></div>
      </div>
      <div className='inline-block w-28 h-20 mr-4  flex justify-center items-center text-center bg-white shadow-md rounded-lg text-gray-700'>
        <p className="">Согласен</p>
      </div>

      <div className='flex justify-center items-center'>
        <div className='inline-block mr-[-2px]'><p className='font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900'>5.</p></div>
        <div className='inline-block mt-8'><RadioButton id="dis5" name="group" value="5" disabled={true} /></div>
      </div>
      <div className='inline-block w-28 h-20 mr-4  flex justify-center items-center text-center bg-white shadow-md rounded-lg text-gray-700'>
        <p className="">Абсолютно согласен</p>
      </div>


    </div>
      


      
      </div>
    </div>
  )
}

export default Neoffi