import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleLoginButton from '../components/shared/GoogleLogin'

const apiUrl = 'https://kb.ai-hippocrates.ru/hippo/Account/SignIn';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const requestData = {
    email: email,
    password: password
  };

  const changeEmail = event => {
    setEmail(event.target.value);
  };

  const changePassword = event => {
    setPassword(event.target.value);
  };

  const login = () => {
    console.log(requestData);
    axios
      .post(`${apiUrl}`, requestData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      // Вывод ответа в логи при успехе.
      .then(response => {
        console.log(requestData); // Вывод объекта с введёнными данными.
        console.log('Успешный ответ:', response.data); // Вывод ответа сервера.
      })
      // Вывод ответа в логи при не успехе.
      .catch(error => {
        console.log(requestData); // Вывод объекта с введёнными данными.
        console.error('Ошибка запроса:', error.message); // Вывод ошибки.
      });
  };

  return (
    <div className="signup bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-10 pt-16 pb-16 bg-white rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-12 text-center">Вход</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Логин</label>
            <input
              value={email}
              onChange={changeEmail}
              placeholder=""
              className="w-full p-4 border border-gray-300 rounded-2xl"
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Пароль</label>
            <input
              value={password}
              onChange={changePassword}
              placeholder=""
              type="password"
              className="w-full p-4 border border-gray-300 rounded-2xl"
            ></input>
          </div>
        </form>
        <button
          onClick={login}
          className="w-full mt-4 bg-amber-400 text-white py-4 px-6 rounded-2xl duration-700 hover:shadow-lg hover:bg-amber-500"
        >
          Войти
        </button>
        <p className="mt-4 text-center text-gray-600">
          Забыли пароль?{' '}
          <Link to="/reset-password" className="text-amber-500 hover:underline">
            Восстановить
          </Link>
        </p>
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-gray-600">или</p>
        </div>
        <GoogleLoginButton />
        {/* <div
          onClick={login}
          className="w-full bg-white text-black py-4 px-6 rounded-full duration-700 hover:bg-gray-50 mb-4 border border-gray-300 flex items-center justify-center cursor-pointer"
        >
          <img
            src="./img/google.png"
            alt=""
            className="mr-2"
          />
          Войти с Google
        </div> */}
        <p className="text-center text-gray-600">
          Нет аккаунта?{' '}
          <Link to="/registration" className="text-amber-500 hover:underline">
            Зарегистрируйтесь
          </Link>
        </p>
      </div>
    </div>
  );
}

export { Login };
