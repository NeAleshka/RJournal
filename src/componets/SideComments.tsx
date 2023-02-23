import React from 'react';
import {ArrowSmallRightIcon} from '@heroicons/react/24/solid';
import {IItemComment, ISideComment} from '@/interfaces';
import Image from 'next/image';

const SideComments = () => {
  const userLogo = 'https://web24.com.ua/wp-content/uploads/2021/10/tema-06-001jpg.jpg';
  const items: ISideComment[] = [
    {
      user: {
        fullName: 'Никита Сергеевич',
      },
      text: 'Каждое утро я начинаю с чашки кофе',
      post: {
        title: 'Какой у вас дома кофе?',
      },
    },
    {
      user: {
        fullName: 'Будай Алексей',
      },
      text: 'Каждое утро я начинаю с чашки кофе',
      post: {
        title: 'Какой у вас дома кофе?',
      },
    },
    {
      user: {
        fullName: 'Никита Сергеевич',
      },
      text: 'Каждое утро я начинаю с чашки кофе',
      post: {
        title: 'Какой у вас дома кофе?',
      },
    },
  ];

  return (
    <div className={'sticky top-[80px] w-fit ml-[40px]'}>
      <h3 className={'text-[18px] font-medium flex items-center'}>
        Комментарии
        <ArrowSmallRightIcon className={'w-[18px] h-[18px] ml-[12px]'} />
      </h3>
      {items.map(({user, post, text}, index) => (
        <ItemComment
          key={index}
          avatar={userLogo}
          userName={user.fullName}
          comment={text}
          commentTitle={post.title}
        />
      ))}
    </div>
  );
};

export default SideComments;

const ItemComment = ({avatar, comment, commentTitle, userName}: IItemComment) => {
  return (
    <div className={'mb-[25px] border-b pr-8 last-of-type:border-b-0 first-of-type:mt-[30px]'}>
      <div className={'flex'}>
        <Image
          src={avatar}
          alt={'avatar'}
          width={0}
          height={0}
          className={'h-[23px] w-[23px] rounded-[5px] mr-[7px]'}
        />
        <span className={'font-bold'}>{userName}</span>
      </div>

      <div className={'text-[16px] mt-[16px] mb-[5px]'}>{comment}</div>
      <div className={'font-medium mb-[25px]'}>{commentTitle}</div>
    </div>
  );
};
