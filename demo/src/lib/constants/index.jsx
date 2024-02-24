import {
	HiHeart,
	HiOutlineQuestionMarkCircle,
	HiOutlineIdentification,
	HiClipboardList,
	HiShieldCheck,
	HiOutlineDocumentDuplicate
} from 'react-icons/hi'



export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'risks',
		label: 'Риски заболеваний',
		path: '/risks',
		icon: <HiHeart />
	},
	{
		key: 'diseases',
		label: 'Мои заболевания',
		path: '/diseases',
		icon: <HiShieldCheck />
	},
	{
		key: 'investigations',
		label: 'Исследования',
		path: '/investigations',
		icon: <HiOutlineDocumentDuplicate />
	},
	{
		key: 'surveys',
		label: 'Опросники',
		path: '/surveys',
		icon: <HiClipboardList />
	},
	{
		key: 'accounts',
		label: 'Учётные записи',
		path: '/accounts',
		icon: <HiOutlineIdentification />
	},

]

 export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'support',
		label: 'Помощь и Поддержка',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
