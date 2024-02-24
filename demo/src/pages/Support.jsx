import React, { useState } from 'react';

export default function Support() {
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    // При изменении содержимого сообщения сбрасываем сообщение об ошибке
    setErrorMessage('');
  };

  const handleAttachmentChange = (event) => {
    const file = event.target.files[0];
    setAttachment(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!message.trim()) {
      setErrorMessage('Пожалуйста, введите текст сообщения');
      return;
    }
    // Дополнительная логика для отправки сообщения администрации
    console.log('Отправить сообщение:', message);
    console.log('Прикрепленный файл:', attachment);
    // Сбросим содержимое поля после отправки
    setMessage('');
    setAttachment(null);
    setErrorMessage(''); // Сброс ошибки после успешной отправки
  };

  return (
    <div className="ml-0 w-2/4 p-20 mt-10 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">СВЯЖИТЕСЬ С НАМИ</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <p className="text-sm text-gray-700 mt-2">Пожалуйста, опишите свою проблему в поле ниже</p>
          <label htmlFor="message" className="block text-sm text-gray-700 mb-2"></label>
          <textarea
            id="message"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-yellow-500"
            rows="5"
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
          )}
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-700 mt-2">Вы можете прикрепить скриншот с вашей проблемой</p>
          <label htmlFor="attachment" className="block text-sm mb-2"></label>
          <div className="relative">
            <input
              type="file"
              id="attachment"
              accept=".jpg, .jpeg, .png, .gif"
              onChange={handleAttachmentChange}
              className="appearance-none bg-transparent border border-gray-300 py-2 px-4 rounded-lg text-gray-600 hover:border-yellow-500 hover:text-yellow-500 focus:outline-none focus:border-yellow-500 focus:text-yellow-500 w-full"
              style={{ position: 'absolute', top: 0, left: 0, opacity: 0, zIndex: 9999 }}
            />
            <button className="bg-amber-400 text-white py-2 px-4 rounded-lg hover:shadow-lg hover:bg-amber-500 focus:outline-none focus:bg-amber-500 transition-colors duration-300 w-full ">
              Выбрать файл
            </button>
          </div>
        </div>

        <button type="submit" className="mt-6 bg-amber-400 text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500 text-lg text-white py-2 px-4 rounded-lg w-full hover:shadow-lg hover:bg-amber-500 focus:outline-none focus:bg-amber-500">
          Отправить
        </button>
        <p className="text-sm mt-2 text-center text-gray-700 mt-10">Вы также можете отправить нам письмо на почту <a href="mailto:info@dimhealth.ru" className="text-blue-500 underline">info@dimhealth.ru</a>.</p>
      </form>
    </div>
  );
}
