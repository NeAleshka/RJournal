import React from 'react';
import {FireIcon, ArrowTrendingUpIcon} from '@heroicons/react/24/solid';
import {ChatBubbleLeftEllipsisIcon, ListBulletIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface IMenuItem {
  text: string;
  icon: React.ReactNode;
  path: string;
}

const LeftMenu = () => {
  const menuItems: IMenuItem[] = [
    {text: 'Лента', icon: <FireIcon />, path: '/'},
    {text: 'Сообщения', icon: <ChatBubbleLeftEllipsisIcon />, path: '/messages'},
    {text: 'Рейтинг RJ', icon: <ArrowTrendingUpIcon />, path: '/rating'},
    {text: 'Подписки', icon: <ListBulletIcon />, path: '/follows'},
  ];

  return (
    <div className={'fixed w-[200px]'}>
      <ul className={'flex flex-col space-y-3 first:mt-5'}>
        {menuItems.map(({text, path, icon}, index) => (
          <li key={`${path}_${index}`} className={'left_menu_item'}>
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
