import homeSvg from '@assets/home.svg';
import messageSvg from '@assets/message.svg';
import tipSvg from '@assets/tip.svg';
import searchSvg from '@assets/search.svg';
import style from '../common.module.scss';

export const menus = [
  {
    key: 'tweets',
    title: 'Home',
    link: '/tweets',
    icon: <img className={style.icon} src={homeSvg} alt="" />,
  },
  {
    key: 'search',
    link: '/search',
    icon: <img className={style.icon} src={searchSvg} alt="" />,
  },
  {
    key: 'tip',
    title: 'Notifications',
    link: '/tip',
    icon: <img className={style.icon} src={tipSvg} alt="" />,
  },
  {
    key: 'message',
    title: 'Messages',
    link: '/message',
    icon: <img className={style.icon} src={messageSvg} alt="" />,
  },
  {
    key: 'comment',
    title: 'reply',
    link: '/comment',
    hideHeader: true,
  },
];

export const getMenuByKey = (key) => menus.find((item) => item.key === key);

export const getMenuByLink = (link) => menus.find((item) => item.link === link);

export const includeMenu = (link) => menus.some((item) => item.link === link);