import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const currentPage = location.pathname.split('/').pop(); // Получаем последний сегмент текущего пути

  let headerText = '';

  switch (currentPage) {
    case 'profile':
      headerText = 'Профиль';
      break;
    case 'dashboard':
      headerText = 'Главная';
      break;
    case 'investigations':
      headerText = 'Лабораторные и функциональные исследования';
      break;
	case 'surveys':
      headerText = 'Опросники';
      break;
    case 'accounts':
      headerText = 'Учётные записи';
      break;
    case 'support':
      headerText = 'Помощь и поддержка';
      break;
	case 'diseases':
	  headerText = 'Болезни и семейный анамнез';
	  break;
  case 'neoffi':
      headerText = 'Личностные черты';
      break;
    default:
      headerText = 'Риски заболеваний';
  }

  return (
    <div className="mt-4 bg-white h-20 bg-white shadow-lg rounded-lg text-black flex items-center p-6 mr-4" style={{ marginLeft: '266px' }}>
      <h1 className="text-2xl font-bold text-gray-700">{headerText}</h1>
    </div>
  );
}
