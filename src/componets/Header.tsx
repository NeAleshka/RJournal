import React from 'react';
import {Bars3Icon, MagnifyingGlassIcon, UserCircleIcon} from '@heroicons/react/24/solid';
import {
  BellIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronDownIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {logo} from '@/assets/images';
import {useDeviceSize} from '@/hooks';

const Header = () => {
  return (
    <div className={'header'}>
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Header;

const LeftSide = () => {
  const screenWidth = useDeviceSize();

  return (
    <div className={'flex items-center'}>
      <div className={'circle_hover_bg'}>
        <Bars3Icon className={'icon'} />
      </div>
      <Image src={logo} alt={'logo'} className={'w-[34px] h-[35px] cursor-pointer mr-4'} />
      <div className={'header_search'}>
        <MagnifyingGlassIcon className={'w-[20px] mr-2 text-gray-500'} />
        <input placeholder={'Поиск'} className={'bg-inherit outline-none w-full'} />
      </div>
      <button className={'ml-3 bg-white shadow rounded-xl px-4 py-2 border hover:shadow-lg'}>
        <span className={'font-medium text-[16px]'}>
          {' '}
          {screenWidth < 730 ? <PlusIcon className={'w-[25px] h-[25px]'} /> : 'Новая запись'}
        </span>
      </button>
    </div>
  );
};

const RightSide = () => {
  const width = useDeviceSize();

  return (
    <div className={'flex'}>
      {width > 600 && (
        <>
          <div className={'circle_hover_bg'}>
            <ChatBubbleLeftEllipsisIcon className={'icon'} />
          </div>
          <div className={'circle_hover_bg'}>
            <BellIcon className={'icon'} />
          </div>
        </>
      )}

      <UserCircleIcon className={'w-[40px] cursor-pointer'} />
      <ChevronDownIcon className={'w-[15px]'} />
    </div>
  );
};
