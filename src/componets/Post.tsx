import React from 'react';
import Image from 'next/image';
import {logo} from '@/assets/images';

export interface IPostProps {
  title: string;
  description: string;
  imgUrl: string;
}

const Post = ({title, imgUrl, description}: IPostProps) => {
  return (
    <div className={'bg-white rounded h-[600px]'}>
      <div>{title}</div>
      <div>{description}</div>
      <Image src={logo} alt={'logo'} className={'w-[500px] h-[500px]'} priority />
    </div>
  );
};

export default Post;
