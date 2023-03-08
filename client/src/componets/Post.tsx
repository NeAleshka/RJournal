import React from 'react';
import Image from 'next/image';
import {logo} from '@/assets/images';
import {IPostProps} from '@/interfaces';
import {
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  BookmarkIcon,
  ShareIcon,
} from '@heroicons/react/24/outline';

const Post = ({title, imgUrl, description}: IPostProps) => {
  return (
    <div className={'mb-[25px] h-[600px] rounded-[10px] bg-white p-[20px]'}>
      <div className={'mb-[10px] text-[22px] font-medium leading-6'}>{title}</div>
      <div className={'mb-[10px] text-[16px]'}>{description}</div>
      <div className={'bg-amber-300'}>
        <Image
          src={logo}
          alt={'logo'}
          className={'mx-auto mb-[20px] h-[400px] w-[400px]'}
          priority
        />
      </div>
      <PostActions />
    </div>
  );
};

export default Post;

export const PostActions = () => {
  return (
    <div className={'flex justify-between'}>
      <div className={'circle_hover_bg hover:bg-gray-100'}>
        <ChatBubbleOvalLeftIcon className={'icon'} />
      </div>
      <div className={'circle_hover_bg hover:bg-gray-100'}>
        <ArrowPathRoundedSquareIcon className={'icon'} />
      </div>
      <div className={'circle_hover_bg hover:bg-gray-100'}>
        <BookmarkIcon className={'icon'} />
      </div>
      <div className={'circle_hover_bg hover:bg-gray-100'}>
        <ShareIcon className={'icon'} />
      </div>
    </div>
  );
};
