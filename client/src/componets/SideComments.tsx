import React, {useState} from 'react';
import {ArrowSmallRightIcon, ArrowSmallUpIcon} from '@heroicons/react/24/solid';
import {IItemComment, ISideComment} from '@/interfaces';
import Image from 'next/image';
import {posts} from '@/pages';
import Link from 'next/link';

const SideComments = () => {
  const userLogo = 'https://web24.com.ua/wp-content/uploads/2021/10/tema-06-001jpg.jpg';
  const items: ISideComment[] = [
    {
      user: {
        fullName: 'Никита Сергеевич',
      },
      text: 'Каждое утро я начинаю с чашки кофе',
      post: {
        title: `${posts[0].title}`,
      },
    },
    {
      user: {
        fullName: 'Будай Алексей',
      },
      text: 'Каждое утро я начинаю с чашки кофе',
      post: {
        title: `${posts[1].title}`,
      },
    },
    {
      user: {
        fullName: 'Никита Сергеевич',
      },
      text: 'Каждое утро я начинаю с чашки кофе',
      post: {
        title: `${posts[2].title}`,
      },
    },
  ];
  const [hideComments, setHideComments] = useState(false);

  return (
    <>
      {hideComments ? (
        <HideComments setHideComments={setHideComments} />
      ) : (
        <div className={'sticky top-[80px] ml-[40px] w-fit cursor-pointer'}>
          <h3
            className={'flex  items-center text-[18px] font-medium'}
            onClick={() => setHideComments(true)}>
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
              postId={index.toString()}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SideComments;

const ItemComment = ({avatar, comment, commentTitle, userName, postId}: IItemComment) => {
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
      <Link href={`/news/${posts[+postId].id}`}>
        <div
          className={
            'mb-[25px] max-w-[270px] overflow-hidden text-ellipsis whitespace-nowrap font-medium'
          }>
          {commentTitle}
        </div>
      </Link>
    </div>
  );
};

const HideComments = ({setHideComments}: any) => {
  return (
    <div className={'flex items-start'}>
      <h3 className={'mt-[20px] flex -rotate-90 items-center pt-[140px] text-[18px] font-medium'}>
        <div
          className={'flex cursor-pointer items-center hover:animate-bounce'}
          onClick={() => setHideComments(false)}>
          <span>Комментарии</span>
          <ArrowSmallUpIcon className={'ml-[12px] h-[18px] w-[18px]'} />
        </div>
      </h3>
    </div>
  );
};
