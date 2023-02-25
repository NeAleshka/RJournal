import MainLayout from '@/layouts/MainLayout';
import FullPost from '@/componets/FullPost';
import {useState} from 'react';
import PostComment from '@/componets/PostComment';

export default function fullPost() {
  return (
    <MainLayout contentFullWidth={true} className={'mb-[50px]'}>
      <FullPost />
      <div className={'mt-[50px] rounded-[10px] bg-white py-[20px] pb-16'}>
        <div className={'px-8'}>
          <div className={'mb-10 mt-5 text-[20px] font-medium'}>42 комментария</div>
          <SortComments />
          <PostComment />
          <PostComment />
          <PostComment />
        </div>
      </div>
    </MainLayout>
  );
}

const SortComments = () => {
  const [sortComments, setSortComments] = useState<'popular' | 'date'>('popular');
  return (
    <div className={'mb-5 flex w-full border-b text-gray-400'}>
      <div
        className={`cursor-pointer py-[6px] px-[26px] ${
          sortComments === 'popular' && 'border-b-4 border-b-blue-400 text-blue-400'
        }`}
        onClick={() => setSortComments('popular')}>
        ПОПУЛЯРНЫЕ
      </div>
      <div
        className={`cursor-pointer py-[6px] px-[26px] ${
          sortComments === 'date' && 'border-b-4 border-b-blue-400 text-blue-400'
        }`}
        onClick={() => setSortComments('date')}>
        ПО ПОРЯДКУ
      </div>
    </div>
  );
};
