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
    <div className={'sticky top-[80px] ml-[40px] w-fit'}>
      <h3 className={'flex items-center text-[18px] font-medium'}>
        Комментарии
        <ArrowSmallRightIcon className={'ml-[12px] h-[18px] w-[18px]'} />
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
    <div className={'mb-[25px] border-b pr-8 first-of-type:mt-[30px] last-of-type:border-b-0'}>
      <div className={'flex'}>
        <Image
          src={avatar}
          alt={'avatar'}
          width={0}
          height={0}
          className={'mr-[7px] h-[23px] w-[23px] rounded-[5px]'}
        />
        <span className={'font-bold'}>{userName}</span>
      </div>

      <div className={'mt-[16px] mb-[5px] text-[16px]'}>{comment}</div>
      <div className={'mb-[25px] font-medium'}>{commentTitle}</div>
    </div>
  );
};
