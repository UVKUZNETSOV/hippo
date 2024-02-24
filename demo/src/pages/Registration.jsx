import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Swagger url для запроса.
const apiUrl = 'https://kb.ai-hippocrates.ru/hippo/Account/SignUp';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const requestData = {
    email: email,
    password: password,
    passwordConfirm: passwordConfirm
  };

  const changeEmail = event => {
    setEmail(event.target.value);
  };

  const changePassword = event => {
    setPassword(event.target.value);
  };

  const changePasswordConfirm = event => {
    setPasswordConfirm(event.target.value);
  };

  const signup = () => {
    if (!agreePolicy) {
      // Если не подтверждено согласие с политикой, можно вывести сообщение или выполнить нужные действия
      console.error('Необходимо подтвердить согласие с политикой');
      return;
    }

    console.log(requestData);
    axios
      .post(`${apiUrl}`, requestData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(requestData);
        console.log('Успешный ответ:', response.data);
      })
      .catch(error => {
        console.log(requestData);
        console.error('Ошибка запроса:', error.message);
      });
  };

  const togglePolicyModal = () => {
    setShowPolicyModal(!showPolicyModal);
  };

  return (
    <div className="signup bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-10 pt-12 pb-10 bg-white rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Регистрация</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Логин</label>
            <input
              value={email}
              onChange={changeEmail}
              placeholder=""
              className="w-full p-4 border border-gray-300 rounded-2xl"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Пароль</label>
            <input
              value={password}
              onChange={changePassword}
              placeholder=""
              type="password"
              className="w-full p-4 border border-gray-300 rounded-2xl"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Повторите пароль</label>
            <input
              value={passwordConfirm}
              onChange={changePasswordConfirm}
              placeholder=""
              type="password"
              className="w-full p-4 border border-gray-300 rounded-2xl"
            />
          </div>
        </form>
        {/* Добавляем чекбокс для согласия с политикой */}
        <div className="mb-2 text-center">
          <input
            type="checkbox"
            id="agreePolicyCheckbox"
            checked={agreePolicy}
            onChange={() => setAgreePolicy(!agreePolicy)}
            className="mr-2"
          />
          <label htmlFor="agreePolicyCheckbox" className="text-xs text-gray-700">
            Подтверждаю согласие с <br/>«Политикой обработки персональных данных».
          </label>
        </div>
        <div className='text-center'>
        <button
          onClick={togglePolicyModal}
          className="text-xs text-gray-500 underline cursor-pointer focus:outline-none"
        >
          Политика обработки персональных данных
        </button>
        </div>
        <button
          onClick={signup}
          className="w-full mt-4 bg-amber-400 text-white py-4 px-6 rounded-2xl duration-700 hover:shadow-lg hover:bg-amber-500"
        >
          Создать аккаунт
        </button>
        <p className="mt-4 text-center text-gray-600">
          Уже есть аккаунт?{' '}
          <Link to="/login" className="text-amber-500 hover:underline">
            Войдите
          </Link>
        </p>
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-gray-600">или</p>
        </div>
        <div
          onClick=""
          className="w-full bg-white text-black py-4 px-6 rounded-full duration-700 hover:bg-gray-50 mb-4 border border-gray-300 flex items-center justify-center cursor-pointer"
        >
          <img
            src="./img/google.png"
            alt=""
            className="mr-2"
          />
          Регистрация с Google
        </div>

        {/* Модальное окно с политикой обработки персональных данных */}
        {showPolicyModal && (
          <div className="fixed inset-0 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-md max-w-2xl w-full h-3/5 overflow-auto">
              <h2 className="text-2xl font-bold mb-4">ПОЛИТИКА ПО ОБРАБОТКЕ ПЕРСОНАЛЬНЫХ ДАННЫХ</h2>
              <p className="text-gray-700 mb-4">
                Я, осуществляя заполнение анкет и ввод данных на веб-сайте интеллектуальной системы по здоровьесбережению и/или любых ее разделов и записей моей электронной медицинской карты, а также записей на моей странице ВКонтакте в Интернете (далее – «Сайт») и/или в мобильном приложении (далее – «Мобильное приложение»), либо используя Сайт или Мобильное приложение для целей получения медицинских и иных услуг третьих лиц, сведения о которых размещены на Сайте или в Мобильном приложении, настоящим своей волей и в своем интересе выражаю согласие на автоматизированную, а также без использования средств автоматизации обработку моих персональных данных Федеральное государственное учреждение "Федеральный исследовательский центр "Информатика и управление" Российской академии наук" (ФИЦ ИУ РАН) (ОГРН 1027739314030, далее – «Оператор»), находящимся по адресу: 119333, город Москва, ул. Вавилова, д.44 к.2 для следующих целей:
              </p>
              <p className="text-gray-700 mb-4">
                Получения регулярных рекомендаций по осуществлению мною превентивных мероприятий в отношении развития гипертонической болезни, инфаркта миокарда, инсульта, депрессии (в последующем возможность профилактики других заболеваний);
              </p>
              <p className="text-gray-700 mb-4">
                Связи с центром поддержки пользователей Оператора, с помощью интегрированной в Сайт обратной связи с Оператором;
              </p>
              <p className="text-gray-700 mb-4">
                Предоставления поддержки при использовании Сайта, с помощью интегрированной в Сайт обратной связи с Оператором;
              </p>
              <p className="text-gray-700 mb-4">
                Получения отзывов и пожеланий по работе Сайта и качеству оказания услуг, с помощью интегрированной в Сайт обратной связи с Оператором;
              </p>
              <p className="text-gray-700 mb-4">
                Публикации отзывов об использовании системы здоровьесбережения в виде, не позволяющем меня идентифицировать третьим лицам.
              </p>
              <p className="text-gray-700 mb-4">
                Перечень моих персональных данных, на обработку которых я даю согласие:
              </p>
              <p className="text-gray-700 mb-4">
                Адрес электронной почты;
              </p>
              <p className="text-gray-700 mb-4">
                Пол;
              </p>
              <p className="text-gray-700 mb-4">
                Возраст;
              </p>
              <p className="text-gray-700 mb-4">
                Дополнительные сведения, по моему желанию, указанные при заполнении формы на Сайте или в Мобильном приложении.
              </p>
              <p className="text-gray-700 mb-4">
                Я даю согласие на следующие способы обработки моих персональных данных: сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), обезличивание, извлечение, использование в обезличенном виде для научных публикаций и докладов, медицинским организациям и/или врачам, блокирование, удаление, уничтожение.
              </p>
              <p className="text-gray-700 mb-4">
                Настоящее согласие вступает в силу после подтверждения в форме согласия на обработку персональных данных на Сайте. Настоящее согласие может быть отозвано мною в любой момент с обязательным направлением Оператору письменного уведомления, с помощью интегрированной в Сайт обратной связи с Оператором.
              </p>
              <p className="text-gray-700 mb-4">
                Мне разъяснено, что при отзыве мною согласия Оператор (или уполномоченный им оператор) вправе продолжить использование моих персональных данных для научных целей в случаях, предусмотренных Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».
              </p>
              <p className="text-gray-700 mb-4">
                Мне разъяснено, что я вправе отказаться от получения информационных сообщений и рекламных материалов о системе по здоровьесбережению и услугах, оказываемых с использованием системы по здоровьесбережению, направив требование о прекращении направления сообщений в адрес Оператора с помощью интегрированной в Сайт системы обратной связи с Оператором.
              </p>
              
              {/* Кнопка "Закрыть" */}
              <button
                onClick={togglePolicyModal}
                className="mt-4 bg-amber-400 text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500"
              >
                Закрыть
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export { Registration };
