import React from 'react';
import {FireIcon, ArrowTrendingUpIcon} from '@heroicons/react/24/solid';
import {ChatBubbleLeftEllipsisIcon, ListBulletIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {IMenuItem} from '@/interfaces';
import {useRouter} from 'next/router';

const LeftMenu = () => {
  const menuItems: IMenuItem[] = [
    {text: 'Лента', icon: <FireIcon />, path: '/'},
    {text: 'Сообщения', icon: <ChatBubbleLeftEllipsisIcon />, path: '/messages'},
    {text: 'Рейтинг RJ', icon: <ArrowTrendingUpIcon />, path: '/rating'},
    {text: 'Подписки', icon: <ListBulletIcon />, path: '/follows'},
  ];

  const routePath = useRouter().asPath;

  return (
    <div className={'sticky top-[80px] w-full  md:w-[200px]'}>
      <ul className={'left_menu_wrapper'}>
        {menuItems.map(({text, path, icon}, index) => (
          <li
            key={`${path}_${index}`}
            className={`left_menu_item ${routePath === path && 'bg-gray-200 md:pl-[10px]'}`}>
            <Link href={path}>
              <div className={'flex'}>
                <div className={'icon mr-2'}>{icon}</div>
                {text}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftMenu;

//bg-gray-200 md:pl-[10px]
