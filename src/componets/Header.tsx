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
import Button from '@/componets/Button';
import Link from 'next/link';
import CreatePost from '@/componets/CreatePost';

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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={'flex items-center'}>
      <div className={'circle_hover_bg'}>
        <Bars3Icon className={'icon'} />
      </div>
      <Link href={'/'}>
        <Image src={logo} alt={'logo'} className={'mr-4 h-[35px] w-[34px] cursor-pointer'} />
      </Link>
      <div className={'header_search'}>
        <MagnifyingGlassIcon className={'mr-2 w-[20px] text-gray-500'} />
        <input placeholder={'Поиск'} className={'w-full bg-inherit outline-none'} />
      </div>
      <Button
        className={'ml-3 rounded-xl border bg-white px-4 py-2 shadow hover:shadow-lg'}
        onClick={handleOpen}>
        <span className={'text-[16px] font-medium'}>
          {screenWidth < 730 ? <PlusIcon className={'h-[25px] w-[25px]'} /> : 'Новая запись'}
        </span>
      </Button>

      <CreatePost open={open} handleClose={handleClose} />
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
