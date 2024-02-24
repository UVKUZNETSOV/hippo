import React from 'react';
import { Link } from 'react-router-dom';

const Surveys = () => {
  return (
    <div className='p-4 pt-[1px] h-screen flex flex-col pt-2 pb-[180px] overflow-y-auto font-light'>
      <div className='w-[820px]'>
        <div className="mb-12">
          <h3 className="text-xl leading-relaxed font-semibold text-gray-700 mt-5 mb-2">Опросник личностных черт (методика NEO-FFI)</h3>
          <p className="text-gray-700 text-sm w-[540px] mb-6 font-normal">
          Личностный опросник (тест «Большая пятерка») — позволяет оценить, насколько у человека выражены следующие черты личности: нейротизм, экстраверсия, готовность к согласию, сознательность и открытость опыту.
          </p>
          <Link
          to="/surveys/neoffi"
          className="bg-amber-400 text-sm font-normal text-white py-[10px] px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500 hover:no-underline">
          Приступить к выполнению
          </Link>
        </div>

        <div className="mb-12">
          <h3 className="text-xl leading-relaxed font-semibold text-gray-700 mt-5 mb-2">Уровень устойчивости</h3>
          <p className="text-gray-700 text-sm w-[540px] mb-6 font-normal">
          Тест жизнестойкости является надежным и валидным инструментом психологической диагностики, результаты которого не зависят от пола, образования и региона проживания человека. Результаты теста жизнестойкости позволяют оценить способность и готовность человека активно и гибко действовать в ситуации стресса и трудностей или его уязвимость к переживаниям стресса и депрессии.          </p>
          <button className="bg-amber-400 text-sm font-normal text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">Приступить к выполнению</button>
        </div>

        <div className="mb-12">
          <h3 className="text-xl leading-relaxed font-semibold text-gray-700 mt-5 mb-2">Чувство одиночества</h3>
          <p className="text-gray-700 text-sm w-[540px] mb-6 font-normal">
          Дифференциальный опросник переживания одиночества - оригинальный психодиагностический инструмент, направленный на изучение одиночества как многомерного феномена. Включает как негативные так и позитивные стороны исследуемого являения.          </p>
          <button className="bg-amber-400 text-sm font-normal text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">Приступить к выполнению</button>
        </div>

        <div className="mb-12">
          <h3 className="text-xl leading-relaxed font-semibold text-gray-700 mt-5 mb-2">Финансовое благополучие</h3>
          <p className="text-gray-700 text-sm w-[540px] mb-6 font-normal">
          Опросник для измерения субъективного экономического благополучия, которое рассматривается как отношение личности к материальным аспектам жизни и выражает ее жизненную позицию в сфере материальных устремлений и потребления.          </p>
          <button className="bg-amber-400 text-sm font-normal text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">Приступить к выполнению</button>
        </div>

        <div className="mb-12">
          <h3 className="text-xl leading-relaxed font-semibold text-gray-700 mt-5 mb-2">Дисфункциональное мышление</h3>
          <p className="text-gray-700 text-sm w-[540px] mb-6 font-normal">
          Опросник «Шкала дисфункциональных отношений» А. Бека и А. Вейсмана, предназначенный для исследования когнитивных искажений, лежащих в основе неадекватного эмоционального реагирования и психогенных расстройств.          </p>
          <button className="bg-amber-400 text-sm font-normal text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">Приступить к выполнению</button>
        </div>

        <div className="mb-12">
          <h3 className="text-xl leading-relaxed font-semibold text-gray-700 mt-5 mb-2">Социальные проблемы</h3>
          <p className="text-gray-700 text-sm w-[540px] mb-6 font-normal">
          Представленный опросник является первым на русском языке инструментом, позволяющим выявлять стили решения социальных (личностных) проблем. Данный опросник может быть полезным как при проведении исследований в области психологии личности, так и в психологии экспертности и экспертизы.          </p>
          <button className="bg-amber-400 text-sm font-normal text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">Приступить к выполнению</button>
        </div>

        <div className="mb-12">
          <h3 className="text-xl leading-relaxed font-semibold text-gray-700 mt-5 mb-2">Шкала Тревоги и Депрессии</h3>
          <p className="text-gray-700 text-sm w-[540px] mb-6 font-normal">
          Шкала, предназначена для скринингового выявления тревоги и депрессии у пациентов. Отличается простотой применения и обработки. Заполнение шкалы не требует продолжительного времени и не вызывает затруднений у пациента.          </p>
          <button className="bg-amber-400 text-sm font-normal text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">Приступить к выполнению</button>
        </div>

        <div className="mb-12">
          <h3 className="text-xl leading-relaxed font-semibold text-gray-700 mt-5 mb-2">Диагностика самоэффективности</h3>
          <p className="text-gray-700 text-sm w-[540px] mb-6 font-normal">
          Здесь приводится одна из конкретных диагностических методик, разработанных Маддуксом и Шеером, направленная на количественное определение уровня самоэффективности. Речь идет об оценке человеком своего потенциала в сфере предметной деятельности и в сфере общения, которым он реально может воспользоваться.          </p>
          <button className="bg-amber-400 text-sm font-normal text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">Приступить к выполнению</button>
        </div>

        <div className="mb-12">
          <h3 className="text-xl leading-relaxed font-semibold text-gray-700 mt-5 mb-2">Ценность здорового образа жизни</h3>
          <p className="text-gray-700 text-sm w-[540px] mb-6 font-normal">
          Опросник поможет узнать, почему вам важно заботиться о своем здоровье и к какой из 6 мотиваций к здоровому образу жизни можно отнести вашу.          </p>
          <button className="bg-amber-400 text-sm font-normal text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">Приступить к выполнению</button>
        </div>

        <div className="mb-12">
          <h3 className="text-xl leading-relaxed font-semibold text-gray-700 mt-5 mb-2">Опросник самоотношения</h3>
          <p className="text-gray-700 text-sm w-[540px] mb-6 font-normal">
          Опросник позволяет выявить три уровня самоотношения, отличающихся по степени обобщенности: лобальное самоотношение; самоотношение, дифференцированное по самоуважению, аутсимпатии, самоинтересу и ожиданиям отношения к себе; уровень конкретных действий (готовностей к ним) в отношении к своему «Я».</p>
          <button className="bg-amber-400 text-sm font-normal text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">Приступить к выполнению</button>
        </div>








      </div>
      <button type="submit" className="text-lg leading-relaxed font-normal bg-amber-400 mb-[-20px] text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">
        Сохранить
      </button>
    </div>
  );
};

export default Surveys;
