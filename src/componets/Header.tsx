import React from 'react';
import {Bars3Icon, MagnifyingGlassIcon, UserCircleIcon} from '@heroicons/react/24/solid';
import {ChatBubbleLeftEllipsisIcon, BellIcon, ChevronDownIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {logo} from '@/assets/images';

const Header = () => {
  return (
    <div
      className={
        'flex fixed z-10 items-center justify-between w-full h-[60px] px-[10px] bg-[#FFF4E2] md:pl-[10px] md:pr-10'
      }>
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Header;

const LeftSide = () => {
  return (
    <div className={'flex items-center'}>
      <div className={'circle_hover_bg'}>
        <Bars3Icon className={'icon'} />
      </div>
      <Image src={logo} alt={'logo'} className={'w-[34px] h-[35px] cursor-pointer mr-4'} priority />
      <div className={'header_search'}>
        <MagnifyingGlassIcon className={'w-[20px] mr-2 text-gray-500'} />
        <input placeholder={'Поиск'} className={'bg-inherit outline-none'} />
      </div>
      <button className={'ml-3 bg-white shadow rounded-xl px-4 py-2 border hover:shadow-lg'}>
        <span className={'font-medium text-[16px] '}>Новая запись</span>
      </button>
    </div>
  );
};

const RightSide = () => {
  return (
    <div className={'flex'}>
      <div className={'circle_hover_bg'}>
        <ChatBubbleLeftEllipsisIcon className={'icon'} />
      </div>
      <div className={'circle_hover_bg'}>
        <BellIcon className={'icon'} />
      </div>
      <UserCircleIcon className={'w-[40px] cursor-pointer'} />
      <ChevronDownIcon className={'w-[15px]'} />
    </div>
  );
};
