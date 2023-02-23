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
import Link from 'next/link';

const Post = ({title, imgUrl, description, id}: IPostProps) => {
  return (
    <div className={'bg-white rounded-[10px] h-[600px] p-[20px] mb-[25px]'}>
      <div className={'font-medium text-[22px] leading-6 mb-[10px]'}>{title}</div>
      <div className={'text-[16px] mb-[10px]'}>{description}</div>
      <div className={'bg-amber-300'}>
        <Image
          src={logo}
          alt={'logo'}
          className={'w-[400px] h-[400px] mx-auto mb-[20px]'}
          priority
        />
      </div>
      <PostActions />
    </div>
  );
};

export default Post;

const PostActions = () => {
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
